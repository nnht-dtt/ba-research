#!/usr/bin/env node
// Tiến độ dựng khoá, lưu ở .claude/content-plan/<COURSE>.json để làm tiếp được
// qua nhiều phiên. Claude viết file plan (theo schema trong SKILL.md), script
// này kiểm schema và đọc/ghi trạng thái.
//
//   plan.mjs list                                 các plan đang có + tiến độ
//   plan.mjs validate <COURSE>                    kiểm schema
//   plan.mjs status   <COURSE>                    bảng tiến độ
//   plan.mjs approve  <COURSE>                    đánh dấu người dùng đã duyệt dàn bài
//   plan.mjs next     <COURSE>                    việc kế tiếp (JSON). Exit: 3 xong hết,
//                                                 4 chỉ còn bài needs-attention, 5 chưa duyệt
//   plan.mjs mark     <COURSE> <slug|scaffold> <status> [note]
//
// Trạng thái bài: pending → in-progress → done, hoặc needs-attention.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "..", "..");
const DIR = path.join(REPO, ".claude", "content-plan");
const file = (course) => path.join(DIR, `${course}.json`);
const STATUSES = ["pending", "in-progress", "done", "needs-attention"];
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function load(course) {
  if (!course) usage();
  const f = file(course);
  if (!fs.existsSync(f)) {
    console.error(`Chưa có plan cho ${course} (${path.relative(REPO, f)}).`);
    process.exit(2);
  }
  return JSON.parse(fs.readFileSync(f, "utf8"));
}
function save(plan) {
  fs.writeFileSync(file(plan.course), JSON.stringify(plan, null, 2) + "\n");
}

function problems(plan) {
  const out = [];
  for (const k of ["course", "title", "dir", "slugPrefix"]) if (!plan[k]) out.push(`thiếu "${k}"`);
  if (!Array.isArray(plan.sources) || !plan.sources.length) out.push(`"sources" phải là mảng không rỗng`);
  if (!Number.isInteger(plan.questionsPerLesson) || plan.questionsPerLesson < 0) out.push(`"questionsPerLesson" phải là số nguyên >= 0`);
  if (!Array.isArray(plan.chapters) || !plan.chapters.length) out.push(`"chapters" phải là mảng không rỗng`);
  if (!Array.isArray(plan.lessons) || !plan.lessons.length) out.push(`"lessons" phải là mảng không rỗng`);
  if (out.length) return out;
  const m = plan.meta ?? {};
  for (const k of ["shortTitle", "level", "category", "kind", "description", "hint", "accentColor"]) if (!m[k]) out.push(`thiếu "meta.${k}"`);
  if (m.kind && !["knowledge", "certification"].includes(m.kind)) out.push(`meta.kind phải là "knowledge" hoặc "certification"`);
  if (m.kind === "certification") {
    for (const k of ["passingScore", "examMinutes", "examQuestions"]) if (!(m[k] > 0)) out.push(`khoá certification cần meta.${k} > 0`);
  }
  const chIds = new Set(plan.chapters.map((c) => c.id));
  plan.chapters.forEach((c, i) => { if (!c.id || !c.title) out.push(`chapters[${i}] cần id và title`); });
  const seen = new Set();
  plan.lessons.forEach((l, i) => {
    const at = `lessons[${i}] (${l.slug ?? "?"})`;
    for (const k of ["slug", "title", "shortTitle", "chapter", "description"]) if (!l[k]) out.push(`${at}: thiếu "${k}"`);
    if (l.slug && !SLUG.test(l.slug)) out.push(`${at}: slug chỉ dùng chữ thường không dấu, số, gạch ngang`);
    if (l.slug && !l.slug.startsWith(plan.slugPrefix)) out.push(`${at}: slug nên bắt đầu bằng slugPrefix "${plan.slugPrefix}"`);
    if (seen.has(l.slug)) out.push(`${at}: slug trùng`);
    seen.add(l.slug);
    if (l.chapter && !chIds.has(l.chapter)) out.push(`${at}: chapter "${l.chapter}" không có trong chapters`);
    if (!Array.isArray(l.sources) || !l.sources.length) out.push(`${at}: "sources" phải là mảng không rỗng`);
    if (!STATUSES.includes(l.status)) out.push(`${at}: status "${l.status}" không hợp lệ`);
  });
  return out;
}

const [cmd, course, ...rest] = process.argv.slice(2);

function usage() {
  console.error("Dùng: plan.mjs list | validate|status|approve|next <COURSE> | mark <COURSE> <slug|scaffold> <status> [note]");
  process.exit(1);
}

if (cmd === "list") {
  const files = fs.existsSync(DIR) ? fs.readdirSync(DIR).filter((f) => f.endsWith(".json")) : [];
  if (!files.length) console.log("Chưa có plan nào.");
  for (const f of files) {
    const p = JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8"));
    const done = p.lessons.filter((l) => l.status === "done").length;
    console.log(`${p.course}  ${done}/${p.lessons.length} bài  ${p.approved ? "đã duyệt" : "CHƯA DUYỆT"}  — ${p.title}`);
  }
} else if (cmd === "validate") {
  const out = problems(load(course));
  if (out.length) { out.forEach((x) => console.log(`- ${x}`)); process.exit(1); }
  console.log("plan hợp lệ");
} else if (cmd === "approve") {
  const plan = load(course);
  const out = problems(plan);
  if (out.length) { out.forEach((x) => console.log(`- ${x}`)); process.exit(1); }
  plan.approved = true;
  save(plan);
  console.log(`${course}: đã duyệt dàn bài (${plan.lessons.length} bài)`);
} else if (cmd === "next") {
  const plan = load(course);
  const out = problems(plan);
  if (out.length) { out.forEach((x) => console.log(`- ${x}`)); process.exit(1); }
  if (!plan.approved) { console.log("CHƯA DUYỆT — chờ người dùng duyệt dàn bài."); process.exit(5); }
  if (!plan.scaffolded) { console.log(JSON.stringify({ step: "scaffold" })); process.exit(0); }
  const l = plan.lessons.find((x) => x.status === "in-progress") || plan.lessons.find((x) => x.status === "pending");
  if (!l) {
    const stuck = plan.lessons.filter((x) => x.status === "needs-attention");
    if (stuck.length) { console.log(`CÒN BÀI CẦN NGƯỜI DÙNG XEM: ${stuck.map((x) => x.slug).join(", ")}`); process.exit(4); }
    console.log("XONG — mọi bài đã done."); process.exit(3);
  }
  const order = plan.lessons.indexOf(l) + 1;
  console.log(JSON.stringify({ step: "lesson", order, ...l }));
} else if (cmd === "mark") {
  const [slug, status, ...note] = rest;
  const plan = load(course);
  if (slug === "scaffold") {
    plan.scaffolded = status === "done";
  } else {
    if (!STATUSES.includes(status)) { console.error(`status phải là: ${STATUSES.join(", ")}`); process.exit(1); }
    const l = plan.lessons.find((x) => x.slug === slug);
    if (!l) { console.error(`Không có bài ${slug} trong plan ${course}`); process.exit(2); }
    l.status = status;
    l.note = note.join(" ");
  }
  save(plan);
  console.log(`${slug} -> ${status}`);
} else if (cmd === "status") {
  const plan = load(course);
  const count = {};
  plan.lessons.forEach((l) => { count[l.status] = (count[l.status] || 0) + 1; });
  console.log(`${plan.course} — ${plan.title}`);
  console.log(`duyệt: ${plan.approved ? "có" : "chưa"} | khung khoá: ${plan.scaffolded ? "có" : "chưa"} | ${Object.entries(count).map(([k, v]) => `${k} ${v}`).join(", ")}`);
  for (const ch of plan.chapters) {
    console.log(`  ${ch.title}`);
    for (const l of plan.lessons.filter((x) => x.chapter === ch.id)) {
      console.log(`    [${l.status.padEnd(15)}] ${l.slug}${l.note ? `  — ${l.note}` : ""}`);
    }
  }
} else {
  usage();
}

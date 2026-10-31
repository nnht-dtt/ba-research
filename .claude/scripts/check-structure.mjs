#!/usr/bin/env node
// Kiểm tra cấu trúc nội dung: khoá, chương, bài, file .md, câu hỏi.
// Đọc thẳng web/data/*.ts (transpile bằng typescript trong web/node_modules),
// nên kết quả khớp với thứ site thật sự build ra.
//
//   node .claude/scripts/check-structure.mjs           # in lỗi + cảnh báo
//   node .claude/scripts/check-structure.mjs --quiet   # chỉ in lỗi
//
// Exit 0 = không có lỗi (có thể có cảnh báo), 1 = có lỗi, 2 = không chạy được.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const WEB = path.join(REPO, "web");
const LESSONS_DIR = path.join(REPO, "lessons");
const PLAN_DIR = path.join(REPO, ".claude", "content-plan");
const quiet = process.argv.includes("--quiet");

const webRequire = createRequire(path.join(WEB, "package.json"));
let ts;
try {
  ts = webRequire("typescript");
} catch {
  console.error("Không tìm thấy typescript. Chạy `cd web && npm install` trước.");
  process.exit(2);
}

// ---------- nạp file .ts dữ liệu ----------
const cache = new Map();
function resolveFrom(file, spec) {
  let base;
  if (spec.startsWith("@/")) base = path.join(WEB, spec.slice(2));
  else if (spec.startsWith(".")) base = path.resolve(path.dirname(file), spec);
  else return null;
  for (const c of [base, `${base}.ts`, `${base}.tsx`, path.join(base, "index.ts")]) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) return c;
  }
  throw new Error(`không resolve được "${spec}" từ ${path.relative(REPO, file)}`);
}
function loadTs(file) {
  if (cache.has(file)) return cache.get(file).exports;
  const mod = { exports: {} };
  cache.set(file, mod);
  if (file.endsWith(".json")) {
    mod.exports = JSON.parse(fs.readFileSync(file, "utf8"));
    return mod.exports;
  }
  const out = ts.transpileModule(fs.readFileSync(file, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true },
  }).outputText;
  const req = (spec) => {
    const p = resolveFrom(file, spec);
    return p ? loadTs(p) : webRequire(spec);
  };
  new Function("exports", "require", "module", "__filename", "__dirname", out)(mod.exports, req, mod, file, path.dirname(file));
  return mod.exports;
}

let courses, lessons, chapters, questions;
try {
  ({ courses } = loadTs(path.join(WEB, "data", "courses.ts")));
  ({ lessons, chapters } = loadTs(path.join(WEB, "data", "lessons.ts")));
  ({ questions } = loadTs(path.join(WEB, "data", "questions.ts")));
} catch (e) {
  console.error(`Không đọc được web/data: ${e.message}`);
  process.exit(2);
}

const typesSrc = fs.readFileSync(path.join(WEB, "lib", "types.ts"), "utf8");
function unionOf(name) {
  const m = typesSrc.match(new RegExp(`export type ${name}\\s*=([^;]+);`));
  return m ? new Set([...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1])) : new Set();
}
const courseIdUnion = unionOf("CourseId");
const categoryUnion = unionOf("CourseCategory");
const homeSrc = fs.readFileSync(path.join(WEB, "app", "page.tsx"), "utf8");
const homeCategories = new Set(
  [...(homeSrc.match(/const CATEGORIES[\s\S]*?\];/)?.[0] ?? "").matchAll(/key:\s*"([^"]+)"/g)].map((x) => x[1]),
);

// ---------- kết quả ----------
const errors = [];
const warns = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warns.push(`${where}: ${msg}`);
const dupes = (arr) => [...new Set(arr.filter((x, i) => arr.indexOf(x) !== i))];

// ---------- khoá ----------
const courseById = new Map(courses.map((c) => [c.id, c]));
for (const id of dupes(courses.map((c) => c.id))) err(`khoá ${id}`, "id bị trùng trong data/courses.ts");
for (const c of courses) {
  const at = `khoá ${c.id}`;
  if (!courseIdUnion.has(c.id)) err(at, `chưa khai báo trong CourseId (web/lib/types.ts)`);
  if (!categoryUnion.has(c.category)) err(at, `category "${c.category}" không có trong CourseCategory (web/lib/types.ts)`);
  else if (!homeCategories.has(c.category)) err(at, `category "${c.category}" không có trong CATEGORIES (web/app/page.tsx) nên khoá không hiện ở trang chủ`);
  if (c.kind && !["knowledge", "certification"].includes(c.kind)) err(at, `kind "${c.kind}" không hợp lệ`);
  if (c.kind !== "knowledge") {
    for (const f of ["examQuestions", "examMinutes", "passingScore"]) {
      if (!(c[f] > 0)) err(at, `khoá certification cần ${f} > 0`);
    }
  }
  for (const p of c.prerequisites ?? []) if (!courseById.has(p)) err(at, `prerequisites trỏ tới khoá không có: ${p}`);
  if (!/^#[0-9a-fA-F]{6}$/.test(c.accentColor ?? "")) warn(at, `accentColor nên là mã hex 6 ký tự, đang là "${c.accentColor}"`);
  if (c.status === "available" && !lessons.some((l) => l.courseId === c.id)) {
    warn(at, "chưa có bài nào (quên thêm mảng bài vào `lessons` cuối data/lessons.ts?)");
  }
}
for (const id of courseIdUnion) if (!courseById.has(id)) warn(`CourseId "${id}"`, "có trong types.ts nhưng chưa có khoá trong data/courses.ts");

// ---------- chương ----------
const chapterById = new Map(chapters.map((c) => [c.id, c]));
for (const id of dupes(chapters.map((c) => c.id))) err(`chương ${id}`, "id bị trùng (mảng chương bị spread hai lần?)");
const lessonKey = (l) => `${l.courseId}:${l.slug}`;
const lessonByKey = new Map(lessons.map((l) => [lessonKey(l), l]));
for (const ch of chapters) {
  const at = `chương ${ch.id}`;
  if (!courseById.has(ch.courseId)) err(at, `courseId "${ch.courseId}" không có trong data/courses.ts`);
  if (!ch.lessonSlugs?.length) warn(at, "chưa có bài nào trong lessonSlugs");
  for (const s of dupes(ch.lessonSlugs ?? [])) err(at, `lessonSlugs lặp "${s}"`);
  for (const s of ch.lessonSlugs ?? []) {
    const l = lessonByKey.get(`${ch.courseId}:${s}`);
    if (!l) err(at, `lessonSlugs có "${s}" nhưng khoá ${ch.courseId} không có bài này`);
    else if (l.chapter !== ch.id) err(at, `lessonSlugs có "${s}" nhưng bài đó khai báo chapter "${l.chapter}"`);
  }
}

// ---------- bài ----------
const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const slugCourses = new Map();
for (const l of lessons) slugCourses.set(l.slug, [...(slugCourses.get(l.slug) ?? []), l.courseId]);
for (const [slug, cs] of slugCourses) {
  if (cs.length > 1 && new Set(cs).size < cs.length) err(`bài ${slug}`, "slug bị trùng trong cùng một khoá");
  else if (cs.length > 1) warn(`bài ${slug}`, `slug trùng giữa các khoá ${cs.join(", ")}; [[${slug}]] chỉ trỏ được tới khoá đầu tiên`);
}
const referencedFiles = new Set();
for (const c of courses) {
  const ls = lessons.filter((l) => l.courseId === c.id);
  for (const o of dupes(ls.map((l) => l.order))) warn(`khoá ${c.id}`, `nhiều bài cùng order ${o}`);
}
for (const l of lessons) {
  const at = `bài ${l.courseId}/${l.slug}`;
  if (!SLUG.test(l.slug)) err(at, "slug chỉ dùng chữ thường không dấu, số và gạch ngang");
  if (!courseById.has(l.courseId)) err(at, `courseId "${l.courseId}" không có trong data/courses.ts`);
  const ch = chapterById.get(l.chapter);
  if (!ch) err(at, `chapter "${l.chapter}" không tồn tại`);
  else {
    if (ch.courseId !== l.courseId) err(at, `chapter "${l.chapter}" thuộc khoá ${ch.courseId}`);
    if (!ch.lessonSlugs.includes(l.slug)) err(at, `chưa có trong lessonSlugs của chương "${l.chapter}" nên không hiện ở sidebar`);
  }
  for (const f of ["title", "shortTitle", "description", "file"]) if (!l[f]?.trim()) err(at, `thiếu ${f}`);
  if (!l.file) continue;
  const abs = path.resolve(LESSONS_DIR, l.file);
  if (!abs.startsWith(LESSONS_DIR + path.sep)) { err(at, `file "${l.file}" nằm ngoài thư mục lessons/`); continue; }
  referencedFiles.add(abs);
  const exists = fs.existsSync(abs);
  if (l.available && !exists) err(at, `available: true nhưng không có file lessons/${l.file}`);
  if (!l.available && exists) warn(at, `đã có file lessons/${l.file} nhưng available: false`);
}

// ---------- nội dung .md ----------
const plannedCourses = new Set(
  fs.existsSync(PLAN_DIR) ? fs.readdirSync(PLAN_DIR).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5)) : [],
);
const BLOCKS = ["step-flow", "ab-toggle", "auto-anim"];
const firstBySlug = new Map();
for (const l of lessons) if (!firstBySlug.has(l.slug)) firstBySlug.set(l.slug, l);

function stripCode(md) {
  let inFence = false;
  return md
    .split("\n")
    .map((line) => {
      if (line.trimStart().startsWith("```")) { inFence = !inFence; return ""; }
      return inFence ? "" : line.replace(/`[^`\n]*`/g, "");
    })
    .join("\n");
}

for (const l of lessons) {
  if (!l.available || !l.file) continue;
  const abs = path.resolve(LESSONS_DIR, l.file);
  if (!fs.existsSync(abs)) continue;
  const at = `lessons/${l.file}`;
  const md = fs.readFileSync(abs, "utf8");
  const text = stripCode(md);
  if (!/^#\s+\S/.test(md.trimStart())) warn(at, "nên mở đầu bằng tiêu đề `# ...`");
  if (md.trim().split(/\s+/).length < 80) warn(at, "nội dung rất ngắn, có thể vẫn là bản nháp");
  for (const m of text.matchAll(/\[\[([^\]\n]+)\]\]/g)) {
    const target = firstBySlug.get(m[1].trim());
    if (!target) err(at, `[[${m[1]}]] trỏ tới bài không tồn tại`);
    else if (!target.available) warn(at, `[[${m[1]}]] trỏ tới bài chưa có nội dung`);
  }
  for (const tag of BLOCKS) {
    const opens = [...text.matchAll(new RegExp(`<${tag}[\\s>]`, "g"))].length;
    const closes = [...text.matchAll(new RegExp(`</${tag}>`, "g"))].length;
    if (opens !== closes) err(at, `<${tag}> mở ${opens} lần nhưng đóng ${closes} lần`);
    for (const b of text.matchAll(new RegExp(`<${tag}[\\s>][\\s\\S]*?</${tag}>`, "g"))) {
      if (/\n[ \t]*\n/.test(b[0])) err(at, `khối <${tag}> có dòng trống bên trong, Markdown sẽ cắt ngang khối`);
    }
  }
  if (plannedCourses.has(l.courseId) && !/^##\s+Nguồn\s*$/m.test(md)) {
    err(at, "khoá làm theo plan nên bài cần mục `## Nguồn` ở cuối");
  }
}

// file .md không được bài nào trỏ tới
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".md") && e.name !== "README.md" && !referencedFiles.has(p)) {
      warn(`lessons/${path.relative(LESSONS_DIR, p)}`, "không bài nào trong data/lessons.ts trỏ tới file này");
    }
  }
})(LESSONS_DIR);

// ---------- câu hỏi ----------
for (const id of dupes(questions.map((q) => q.id))) err(`câu ${id}`, "id bị trùng");
const LETTER_REF = [
  /(^|[\s(✓✗])[A-E][.)]?\s+(đúng|sai|ĐÚNG|SAI)\b/,
  /(đáp án|Đáp án|phương án|Phương án|lựa chọn|Lựa chọn|option|Option)\s+[A-E]\b/,
];
for (const q of questions) {
  const at = `câu ${q.id}`;
  const c = courseById.get(q.courseId);
  if (!c) err(at, `courseId "${q.courseId}" không có trong data/courses.ts`);
  if (!lessonByKey.has(`${q.courseId}:${q.lesson}`)) err(at, `lesson "${q.lesson}" không có trong khoá ${q.courseId}`);
  if (!(q.certifications ?? []).includes(q.courseId)) warn(at, "certifications nên chứa courseId");
  if (!["easy", "medium", "hard"].includes(q.difficulty)) err(at, `difficulty "${q.difficulty}" không hợp lệ`);
  if (!q.question?.trim()) err(at, "thiếu nội dung câu hỏi");
  const n = q.options?.length ?? 0;
  if (n < 2) err(at, "cần ít nhất 2 đáp án");
  if (dupes((q.options ?? []).map((o) => o.trim())).length) err(at, "có đáp án trùng nhau");
  const ci = q.correctIndices ?? [];
  if (ci.some((i) => !Number.isInteger(i) || i < 0 || i >= n)) err(at, `correctIndices ${JSON.stringify(ci)} ngoài khoảng 0..${n - 1}`);
  if (dupes(ci).length) err(at, "correctIndices bị lặp");
  if (q.type === "single" && ci.length !== 1) err(at, `type single nhưng có ${ci.length} đáp án đúng`);
  else if (q.type === "multi" && ci.length < 2) err(at, `type multi cần ít nhất 2 đáp án đúng, đang có ${ci.length}`);
  else if (!["single", "multi"].includes(q.type)) err(at, `type "${q.type}" không hợp lệ`);
  if (!q.explanation?.trim()) err(at, "thiếu giải thích");
  else {
    if (LETTER_REF.some((re) => re.test(q.explanation))) err(at, "giải thích nhắc chữ cái A/B/C/D, sai khi đáp án bị trộn; nhắc lại nội dung đáp án");
    if (!/^[✓✗]/m.test(q.explanation)) warn(at, "giải thích chưa theo format từng dòng ✓/✗");
  }
  if (q.domain !== undefined && ![1, 2, 3, 4].includes(q.domain)) err(at, "domain phải là 1..4");
  if (q.mock !== undefined && !(Number.isInteger(q.mock) && q.mock > 0)) err(at, "mock phải là số nguyên dương");
}
for (const c of courses) {
  if (c.kind === "knowledge") continue;
  const n = questions.filter((q) => q.courseId === c.id).length;
  if (n && n < c.examQuestions) warn(`khoá ${c.id}`, `mới có ${n} câu, ít hơn examQuestions (${c.examQuestions})`);
}

// ---------- in kết quả ----------
const summary = `${courses.length} khoá, ${chapters.length} chương, ${lessons.length} bài, ${questions.length} câu hỏi`;
if (errors.length) {
  console.log(`LỖI (${errors.length}):`);
  errors.forEach((e) => console.log(`  - ${e}`));
}
if (!quiet && warns.length) {
  console.log(`Cảnh báo (${warns.length}):`);
  warns.forEach((w) => console.log(`  - ${w}`));
}
console.log(errors.length ? `check-structure: CÓ LỖI — ${summary}` : `check-structure: OK — ${summary}`);
process.exit(errors.length ? 1 : 0);

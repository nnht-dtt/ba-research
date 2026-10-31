#!/usr/bin/env node
// Stop hook: khi Claude định dừng mà có thay đổi chưa commit ở phần nội dung,
// chạy check-structure. Có lỗi thì chặn dừng và đưa lỗi lại cho Claude sửa.
// Đã chặn một lần (stop_hook_active) mà vẫn lỗi thì cho dừng và báo người dùng,
// để không lặp vô hạn.

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const CONTENT_PATHS = ["lessons", "web/data", "web/lib/types.ts", "web/app/page.tsx", ".claude/content-plan"];

let input = {};
try {
  const raw = await new Promise((resolve) => {
    let s = "";
    process.stdin.on("data", (c) => (s += c));
    process.stdin.on("end", () => resolve(s));
  });
  input = raw.trim() ? JSON.parse(raw) : {};
} catch {}

const git = spawnSync("git", ["status", "--porcelain", "--", ...CONTENT_PATHS], { cwd: REPO, encoding: "utf8" });
if (git.status === 0 && !git.stdout.trim()) process.exit(0); // không đụng nội dung

const check = spawnSync(process.execPath, [path.join(REPO, ".claude/scripts/check-structure.mjs"), "--quiet"], {
  cwd: REPO,
  encoding: "utf8",
});
const out = (check.stdout + check.stderr).trim();

if (check.status === 0) process.exit(0);

if (check.status !== 1) {
  // script không chạy được (thiếu node_modules...) — báo, không chặn
  console.log(JSON.stringify({ systemMessage: `check-structure không chạy được:\n${out}` }));
  process.exit(0);
}

if (input.stop_hook_active) {
  console.log(JSON.stringify({ systemMessage: `Nội dung vẫn còn lỗi cấu trúc sau khi Claude sửa:\n${out}` }));
  process.exit(0);
}

console.log(
  JSON.stringify({
    decision: "block",
    reason:
      `check-structure báo lỗi trong nội dung chưa commit:\n${out}\n\n` +
      "Sửa các lỗi trên rồi chạy lại `node .claude/scripts/check-structure.mjs`. " +
      "Nếu lỗi nằm ở phần người dùng đang tự sửa dở, không phải do bạn, thì báo người dùng thay vì sửa.",
  }),
);

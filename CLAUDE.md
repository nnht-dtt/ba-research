# BA Knowledge

Site học và lưu kiến thức BA. Next.js app trong `web/`, nội dung Markdown trong `lessons/`.

- Tạo khoá mới, thêm bài, viết bài từ tài liệu: dùng skill `tao-khoa` (`.claude/skills/tao-khoa/SKILL.md`). Mỗi lần gọi làm một bước rồi dừng; tiến độ lưu ở `.claude/content-plan/<COURSE>.json`.
- Thêm khoá bằng tay: `web/lib/types.ts` (CourseId) → `web/data/courses.ts` → `web/data/lessons.ts` → `lessons/<khoá>/*.md`. Chi tiết: `lessons/guide/guide-01-them-noi-dung.md`.
- Cú pháp Markdown mở rộng (callout emoji, `[[slug]]`, `<step-flow>`, `<ab-toggle>`, `<auto-anim>`): `lessons/guide/guide-02-cu-phap-markdown.md`.
- Câu hỏi: `web/data/questions.ts`. Giải thích viết shuffle-safe: dòng đầu là ý chính, mỗi đáp án một dòng `✓`/`✗` nhắc lại nội dung đáp án, không dùng chữ A/B/C/D.
- Nội dung BA bám nguồn người dùng đưa (tài liệu dự án, sách, ghi chú), không tự bịa số liệu hay ví dụ. Bài của khoá làm theo plan kết thúc bằng mục `## Nguồn`.
- Kiểm tra: `node .claude/scripts/check-structure.mjs` và `cd web && npm run build` phải qua. Stop hook (`.claude/settings.json`) tự chạy check-structure khi có thay đổi nội dung chưa commit và chặn dừng nếu lỗi.

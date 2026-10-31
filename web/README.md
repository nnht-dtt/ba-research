# BA Knowledge — Web

Next.js 14 (App Router) + TypeScript + Tailwind. Đọc bài từ `../lessons/` lúc build.

## Cấu trúc

- `app/` — trang: trang chủ, `courses/[courseId]` (tổng quan khoá), `learn/[slug]` (bài học), `practice/`, `exam/`, `history/`, `wrong-answers/`, `search-index.json` (chỉ mục tìm kiếm dựng sẵn lúc build)
- `components/` — Navbar, QuestionCard, Runner (luồng làm bài), Timer, CommandPalette (Ctrl+K), StepFlow / ABToggle / AutoAnim / CodeTabs / Callout (thẻ mở rộng trong Markdown)
- `data/` — `courses.ts`, `lessons.ts`, `questions.ts`, `sets.ts` (tự sinh bộ luyện theo bài, chương, mock), `diagramIcons.json` (icon cho sơ đồ, xem `scripts/build-diagram-icons.mjs`)
- `lib/` — types, storage (localStorage, tiền tố `bak:`), dựng câu hỏi, plugin remark/rehype, tìm kiếm

## Chạy local

```bash
npm install
npm run dev
```

Cách thêm khoá, bài, câu hỏi: xem `../lessons/guide/guide-01-them-noi-dung.md`.

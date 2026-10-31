# BA Knowledge

Site cá nhân để lưu kiến thức Business Analysis và ôn lại bằng câu hỏi luyện tập. Dựng từ template của `aws-learner`: Next.js 14 + TypeScript + Tailwind, bài học viết bằng Markdown, tiến độ và lịch sử làm bài lưu trong localStorage của trình duyệt.

## Chạy

```bash
cd web
npm install
npm run dev      # http://localhost:3000
npm run build    # kiểm tra trước khi xong một đợt nội dung
```

## Cấu trúc

```
lessons/            nội dung bài học (.md), mỗi khoá một thư mục
web/
  app/              trang: khoá, bài học, luyện tập, thi thử, lịch sử, ôn câu sai
  components/       UI và các thẻ mở rộng trong Markdown (step-flow, ab-toggle, auto-anim)
  data/courses.ts   danh sách khoá
  data/lessons.ts   bài và chương của từng khoá
  data/questions.ts câu hỏi luyện tập / thi
  lib/types.ts      CourseId, CourseCategory và các kiểu dữ liệu
```

## Thêm nội dung

Hướng dẫn đầy đủ nằm ngay trong site, khoá **Hướng dẫn**:

- `lessons/guide/guide-01-them-noi-dung.md` — thêm khoá, bài, câu hỏi, khoá chứng chỉ có thi thử.
- `lessons/guide/guide-02-cu-phap-markdown.md` — callout, bảng, `[[slug]]`, tab code, sơ đồ bấm từng bước, so sánh A/B.

Tóm tắt: khoá mới cần sửa `web/lib/types.ts` (CourseId), `web/data/courses.ts`, `web/data/lessons.ts` và tạo thư mục trong `lessons/`. Câu hỏi thêm vào `web/data/questions.ts`.

## Làm việc với Claude Code

Mở `claude` trong thư mục này.

- **Skill `/tao-khoa`**: nói "tạo khoá … từ tài liệu …" là Claude tự dùng skill. Mỗi lần gọi làm một bước rồi dừng: lên dàn bài chờ bạn duyệt → dựng khung khoá → viết từng bài kèm câu hỏi. Mỗi bước kiểm tra rồi commit riêng.
- **Chạy cả khoá**: `/loop /tao-khoa <COURSE-ID>`. Dừng khi xong, khi cần bạn duyệt, hoặc khi có bài kiểm tra không qua.
- **Tiến độ**: `.claude/content-plan/<COURSE-ID>.json`. Xem nhanh: `node .claude/skills/tao-khoa/scripts/plan.mjs status <COURSE-ID>`.
- **Kiểm tra cấu trúc**: `node .claude/scripts/check-structure.mjs`. Bắt các lỗi: id khoá chưa khai báo, bài thiếu file, slug không nằm trong chương, `[[link]]` hỏng, khối sơ đồ có dòng trống, câu hỏi sai đáp án hoặc giải thích dùng A/B/C/D.
- **Hook tự kiểm**: `.claude/settings.json` chạy check-structure mỗi khi Claude định dừng mà có thay đổi nội dung chưa commit. Có lỗi thì Claude phải sửa trước khi dừng. Xem hoặc tắt hook bằng `/hooks`.

## Tính năng có sẵn

- Trang khoá: lộ trình theo chương, đánh dấu bài đã đọc.
- Trang bài: sidebar bài học, mục lục từ heading, nút luyện câu hỏi của bài.
- Luyện tập theo bài / chương / bộ đề, xem giải thích ngay sau mỗi câu.
- Thi thử có đồng hồ cho khoá chứng chỉ (`kind` khác `"knowledge"`).
- Lịch sử làm bài, tự gom câu sai để ôn lại.
- Tìm kiếm toàn văn Ctrl+K / ⌘K, gõ không dấu vẫn ra.
- Giao diện sáng / tối.

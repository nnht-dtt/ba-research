---
name: tao-khoa
description: Dựng khoá học mới hoặc viết tiếp bài cho một khoá trong BA Knowledge, đúng cấu trúc của site (lib/types.ts, data/courses.ts, data/lessons.ts, lessons/*.md, data/questions.ts) và bám tài liệu nguồn người dùng đưa. Mỗi lần gọi làm đúng một việc — lên dàn bài chờ duyệt, dựng khung khoá, hoặc viết một bài kèm câu hỏi — rồi chạy check-structure + build, commit, và dừng. Tiến độ lưu ở .claude/content-plan/<COURSE>.json nên làm tiếp được qua nhiều phiên; chạy cả khoá bằng /loop /tao-khoa <COURSE>. Dùng khi người dùng muốn tạo khoá, thêm bài vào khoá, viết bài từ tài liệu, hoặc làm tiếp khoá đang dở.
argument-hint: "[COURSE-ID] [mô tả khoá / đường dẫn nguồn]"
---

# Tạo khoá và viết bài

Mỗi lần gọi làm **đúng một bước** rồi dừng: dàn bài → khung khoá → bài 1 → bài 2 → … Mỗi bước qua kiểm tra và commit riêng, nên dừng giữa chừng không mất gì và phiên sau làm tiếp đúng chỗ.

Trước khi viết, đọc `lessons/guide/guide-01-them-noi-dung.md` (cấu trúc) và `lessons/guide/guide-02-cu-phap-markdown.md` (cú pháp) nếu chưa đọc trong phiên này.

Công cụ:

```bash
node .claude/skills/tao-khoa/scripts/plan.mjs list | validate|status|approve|next <COURSE> | mark <COURSE> <slug|scaffold> <status> [note]
node .claude/scripts/check-structure.mjs
cd web && npm run build
```

## Bước 0 — Xác định việc

- Có COURSE và đã có `.claude/content-plan/<COURSE>.json` → chạy `plan.mjs next <COURSE>`:
  - in `{"step":"scaffold"}` → **Bước 2**.
  - in `{"step":"lesson", ...}` → **Bước 3** với bài đó.
  - exit 5 (chưa duyệt) → đưa lại dàn bài cho người dùng duyệt, dừng.
  - exit 3 (xong) hoặc 4 (còn bài needs-attention) → báo tiến độ, dừng.
- Chưa có plan → **Bước 1**.
- Không rõ khoá nào → `plan.mjs list` rồi hỏi người dùng.

Đang chạy trong `/loop`: gặp exit 3, 4, 5, hoặc bài vừa làm bị needs-attention thì kết thúc loop (ScheduleWakeup với `stop: true`) và báo người dùng lý do.

## Bước 1 — Dàn bài (dừng chờ duyệt)

1. Cần có: mục đích khoá, nhóm trên trang chủ (`guide` / `foundation` / `domain` / `certification`, hoặc nhóm mới nếu người dùng muốn), loại khoá (`knowledge`, hoặc `certification` nếu có thi thử), và **tài liệu nguồn** (đường dẫn file, link, ghi chú). Thiếu nguồn thì hỏi; chỉ dùng "kiến thức chung" khi người dùng nói rõ.
2. Đọc nguồn. Chia chương và bài theo nội dung nguồn, mỗi bài một chủ đề đọc trong 10–20 phút. Mỗi bài ghi rõ phần nguồn nào (file, mục, trang).
3. Ghi `.claude/content-plan/<COURSE>.json` theo schema dưới, `approved: false`, rồi chạy `plan.mjs validate <COURSE>`.
4. Trình dàn bài cho người dùng dạng danh sách gọn: chương → bài (tiêu đề, một dòng mô tả, nguồn). **Dừng.** Không dựng khung hay viết bài trước khi người dùng duyệt.
5. Người dùng sửa thì cập nhật plan. Người dùng đồng ý thì chạy `plan.mjs approve <COURSE>`. Lượt sau mới sang Bước 2.

Schema plan:

```json
{
  "course": "BA-CORE",
  "title": "Tên đầy đủ của khoá",
  "dir": "ba-core",
  "slugPrefix": "core-",
  "meta": {
    "shortTitle": "Tên ngắn", "level": "Nền tảng", "category": "foundation", "kind": "knowledge",
    "description": "2–3 câu mô tả khoá", "hint": "Một dòng: khoá dành cho ai",
    "durationHours": 10, "accentColor": "#0ea5e9",
    "passingScore": 0, "examMinutes": 0, "examQuestions": 0
  },
  "sources": ["~/orca/.../tai-lieu.pdf", "https://..."],
  "questionsPerLesson": 5,
  "approved": false,
  "scaffolded": false,
  "chapters": [{ "id": "core-ch1", "title": "Chương 1 — ..." }],
  "lessons": [
    {
      "slug": "core-01-elicitation", "title": "Tiêu đề đầy đủ", "shortTitle": "Tiêu đề ngắn",
      "chapter": "core-ch1", "description": "Một câu mô tả bài",
      "sources": ["tai-lieu.pdf, mục 3.1–3.4"], "status": "pending", "note": ""
    }
  ]
}
```

- `dir`: thư mục trong `lessons/`. `slugPrefix`: tiền tố riêng của khoá, dùng cho slug bài (`<prefix><NN>-<ten-bai>`), id chương (`<prefix>ch<N>`) và id câu hỏi (`<prefix><NN>-<NNN>`).
- `level`: một trong `Nhập môn`, `Nền tảng`, `Foundational`, `Associate`, `Professional`.
- `kind: "certification"` thì `passingScore`, `examMinutes`, `examQuestions` phải > 0.
- Thêm bài vào khoá đã có plan: thêm mục `status: "pending"` vào `lessons`, đặt `approved: false`, trình phần thêm cho người dùng duyệt như bước 4–5.

## Bước 2 — Khung khoá

1. `web/lib/types.ts`: thêm `course` vào `CourseId`. Nhóm mới thì thêm vào `CourseCategory` và một dòng vào `CATEGORIES` trong `web/app/page.tsx`.
2. `web/data/courses.ts`: thêm khoá từ `meta`. `order` = lớn nhất hiện có + 1. `status: "available"`.
3. `web/data/lessons.ts`: thêm một khối riêng cho khoá (comment tiêu đề, `<x>Lessons`, `<x>Chapters`) theo cách khối GUIDE đang viết, **mọi bài `available: false`**, `file: "<dir>/<slug>.md"`, `order` theo thứ tự trong plan; thêm hai mảng vào `lessons` và `chapters` ở cuối file. `category` của chương là một key trong `colors.category` của `web/tailwind.config.ts` (`foundation`, `compute`, `storage`, `network`, `security`, `database`, `billing`).
4. Tạo thư mục `lessons/<dir>/`.
5. Kiểm tra và commit (mục **Kiểm tra** và **Commit** bên dưới), message `feat - content - <COURSE>: khung khoá (<N> chương, <M> bài)`.
6. `plan.mjs mark <COURSE> scaffold done`, báo người dùng site đã có khung khoá (các bài hiện "Chưa có nội dung"). Dừng.

## Bước 3 — Viết một bài

1. `plan.mjs mark <COURSE> <slug> in-progress`.
2. Mở và đọc **phần nguồn ghi trong `sources` của bài**. Không viết từ trí nhớ.
3. Viết `lessons/<dir>/<slug>.md`:
   - `# <title>`, 1–2 câu mở bài nói bài này giúp làm được gì, rồi các mục `##` / `###`.
   - Mọi khẳng định, số liệu, ví dụ, câu thoại phải có trong nguồn. Nguồn không nói thì không viết. Cần một ý mà nguồn chưa đủ chắc thì ghi `> ⚠️ Cần xác nhận: ...` thay vì đoán.
   - Viết gọn: không emoji trang trí (emoji chỉ dùng làm cú pháp callout), không mở bài/kết bài sáo rỗng, bảng chỉ khi so sánh thật sự nhiều chiều. Sơ đồ (`<step-flow>`, `<ab-toggle>`) chỉ khi luồng hay so sánh khó hiểu nếu chỉ có chữ.
   - Liên kết bài khác bằng `[[slug]]`, chỉ tới bài đã có nội dung.
   - Cuối bài: `## Nguồn`, liệt kê từng nguồn đã dùng kèm mục/trang. Nguồn là kiến thức chung thì ghi `Kiến thức chung, chưa đối chiếu tài liệu.`
   - Nguồn từ dự án khách hàng: không chép secret, credential, giá, điều khoản hợp đồng hay thông tin cá nhân. Gặp thứ như vậy thì hỏi người dùng trước.
4. `web/data/lessons.ts`: bài đã có dòng thì đổi `available: true`; chưa có (bài thêm sau khung) thì thêm dòng và thêm slug vào `lessonSlugs` của chương.
5. `web/data/questions.ts`: thêm `questionsPerLesson` câu vào `curatedQuestions` dưới một comment `// <COURSE> — <slug>`:
   - Trả lời được từ nội dung bài; không hỏi thứ bài không có.
   - Khoảng 1/4 là `multi`; độ khó trộn easy / medium / hard.
   - Đáp án sai phải hợp lý, và sai vì một lý do mà bài có nói.
   - `explanation`: dòng đầu là ý chính, mỗi đáp án một dòng `✓`/`✗` nhắc lại nội dung đáp án và vì sao. Không dùng chữ A/B/C/D.
   - Khoá certification: thêm `domain` (và `mock` nếu plan có chia đề).
6. Tự review trước khi kiểm tra: đọc lại bài đối chiếu với nguồn từng đoạn; đọc lại từng câu hỏi xem đáp án đúng có thật sự đúng theo bài. Sửa chỗ sai.
7. Kiểm tra và commit, message `feat - content - <COURSE>: <title bài>`.
8. `plan.mjs mark <COURSE> <slug> done` (có điểm "Cần xác nhận" thì ghi vào note). Báo người dùng 3–4 dòng: bài vừa xong, nguồn đã dùng, điểm cần xác nhận nếu có, tiến độ từ `plan.mjs status`, bài kế tiếp. **Dừng.**

## Kiểm tra

```bash
node .claude/scripts/check-structure.mjs
cd web && npm run build
```

Cả hai phải qua. Lỗi thì sửa rồi chạy lại. Sửa một lần vẫn lỗi: `plan.mjs mark <COURSE> <slug> needs-attention "<lỗi gì>"`, không commit, báo người dùng.

## Commit

Chỉ add file của bước này, không `git add -A`:

```bash
git add lessons/<dir> web/data web/lib/types.ts web/app/page.tsx .claude/content-plan/<COURSE>.json
git commit -m "<message>"
```

Message kết thúc bằng dòng attribution mà phiên hiện tại yêu cầu (nếu có). Không push.

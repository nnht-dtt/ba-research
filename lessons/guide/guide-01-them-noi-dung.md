# Thêm khoá, bài học và câu hỏi

Muốn Claude Code làm hộ thì dùng skill `/tao-khoa` (xem `README.md`): Claude lên dàn bài cho bạn duyệt rồi viết từng bài, đúng các bước dưới đây.

Nội dung nằm ở hai chỗ: file Markdown trong `lessons/` (phần đọc) và metadata trong `web/data/` (khoá nào, bài nào, câu hỏi nào). Site không tự quét thư mục `lessons/`: bài chỉ hiện khi đã khai báo trong `web/data/lessons.ts`.

## Cấu trúc thư mục

```
ba-knowledge/
├── lessons/               # nội dung bài học (.md), mỗi khoá một thư mục
│   └── guide/
└── web/
    ├── data/courses.ts    # danh sách khoá
    ├── data/lessons.ts    # bài + chương của từng khoá
    ├── data/questions.ts  # câu hỏi luyện tập / thi
    └── lib/types.ts       # CourseId, CourseCategory
```

## Thêm một khoá mới

Ví dụ thêm khoá `BA-CORE`.

1. **`web/lib/types.ts`** — thêm id vào `CourseId`:

   ```ts
   export type CourseId = "GUIDE" | "BA-CORE";
   ```

2. **`web/data/courses.ts`** — thêm một object vào mảng `courses`. Các trường cần chú ý:

   | Trường | Ý nghĩa |
   |---|---|
   | `kind` | `"knowledge"`: khoá đọc, có luyện tập khi đã có câu hỏi. Bỏ trống hoặc `"certification"`: có thêm trang Mô phỏng thi |
   | `category` | Nhóm trên trang chủ: `guide`, `foundation`, `domain`, `certification` |
   | `status` | `"coming-soon"` để khoá hiện mờ, chưa vào được |
   | `passingScore`, `examMinutes`, `examQuestions` | Chỉ dùng cho khoá certification; khoá knowledge để `0` |
   | `order` | Thứ tự trong nhóm |

3. **`web/data/lessons.ts`** — tạo `baCoreLessons` và `baCoreChapters`, rồi thêm vào hai mảng gộp ở cuối file:

   ```ts
   export const lessons: Lesson[] = [...guideLessons, ...baCoreLessons];
   export const chapters: Chapter[] = [...guideChapters, ...baCoreChapters];
   ```

4. **`lessons/ba-core/`** — tạo thư mục và các file `.md`.

Muốn thêm nhóm mới trên trang chủ: thêm giá trị vào `CourseCategory` (`web/lib/types.ts`) và một dòng vào `CATEGORIES` (`web/app/page.tsx`).

## Thêm một bài học

Một bài là một dòng trong mảng lessons của khoá:

```ts
{ slug: "core-01-elicitation", courseId: "BA-CORE", title: "Tiêu đề đầy đủ", shortTitle: "Tiêu đề ngắn",
  chapter: "core-ch1", order: 1, available: true,
  description: "Một câu mô tả bài, hiện ở danh sách và kết quả tìm kiếm.", file: "ba-core/core-01-elicitation.md" },
```

- `slug` dùng trong URL và trong wiki link `[[slug]]`. Nên có tiền tố của khoá để không trùng với khoá khác.
- `chapter` phải khớp `id` của một chương, và slug bài phải nằm trong `lessonSlugs` của chương đó thì mới hiện ở sidebar.
- `available: false` khi chưa viết file `.md`: bài vẫn có trong danh sách nhưng hiện "Chưa có nội dung".
- Trang bài tự sinh mục lục bên phải từ các heading `##` và `###`.

## Thêm câu hỏi

Câu hỏi nằm trong `web/data/questions.ts`. Xem các câu mẫu của khoá GUIDE trong file đó.

```ts
{
  id: "core-01-001",            // duy nhất trong toàn site
  courseId: "BA-CORE",
  lesson: "core-01-elicitation", // slug bài
  certifications: ["BA-CORE"],
  difficulty: "medium",          // easy | medium | hard
  type: "single",                // single | multi
  question: "...",
  options: ["...", "...", "...", "..."],
  correctIndices: [1],           // index từ 0
  explanation: "Ý chính.\n✓ Đáp án đúng — vì sao.\n✗ Đáp án sai — vì sao.",
}
```

> ⚠️ Thứ tự đáp án bị trộn khi làm bài. Trong `explanation`, nhắc lại nội dung đáp án sau ✓/✗ thay vì viết "A đúng, B sai".

Câu hỏi tự vào các bộ luyện tập:

- bộ của bài (lọc theo `lesson`),
- bộ của chương (gom các bài trong chương),
- bộ đề của khoá, nếu câu có trường `mock: <số>`.

## Khoá chứng chỉ và thi thử

Khoá có `kind` khác `"knowledge"` có thêm trang Mô phỏng thi: lấy ngẫu nhiên `examQuestions` câu từ toàn bộ câu hỏi của khoá, có đồng hồ `examMinutes` phút, đạt khi điểm ≥ `passingScore`.

Nếu đề thi có tỉ trọng theo domain, gắn `domain: 1..4` cho từng câu và khai báo tỉ trọng trong `DOMAIN_WEIGHTS` ở `web/lib/questions.ts`. Khoá không khai báo dùng tỉ trọng đều 25% mỗi domain.

## Kiểm tra trước khi xong

```bash
node .claude/scripts/check-structure.mjs
cd web && npm run build
```

`check-structure` kiểm cấu trúc: id khoá có trong `CourseId`, bài có file, slug nằm trong chương, `[[link]]` trỏ tới bài có thật, khối sơ đồ không có dòng trống, câu hỏi có đáp án hợp lệ và giải thích không dùng chữ A/B/C/D. Khi làm việc với Claude Code, script này tự chạy mỗi lần Claude định dừng mà có thay đổi nội dung chưa commit.

Build lỗi thường do id khoá chưa có trong `CourseId` hoặc HTML/SVG trong bài chưa đóng thẻ. `file` trỏ sai đường dẫn thì build vẫn qua nhưng trang bài hiện "Chưa có nội dung", nên mở lại bài vừa thêm trên `npm run dev` để chắc.

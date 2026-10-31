import type { Question } from "@/lib/types";

// Câu hỏi luyện tập. `lesson` là slug bài trong cùng khoá; câu hỏi tự vào bộ
// luyện của bài, của chương và (nếu có `mock`) bộ đề của khoá — xem data/sets.ts.
// Giải thích viết theo format shuffle-safe: dòng đầu là ý chính, mỗi đáp án một
// dòng bắt đầu bằng ✓ (đúng) hoặc ✗ (sai), nhắc lại nội dung đáp án chứ không
// dùng chữ A/B/C/D vì thứ tự đáp án bị trộn khi làm bài.
const curatedQuestions: Question[] = [
  // ============================================================
  // GUIDE — guide-01-them-noi-dung
  // ============================================================
  {
    id: "guide-01-001",
    courseId: "GUIDE",
    lesson: "guide-01-them-noi-dung",
    certifications: ["GUIDE"],
    difficulty: "easy",
    type: "multi",
    question: "Thêm một khoá mới vào site cần sửa những file nào? (Chọn 3)",
    options: [
      "web/lib/types.ts — khai báo id khoá trong CourseId",
      "web/data/courses.ts — thông tin khoá",
      "web/data/lessons.ts — danh sách bài và chương",
      "web/data/sets.ts — tạo bộ luyện tập cho khoá",
    ],
    correctIndices: [0, 1, 2],
    explanation:
      "Khoá cần id trong CourseId, một mục trong courses và bài/chương trong lessons.\n✓ lib/types.ts: CourseId là union type, id chưa khai báo thì TypeScript báo lỗi.\n✓ data/courses.ts: tên, mô tả, nhóm trên trang chủ, kind.\n✓ data/lessons.ts: bài học trỏ tới file .md và chương gom các bài.\n✗ data/sets.ts tự sinh bộ luyện theo bài, chương và mock, không cần sửa khi thêm khoá.",
  },
  {
    id: "guide-01-002",
    courseId: "GUIDE",
    lesson: "guide-01-them-noi-dung",
    certifications: ["GUIDE"],
    difficulty: "easy",
    type: "single",
    question: "Một câu hỏi được gắn vào bài học qua trường nào?",
    options: [
      "lesson — slug của bài trong cùng khoá",
      "chapter — id của chương",
      "file — đường dẫn file Markdown",
      "order — thứ tự của bài",
    ],
    correctIndices: [0],
    explanation:
      "Câu hỏi dùng trường lesson chứa slug bài, kết hợp với courseId.\n✓ lesson — slug bài: bộ luyện của bài lọc theo courseId + lesson.\n✗ chapter — câu hỏi không có trường này; bộ luyện của chương gom từ các bài thuộc chương.\n✗ file — thuộc về bài học, không thuộc câu hỏi.\n✗ order — chỉ dùng để sắp xếp bài.",
  },
  {
    id: "guide-01-003",
    courseId: "GUIDE",
    lesson: "guide-01-them-noi-dung",
    certifications: ["GUIDE"],
    difficulty: "medium",
    type: "single",
    question: "Khoá có kind là \"knowledge\" khác khoá \"certification\" ở điểm nào?",
    options: [
      "Không có trang Mô phỏng thi; mục Luyện tập chỉ hiện khi khoá đã có câu hỏi",
      "Không hiển thị bài học lý thuyết",
      "Không lưu lịch sử làm bài",
      "Không tìm thấy trong ô tìm kiếm Ctrl+K",
    ],
    correctIndices: [0],
    explanation:
      "kind chỉ quyết định khoá có thi thử hay không.\n✓ Khoá knowledge không có thi thử; Luyện tập hiện khi đã có câu hỏi.\n✗ Bài học hiển thị như nhau ở mọi khoá.\n✗ Lịch sử lưu cho mọi lần làm bài, cả luyện tập.\n✗ Ô tìm kiếm đánh chỉ mục mọi khoá, bài và mục trong bài.",
  },
  // ============================================================
  // GUIDE — guide-02-cu-phap-markdown
  // ============================================================
  {
    id: "guide-02-001",
    courseId: "GUIDE",
    lesson: "guide-02-cu-phap-markdown",
    certifications: ["GUIDE"],
    difficulty: "easy",
    type: "single",
    question: "Trong file bài học, dòng `> 💡 Ghi chú` hiển thị thành gì?",
    options: [
      "Khung callout kiểu mẹo (tip) có icon",
      "Trích dẫn thường kèm emoji 💡",
      "Tab chuyển đổi giữa các ngôn ngữ code",
      "Sơ đồ bấm từng bước",
    ],
    correctIndices: [0],
    explanation:
      "Blockquote mở đầu bằng emoji đánh dấu được đổi thành callout.\n✓ 💡 cho callout tip; ⚠️ warning, ✅ success, ❌ danger, 📌 note.\n✗ Emoji bị bỏ đi và thay bằng icon, không giữ nguyên trích dẫn.\n✗ Tab code sinh từ các khối code liền nhau khác ngôn ngữ.\n✗ Sơ đồ bấm từng bước dùng thẻ <step-flow>.",
  },
  {
    id: "guide-02-002",
    courseId: "GUIDE",
    lesson: "guide-02-cu-phap-markdown",
    certifications: ["GUIDE"],
    difficulty: "medium",
    type: "single",
    question: "Viết `[[guide-01-them-noi-dung]]` trong một bài học sẽ cho kết quả gì?",
    options: [
      "Liên kết tới bài đó, chữ hiển thị là tiêu đề bài",
      "Liên kết tới bài đó, chữ hiển thị là slug",
      "Giữ nguyên văn bản [[guide-01-them-noi-dung]]",
      "Nhúng toàn bộ nội dung bài đó vào chỗ này",
    ],
    correctIndices: [0],
    explanation:
      "[[slug]] là wiki link kiểu Obsidian.\n✓ Slug tồn tại thì thành link, chữ hiển thị là title của bài.\n✗ Slug không được dùng làm chữ hiển thị.\n✗ Chỉ slug không tồn tại mới giữ nguyên văn bản.\n✗ Wiki link chỉ tạo liên kết, không nhúng nội dung.",
  },
];

export const questions: Question[] = [...curatedQuestions];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

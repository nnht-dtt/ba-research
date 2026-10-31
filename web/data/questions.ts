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
  // ============================================================
  // KT-VN — kt-33-trung-tam-chi-phi
  // ============================================================
  {
    id: "kt-33-001",
    courseId: "KT-VN",
    lesson: "kt-33-trung-tam-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "easy",
    type: "single",
    question: "Theo Thông tư 53/2006/TT-BTC, trung tâm chi phí là gì?",
    options: ["Trung tâm trách nhiệm mà người quản lý chỉ có quyền điều hành các chi phí phát sinh thuộc bộ phận mình", "Bộ phận mà người quản lý chịu trách nhiệm cả doanh thu lẫn chi phí", "Bộ phận được giao quyền quyết định vốn đầu tư", "Tài khoản cấp 2 dùng để tập hợp chi phí sản xuất chung"],
    correctIndices: [0],
    explanation: "Trung tâm chi phí là trung tâm trách nhiệm chỉ quản lý chi phí. Nó có thể là một bộ phận hoặc một giai đoạn hoạt động.\n✓ Trung tâm trách nhiệm chỉ có quyền điều hành chi phí: đúng nguyên văn định nghĩa trong TT53 Phần I mục 5.\n✗ Chịu trách nhiệm cả doanh thu lẫn chi phí: đó là trung tâm lợi nhuận.\n✗ Có quyền quyết định vốn đầu tư: đó là trung tâm đầu tư.\n✗ Tài khoản cấp 2 tập hợp chi phí sản xuất chung: trung tâm chi phí là đơn vị quản lý, không phải một tài khoản; TK 627 chỉ được chi tiết theo phân xưởng.",
  },
  {
    id: "kt-33-002",
    courseId: "KT-VN",
    lesson: "kt-33-trung-tam-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "medium",
    type: "multi",
    question: "Theo Thông tư 53/2006/TT-BTC, những điểm nào đúng với kế toán quản trị? (Chọn 2)",
    options: ["Doanh nghiệp không bắt buộc công khai thông tin kế toán quản trị, trừ khi pháp luật có quy định khác", "Doanh nghiệp được dùng mọi thông tin, số liệu của kế toán tài chính cho kế toán quản trị", "Kỳ kế toán quản trị bắt buộc trùng với kỳ kế toán năm", "Báo cáo kế toán quản trị phải theo mẫu do Bộ Tài chính ban hành"],
    correctIndices: [0, 1],
    explanation: "Kế toán quản trị phục vụ nội bộ, doanh nghiệp tự quyết phạm vi, kỳ và mẫu báo cáo.\n✓ Không bắt buộc công khai, trừ khi pháp luật quy định khác: TT53 Phần I mục 1.b.\n✓ Được dùng mọi số liệu của kế toán tài chính: TT53 Phần I mục 1.đ. Đây là lý do ERP thường làm kế toán quản trị trên chính các dòng bút toán.\n✗ Kỳ bắt buộc trùng kỳ năm: TT53 cho phép chọn kỳ khác như ngày, tuần.\n✗ Báo cáo phải theo mẫu Bộ Tài chính: doanh nghiệp được toàn quyền thiết kế mẫu báo cáo kế toán quản trị.",
  },
  {
    id: "kt-33-003",
    courseId: "KT-VN",
    lesson: "kt-33-trung-tam-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "medium",
    type: "single",
    question: "Một chuỗi cửa hàng được đánh giá bằng lợi nhuận so với ngân sách và tỷ suất lợi nhuận trên doanh thu. Chuỗi này là loại trung tâm trách nhiệm nào?",
    options: ["Trung tâm lợi nhuận", "Trung tâm chi phí", "Trung tâm doanh thu", "Trung tâm đầu tư"],
    correctIndices: [0],
    explanation: "Người quản lý chịu trách nhiệm cả doanh thu và chi phí, được đánh giá bằng lợi nhuận, thì đó là trung tâm lợi nhuận.\n✓ Trung tâm lợi nhuận: chịu trách nhiệm cả doanh thu và chi phí, đánh giá bằng lợi nhuận và tỷ suất lợi nhuận trên doanh thu.\n✗ Trung tâm chi phí: chỉ so chi phí thực tế với ngân sách.\n✗ Trung tâm doanh thu: chỉ chịu trách nhiệm doanh thu.\n✗ Trung tâm đầu tư: còn chịu trách nhiệm về vốn đầu tư, được đánh giá bằng ROI hoặc lợi nhuận còn lại.",
  },
  {
    id: "kt-33-004",
    courseId: "KT-VN",
    lesson: "kt-33-trung-tam-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "hard",
    type: "single",
    question: "Doanh nghiệp muốn xem chi phí theo kênh bán và thương hiệu, và các giá trị kênh thay đổi thường xuyên. Theo bài, cách nào hợp lý hơn để đưa hai chiều này vào dữ liệu?",
    options: ["Dùng chiều phân tích gắn lên dòng bút toán, giữ nguyên danh mục tài khoản", "Mở tài khoản chi tiết cho mọi tổ hợp kênh và thương hiệu dưới từng khoản mục chi phí", "Đổi TK 641 thành các tài khoản cấp 1 riêng cho từng kênh", "Chỉ nhập chiều phân tích vào bảng tính ngoài hệ thống sau khi khoá sổ"],
    correctIndices: [0],
    explanation: "Chiều thay đổi thường xuyên thì nên tách khỏi tài khoản, để không phải sửa danh mục tài khoản và Quy chế hạch toán mỗi lần có kênh mới.\n✓ Chiều phân tích gắn lên dòng bút toán: thêm hay bớt giá trị dễ, một dòng chia được cho nhiều đối tượng, BCTC không đổi.\n✗ Tài khoản chi tiết cho mọi tổ hợp: số tài khoản tăng theo tích các chiều, và mỗi lần đổi phải cập nhật danh mục và Quy chế hạch toán theo TT99 Điều 11.\n✗ Đổi TK 641 thành tài khoản cấp 1 theo kênh: sai cấu trúc, và có thể làm thay đổi chỉ tiêu BCTC, điều mà TT99 Điều 11 không cho.\n✗ Nhập vào bảng tính sau khi khoá sổ: mất liên kết với chứng từ gốc, không đối chiếu được với sổ cái.",
  },
  {
    id: "kt-33-005",
    courseId: "KT-VN",
    lesson: "kt-33-trung-tam-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "hard",
    type: "single",
    question: "Báo cáo lợi nhuận theo kênh có doanh thu nhưng thiếu giá vốn của kênh Website. Nguyên nhân hợp lý nhất theo bài là gì?",
    options: ["Bút toán giá vốn sinh từ phiếu xuất kho không mang chiều Kênh", "Chi phí bán hàng chưa được kết chuyển sang TK 911", "TK 627 chưa được chi tiết theo phân xưởng", "Doanh nghiệp chưa đăng ký kế toán quản trị với cơ quan thuế"],
    correctIndices: [0],
    explanation: "Doanh thu, giảm trừ và giá vốn của cùng một đơn hàng phải cùng mang một giá trị chiều, thì báo cáo trung tâm lợi nhuận mới đúng.\n✓ Phiếu xuất kho không mang chiều Kênh: dòng giá vốn sinh ra không gắn kênh, nên rơi vào phần chưa gắn chiều.\n✗ Chi phí bán hàng chưa kết chuyển sang TK 911: đó là bút toán cuối kỳ cho BCTC, không quyết định giá vốn được gắn kênh nào.\n✗ TK 627 chưa chi tiết theo phân xưởng: liên quan chi phí sản xuất chung, không phải giá vốn theo kênh bán.\n✗ Chưa đăng ký kế toán quản trị với thuế: TT53 coi kế toán quản trị là công việc của từng doanh nghiệp, và lỗi này cũng không liên quan tới việc dòng giá vốn có gắn kênh hay không.",
  },
];

export const questions: Question[] = [...curatedQuestions];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

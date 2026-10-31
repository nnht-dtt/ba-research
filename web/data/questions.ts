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
  // ============================================================
  // KT-VN — kt-34-phan-bo-chi-phi
  // ============================================================
  {
    id: "kt-34-001",
    courseId: "KT-VN",
    lesson: "kt-34-phan-bo-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "easy",
    type: "single",
    question: "Theo Thông tư 53/2006/TT-BTC, chi phí phát sinh chỉ liên quan đến một đối tượng chịu chi phí thì tập hợp theo phương pháp nào?",
    options: ["Phương pháp trực tiếp: tập hợp thẳng cho đối tượng đó", "Phương pháp phân bổ theo giờ công", "Phương pháp phân bổ theo cấp bậc", "Phương pháp tương hỗ giữa các trung tâm phụ"],
    correctIndices: [0],
    explanation: "TT53 dùng phương pháp trực tiếp khi chi phí chỉ liên quan một đối tượng, và phương pháp phân bổ khi liên quan nhiều đối tượng.\n✓ Phương pháp trực tiếp: chi phí của đối tượng nào tập hợp thẳng cho đối tượng đó.\n✗ Phân bổ theo giờ công: giờ công là căn cứ của phương pháp phân bổ, chỉ dùng khi chi phí liên quan nhiều đối tượng.\n✗ Phân bổ theo cấp bậc: là cách phân bổ chi phí trung tâm phụ khi có nhiều đối tượng nhận.\n✗ Phương pháp tương hỗ: dùng cho các trung tâm phụ phục vụ lẫn nhau, không phải chi phí của một đối tượng.",
  },
  {
    id: "kt-34-002",
    courseId: "KT-VN",
    lesson: "kt-34-phan-bo-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "medium",
    type: "single",
    question: "Chi phí sản xuất chung cố định của phân xưởng là 90 triệu đồng/tháng, công suất bình thường 10.000 sản phẩm. Tháng này phân xưởng làm được 8.000 sản phẩm. Theo Phụ lục II TT99, xử lý thế nào?",
    options: ["72 triệu vào TK 154, 18 triệu ghi Nợ TK 632 / Có TK 627", "90 triệu vào TK 154, chia đều cho 8.000 sản phẩm", "72 triệu vào TK 154, 18 triệu để lại số dư TK 627 sang tháng sau", "90 triệu ghi Nợ TK 632 vì sản xuất dưới công suất"],
    correctIndices: [0],
    explanation: "Sản xuất thấp hơn công suất bình thường thì chi phí sản xuất chung cố định chỉ được phân bổ theo mức công suất bình thường. Phần còn lại ghi vào giá vốn hàng bán trong kỳ.\n✓ 72 triệu vào TK 154, 18 triệu Nợ TK 632 / Có TK 627: mức 9.000 đồng/sản phẩm × 8.000 = 72 triệu, phần không phân bổ là 18 triệu.\n✗ 90 triệu chia đều cho 8.000 sản phẩm: cách này đẩy chi phí của công suất nhàn rỗi vào giá thành, trái quy tắc công suất bình thường.\n✗ Để lại 18 triệu trên TK 627: TK 627 không có số dư cuối kỳ theo TT99.\n✗ Ghi toàn bộ 90 triệu vào TK 632: chỉ phần không phân bổ mới vào giá vốn, phần theo công suất bình thường vẫn vào giá thành.",
  },
  {
    id: "kt-34-003",
    courseId: "KT-VN",
    lesson: "kt-34-phan-bo-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "medium",
    type: "multi",
    question: "Đặc điểm nào đúng với phương pháp phân bổ bậc thang (step-down) cho các trung tâm phụ? (Chọn 2)",
    options: ["Phân bổ lần lượt, mỗi trung tâm phụ phân bổ cho trung tâm chính và các trung tâm phụ còn lại", "Trung tâm phụ đã phân bổ xong thì không nhận lại chi phí từ trung tâm phụ khác", "Bỏ qua hoàn toàn mọi dịch vụ giữa các trung tâm phụ", "Phải giải hệ phương trình để ghi nhận đầy đủ dịch vụ qua lại"],
    correctIndices: [0, 1],
    explanation: "Phương pháp bậc thang phân bổ tuần tự và chỉ theo một chiều. Nó nằm giữa phương pháp trực tiếp và phương pháp tương hỗ.\n✓ Phân bổ lần lượt cho trung tâm chính và các trung tâm phụ còn lại: đúng mô tả tuần tự.\n✓ Trung tâm đã phân bổ xong thì không nhận lại: đây là tính một chiều của phương pháp.\n✗ Bỏ qua mọi dịch vụ giữa các trung tâm phụ: đó là phương pháp trực tiếp.\n✗ Giải hệ phương trình cho dịch vụ qua lại: đó là phương pháp tương hỗ.",
  },
  {
    id: "kt-34-004",
    courseId: "KT-VN",
    lesson: "kt-34-phan-bo-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "hard",
    type: "single",
    question: "Doanh nghiệp muốn phân bổ chi phí quản lý doanh nghiệp (TK 642) cho từng kênh bán để xem lợi nhuận kênh. Theo bài, việc này thường làm ở đâu?",
    options: ["Trong báo cáo quản trị hoặc trên chiều phân tích, không đổi việc kết chuyển TK 642 sang TK 911", "Kết chuyển TK 642 vào TK 154 theo doanh thu từng kênh", "Ghi Nợ TK 632 / Có TK 642 theo tỷ lệ doanh thu kênh", "Chuyển TK 642 sang TK 627 rồi phân bổ cùng chi phí sản xuất chung"],
    correctIndices: [0],
    explanation: "Chi phí quản lý là chi phí thời kỳ. Trên BCTC, TK 642 kết chuyển toàn bộ sang TK 911. Muốn chia cho kênh thì chia ở tầng quản trị.\n✓ Trong báo cáo quản trị hoặc trên chiều phân tích: TT53 cho lập Bảng tính phân bổ chi phí quản lý doanh nghiệp làm chứng từ nội bộ; sổ cái không đổi.\n✗ Kết chuyển TK 642 vào TK 154: TT99 không cho hạch toán chi phí quản lý doanh nghiệp vào TK 154.\n✗ Ghi Nợ TK 632 / Có TK 642: làm sai chỉ tiêu giá vốn và chi phí quản lý trên B02-DN.\n✗ Chuyển TK 642 sang TK 627: TK 627 chỉ phản ánh chi phí phục vụ sản xuất ở phân xưởng, bộ phận sản xuất.",
  },
  {
    id: "kt-34-005",
    courseId: "KT-VN",
    lesson: "kt-34-phan-bo-chi-phi",
    certifications: ["KT-VN"],
    difficulty: "hard",
    type: "single",
    question: "Bảo trì (100 triệu) phục vụ IT 20%, PX1 50%, PX2 30%. IT (60 triệu) phục vụ Bảo trì 20%, PX1 40%, PX2 40%. Theo phương pháp trực tiếp, PX1 nhận bao nhiêu?",
    options: ["92,5 triệu", "90 triệu", "80 triệu", "62,5 triệu"],
    correctIndices: [0],
    explanation: "Phương pháp trực tiếp bỏ phần các trung tâm phụ phục vụ nhau, rồi chia lại theo tỷ lệ giữa các trung tâm chính.\n✓ 92,5 triệu: Bảo trì chia 50:30 nên PX1 nhận 62,5 triệu; IT chia 40:40 nên PX1 nhận 30 triệu; cộng lại là 92,5 triệu.\n✗ 90 triệu: đây là kết quả của phương pháp bậc thang bắt đầu từ Bảo trì (50 + 40).\n✗ 80 triệu: là số IT có sau khi nhận 20 triệu từ Bảo trì trong phương pháp bậc thang, không phải phần của PX1.\n✗ 62,5 triệu: mới là phần nhận từ Bảo trì, còn thiếu phần từ IT.",
  },
];

export const questions: Question[] = [...curatedQuestions];

export function getQuestionById(id: string): Question | undefined {
  return questions.find((q) => q.id === id);
}

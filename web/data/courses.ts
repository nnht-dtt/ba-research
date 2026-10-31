import type { Course, CourseId } from "@/lib/types";

export const courses: Course[] = [
  {
    id: "GUIDE",
    code: "GUIDE",
    title: "Hướng dẫn dùng BA Knowledge",
    shortTitle: "Hướng dẫn",
    level: "Nhập môn",
    description:
      "Cách thêm khoá, bài học và câu hỏi luyện tập; các cú pháp Markdown site hỗ trợ (callout, bảng, sơ đồ bấm từng bước, so sánh A/B, liên kết giữa các bài).",
    hint: "Đọc trước khi thêm nội dung đầu tiên.",
    durationHours: 1,
    passingScore: 0, examMinutes: 0, examQuestions: 0,
    accentColor: "#f97316",
    order: 0, status: "available", kind: "knowledge", category: "guide",
  },
  {
    id: "KT-VN",
    code: "KT-VN",
    title: "Nghiệp vụ kế toán doanh nghiệp Việt Nam cho BA",
    shortTitle: "Kế toán VN cho BA",
    level: "Nền tảng",
    description:
      "Nghiệp vụ kế toán doanh nghiệp Việt Nam theo Luật Kế toán, VAS và TT99/2025 nhìn từ góc BA tư vấn hệ thống: mỗi chu trình mua, bán, kho, sản xuất, tài sản, lương, quản trị chi phí, khoá sổ sinh bút toán gì, cần cấu hình và kiểm soát gì, lên báo cáo tài chính ra sao.",
    hint: "Cho BA làm dự án hệ thống kế toán/ERP cần nền tảng nghiệp vụ kế toán.",
    durationHours: 11,
    passingScore: 0, examMinutes: 0, examQuestions: 0,
    accentColor: "#059669",
    order: 1, status: "available", kind: "knowledge", category: "domain",
  },
  {
    id: "KT-QT",
    code: "KT-QT",
    title: "Kế toán tập đoàn đa quốc gia và bán hàng xuyên biên giới",
    shortTitle: "Tập đoàn đa quốc gia",
    level: "Nền tảng",
    description:
      "Đa pháp nhân, đa quốc gia nhìn từ góc BA tư vấn hệ thống: giao dịch nội bộ, hợp nhất, ngoại tệ, VAS và IFRS, mapping COA tập đoàn, báo cáo cho công ty mẹ, bán hàng đa kênh TMĐT và nghĩa vụ thuế ở nhiều quốc gia.",
    hint: "Cho BA làm dự án ERP của tập đoàn nhiều pháp nhân, nhiều quốc gia, bán hàng online.",
    durationHours: 6,
    passingScore: 0, examMinutes: 0, examQuestions: 0,
    accentColor: "#7c3aed",
    order: 2, status: "available", kind: "knowledge", category: "domain",
  },
];

export function getCourse(id: CourseId | string): Course | undefined {
  return courses.find((c) => c.id === id);
}

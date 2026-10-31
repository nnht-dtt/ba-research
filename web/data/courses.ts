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
];

export function getCourse(id: CourseId | string): Course | undefined {
  return courses.find((c) => c.id === id);
}

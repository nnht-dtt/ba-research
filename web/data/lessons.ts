import type { Lesson, Chapter, CourseId } from "@/lib/types";

// Mỗi khoá có một mảng lessons + một mảng chapters, rồi gộp vào `lessons` và
// `chapters` ở cuối file. `file` là đường dẫn tương đối tới ../lessons.

// =====================================================================
// GUIDE — Hướng dẫn dùng BA Knowledge
// =====================================================================
const guideLessons: Lesson[] = [
  { slug: "guide-01-them-noi-dung", courseId: "GUIDE", title: "Thêm khoá, bài học và câu hỏi", shortTitle: "Thêm nội dung", chapter: "guide-ch1", order: 1, available: true,
    description: "Ba file cần sửa khi thêm khoá mới, cách đặt slug, cách viết câu hỏi luyện tập và câu hỏi thi.", file: "guide/guide-01-them-noi-dung.md" },
  { slug: "guide-02-cu-phap-markdown", courseId: "GUIDE", title: "Cú pháp Markdown site hỗ trợ", shortTitle: "Cú pháp Markdown", chapter: "guide-ch1", order: 2, available: true,
    description: "Callout, bảng, liên kết [[slug]], tab code, sơ đồ bấm từng bước <step-flow> và so sánh A/B <ab-toggle>.", file: "guide/guide-02-cu-phap-markdown.md" },
];
const guideChapters: Chapter[] = [
  { id: "guide-ch1", courseId: "GUIDE", title: "Bắt đầu", lessonSlugs: ["guide-01-them-noi-dung", "guide-02-cu-phap-markdown"], category: "foundation" },
];

export const lessons: Lesson[] = [...guideLessons];
export const chapters: Chapter[] = [...guideChapters];

export function lessonsOfCourse(courseId: CourseId): Lesson[] {
  return lessons.filter((l) => l.courseId === courseId).sort((a, b) => a.order - b.order);
}

export function chaptersOfCourse(courseId: CourseId): Chapter[] {
  return chapters.filter((c) => c.courseId === courseId);
}

export function getLessonBySlug(courseId: CourseId, slug: string): Lesson | undefined {
  return lessons.find((l) => l.courseId === courseId && l.slug === slug);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}

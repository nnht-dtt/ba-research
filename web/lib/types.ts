/** Mỗi khoá thêm vào data/courses.ts cần khai báo id ở đây trước. */
export type CourseId = "GUIDE" | "KT-VN" | "KT-QT";

/** Learning-path stage used to group courses on the home page. */
export type CourseCategory = "guide" | "foundation" | "domain" | "certification";
export type CourseLevel = "Nhập môn" | "Nền tảng" | "Foundational" | "Associate" | "Professional";

// Backwards-compat alias for code that referenced Certification
export type Certification = CourseId;

export type QuestionType = "single" | "multi";

export interface Course {
  id: CourseId;
  code: string;          // "GUIDE"
  title: string;         // "Hướng dẫn dùng BA Knowledge"
  shortTitle: string;    // "Hướng dẫn"
  level: CourseLevel;
  description: string;
  hint: string;          // who-it's-for, in 1 line
  durationHours: number; // estimated study hours
  passingScore: number;  // 0-100
  examMinutes: number;
  examQuestions: number;
  prerequisites?: CourseId[];
  accentColor: string;   // hex
  order: number;
  status: "available" | "coming-soon";
  /** "knowledge" = theory track with lessons only (no exam/practice). Default: certification. */
  kind?: "certification" | "knowledge";
  category: CourseCategory;
}

export interface Question {
  id: string;
  courseId: CourseId;
  lesson: string;           // lesson slug (within course)
  certifications: CourseId[]; // legacy: which courses this question can show up in
  difficulty: "easy" | "medium" | "hard";
  type: QuestionType;
  question: string;
  options: string[];
  correctIndices: number[];
  explanation: string;
  domain?: 1 | 2 | 3 | 4;  // exam blueprint domain (khoá certification)
  mock?: number;           // fixed mock set number this question belongs to
}

export interface Lesson {
  slug: string;
  courseId: CourseId;
  title: string;
  shortTitle: string;
  chapter: string;
  description: string;
  file: string;        // relative to ../lessons, e.g. "guide/guide-01-them-noi-dung.md"
  order: number;
  available: boolean;  // whether markdown content exists
}

export interface Chapter {
  id: string;
  courseId: CourseId;
  title: string;
  lessonSlugs: string[];
  category: string;    // category color key (foundation, security, ...)
}

export type Mode = "practice" | "exam";

export interface AnswerRecord {
  questionId: string;
  selected: number[];
  correct: boolean;
  timeSpentMs?: number;
}

export interface AttemptSummary {
  id: string;
  courseId: CourseId;
  setKey: string;
  setLabel: string;
  mode: Mode;
  startedAt: number;
  finishedAt: number;
  totalQuestions: number;
  correctCount: number;
  score: number;
  durationMs: number;
  answers: AnswerRecord[];
}

export interface WrongQuestionEntry {
  questionId: string;
  wrongCount: number;
  lastWrongAt: number;
}

export interface ProgressState {
  xp: number;
  streakDays: number;
  lastActiveDate: string; // yyyy-mm-dd
  lessonsCompleted: string[]; // lesson slugs (course-qualified: "GUIDE:guide-01-them-noi-dung")
}

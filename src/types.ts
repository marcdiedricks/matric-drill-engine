export type Language = 'en' | 'af' | 'xh';

export interface LocalizedString {
  en: string;
  af: string;
  xh: string;
}

export interface Question {
  id: string;
  authority: string;
  subject: string;
  paper: number;
  sourceYear: string;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  questionText: string | LocalizedString;
  scaffoldHint: string | LocalizedString;
  memoText: string | LocalizedString;
}

export interface UserProgress {
  questionId: string;
  subject: string;
  paper: number;
  score: number; // 0, 0.5, or 1
  lastAttempted: string;
}
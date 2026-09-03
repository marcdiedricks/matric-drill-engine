import Dexie, { type Table } from 'dexie';

export type Language = 'en' | 'af' | 'xh';

export interface LocalizedString {
  en: string;
  af: string;
  xh: string;
}

export interface QuestionRecord {
  id: string;
  subject: string;
  paper: number;
  topic: string;
  subtopic?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  marks: number;
  sourceYear?: number;
  questionText: LocalizedString;
  scaffoldHint: LocalizedString;
  memoText: LocalizedString;
}

export interface ProgressRecord {
  id: string;
  score: number;
  timestamp: number;
}

export class MatricOfflineDatabase extends Dexie {
  questions!: Table<QuestionRecord, string>;
  progress!: Table<ProgressRecord, string>;

  constructor() {
    super('MatricOfflineDB');
    this.version(1).stores({
      questions: 'id, subject, paper, topic, difficulty',
      progress: 'id, score, timestamp'
    });
  }
}

export const db = new MatricOfflineDatabase();

export async function requestPersistentStorage(): Promise<boolean> {
  if (navigator.storage && navigator.storage.persist) {
    return await navigator.storage.persist();
  }
  return false;
}

export async function initDatabase(subject: string): Promise<void> {
  const count = await db.questions.where('subject').equals(subject).count();
  if (count === 0) {
    try {
      const res = await fetch(`/packs/${subject}.json`);
      if (res.ok) {
        const data = await res.json();
        const questionList = Array.isArray(data)
          ? data
          : (Array.isArray(data?.questions) ? data.questions : []);

        if (questionList.length > 0) {
          await db.questions.bulkPut(questionList);
        }
      }
    } catch (err) {
      console.warn(`Could not load /packs/${subject}.json offline`, err);
    }
  }
}

export async function recordAttempt(questionId: string, score: number): Promise<void> {
  await db.progress.put({
    id: questionId,
    score,
    timestamp: Date.now()
  });
}

export async function resetSubjectProgress(subject: string): Promise<void> {
  const subjectQuestions = await db.questions.where('subject').equals(subject).toArray();
  const ids = subjectQuestions.map((q) => q.id);
  await db.progress.bulkDelete(ids);
}
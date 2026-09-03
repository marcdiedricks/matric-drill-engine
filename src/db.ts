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
  sourceYear?: number | string;
  authority?: string;
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

function toLocalizedString(value: unknown): LocalizedString {
  if (typeof value === 'string') {
    return { en: value, af: value, xh: value };
  }

  if (value && typeof value === 'object') {
    const record = value as Partial<LocalizedString>;
    const fallback = record.en ?? record.af ?? record.xh ?? '';
    return {
      en: record.en ?? fallback,
      af: record.af ?? fallback,
      xh: record.xh ?? fallback
    };
  }

  return { en: '', af: '', xh: '' };
}

/**
 * Refresh the selected subject pack whenever it is available.
 * Pack filenames use short subject IDs such as "maths", while older JSON
 * records may contain display names such as "Mathematics". We normalise the
 * stored subject to the short ID so IndexedDB queries always match the UI.
 * If the pack cannot be fetched, the existing IndexedDB copy remains usable.
 */
export async function initDatabase(subject: string): Promise<void> {
  try {
    const res = await fetch(`/packs/${subject}.json`);
    if (!res.ok) return;

    const data = await res.json();
    const rawList = Array.isArray(data)
      ? data
      : (Array.isArray(data?.questions) ? data.questions : []);

    if (rawList.length === 0) return;

    const questionList: QuestionRecord[] = rawList.map((q: any) => ({
      ...q,
      subject,
      questionText: toLocalizedString(q.questionText),
      scaffoldHint: toLocalizedString(q.scaffoldHint),
      memoText: toLocalizedString(q.memoText)
    }));

    await db.transaction('rw', db.questions, async () => {
      const existing = await db.questions.where('subject').equals(subject).toArray();
      const incomingIds = new Set(questionList.map((q) => q.id));
      const staleIds = existing.filter((q) => !incomingIds.has(q.id)).map((q) => q.id);
      if (staleIds.length > 0) await db.questions.bulkDelete(staleIds);
      await db.questions.bulkPut(questionList);
    });
  } catch (err) {
    console.warn(`Using cached IndexedDB pack for ${subject}`, err);
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

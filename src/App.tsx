import { useState, useEffect, useMemo } from 'react';
import { db, initDatabase, recordAttempt, resetSubjectProgress, requestPersistentStorage } from './db';
import type { QuestionRecord, ProgressRecord, Language, LocalizedString } from './db';
import katex from 'katex';

const SUBJECTS = [
  { id: 'maths', name: 'Mathematics' },
  { id: 'physics', name: 'Physical Sciences' },
  { id: 'lifesciences', name: 'Life Sciences' },
  { id: 'mathlit', name: 'Mathematical Literacy' },
  { id: 'accounting', name: 'Accounting' },
  { id: 'business', name: 'Business Studies' }
];

function renderMathInText(text: string): string {
  if (!text) return '';

  const displayMathRegex = /\$\$([\s\S]+?)\$\$/g;
  let formatted = text.replace(displayMathRegex, (_, equation) => {
    try {
      return katex.renderToString(equation.trim(), { displayMode: true, throwOnError: false });
    } catch {
      return equation;
    }
  });

  const inlineMathRegex = /\$([^\$\n]+?)\$/g;
  formatted = formatted.replace(inlineMathRegex, (_, equation) => {
    try {
      return katex.renderToString(equation.trim(), { displayMode: false, throwOnError: false });
    } catch {
      return equation;
    }
  });

  formatted = formatted
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br />');

  return formatted;
}

function resolveLocalizedText(content: string | LocalizedString | undefined, lang: Language): string {
  if (!content) return '';
  if (typeof content === 'string') return content;
  return content[lang] || content['en'] || '';
}

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('maths');
  const [selectedPaper, setSelectedPaper] = useState<number | 'all'>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [questions, setQuestions] = useState<QuestionRecord[]>([]);
  const [progressMap, setProgressMap] = useState<Record<string, ProgressRecord>>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showMemo, setShowMemo] = useState(false);
  const [filterWeakOnly, setFilterWeakOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    requestPersistentStorage();
  }, []);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      await initDatabase(currentSubject);
      const [fetchedQuestions, fetchedProgress] = await Promise.all([
        db.questions.where('subject').equals(currentSubject).toArray(),
        db.progress.toArray()
      ]);

      setQuestions(fetchedQuestions);

      const pMap: Record<string, ProgressRecord> = {};
      fetchedProgress.forEach((p) => {
        pMap[p.id] = p;
      });
      setProgressMap(pMap);

      setCurrentIndex(0);
      setShowHint(false);
      setShowMemo(false);
      setSelectedPaper('all');
      setSelectedTopic('all');
      setFilterWeakOnly(false);
      setLoading(false);
    }
    loadData();
  }, [currentSubject]);

  const availableTopics = useMemo(() => {
    let filtered = questions;
    if (selectedPaper !== 'all') {
      filtered = filtered.filter((q) => q.paper === selectedPaper);
    }
    const topicsSet = new Set(filtered.map((q) => q.topic));
    return Array.from(topicsSet).sort();
  }, [questions, selectedPaper]);

  const activeQuestionList = useMemo(() => {
    return questions.filter((q) => {
      if (selectedPaper !== 'all' && q.paper !== selectedPaper) return false;
      if (selectedTopic !== 'all' && q.topic !== selectedTopic) return false;
      if (filterWeakOnly) {
        const prog = progressMap[q.id];
        return prog && (prog.score === 0 || prog.score === 0.5);
      }
      return true;
    });
  }, [questions, selectedPaper, selectedTopic, filterWeakOnly, progressMap]);

  const currentQ = activeQuestionList[currentIndex];

  const handleScore = async (score: number) => {
    if (!currentQ) return;
    await recordAttempt(currentQ.id, score);
    setProgressMap((prev) => ({
      ...prev,
      [currentQ.id]: {
        id: currentQ.id,
        score,
        timestamp: Date.now()
      }
    }));
    handleNext();
  };

  const handleNext = () => {
    if (currentIndex < activeQuestionList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowHint(false);
      setShowMemo(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowHint(false);
      setShowMemo(false);
    }
  };

  const handleReset = async () => {
    if (window.confirm('Reset all progress for this subject?')) {
      await resetSubjectProgress(currentSubject);
      const allProgress = await db.progress.toArray();
      const pMap: Record<string, ProgressRecord> = {};
      allProgress.forEach((p) => {
        pMap[p.id] = p;
      });
      setProgressMap(pMap);
      setCurrentIndex(0);
      setShowHint(false);
      setShowMemo(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '16px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#38bdf8' }}>Matric Survival Drill</h1>
          <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#94a3b8' }}>Official DBE NSC Curriculum (Western Cape)</p>
        </div>

        <div style={{ display: 'flex', gap: '4px', backgroundColor: '#0f172a', padding: '4px', borderRadius: '6px', border: '1px solid #334155' }}>
          {(['en', 'af', 'xh'] as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setCurrentLanguage(lang)}
              style={{
                background: currentLanguage === lang ? '#38bdf8' : 'transparent',
                color: currentLanguage === lang ? '#0f172a' : '#94a3b8',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px', marginBottom: '16px' }}>
        <select
          value={currentSubject}
          onChange={(e) => setCurrentSubject(e.target.value)}
          style={{ background: '#0f172a', color: '#f8fafc', border: '1px solid #334155', padding: '8px', borderRadius: '6px', fontSize: '0.85rem' }}
        >
          {SUBJECTS.map((sub) => (
            <option key={sub.id} value={sub.id}>{sub.name}</option>
          ))}
        </select>

        <select
          value={selectedPaper}
          onChange={(e) => {
            setSelectedPaper(e.target.value === 'all' ? 'all' : Number(e.target.value));
            setSelectedTopic('all');
            setCurrentIndex(0);
          }}
          style={{ background: '#0f172a', color: '#f8fafc', border: '1px solid #334155', padding: '8px', borderRadius: '6px', fontSize: '0.85rem' }}
        >
          <option value="all">All Papers</option>
          <option value="1">Paper 1</option>
          <option value="2">Paper 2</option>
        </select>

        <select
          value={selectedTopic}
          onChange={(e) => {
            setSelectedTopic(e.target.value);
            setCurrentIndex(0);
          }}
          style={{ background: '#0f172a', color: '#f8fafc', border: '1px solid #334155', padding: '8px', borderRadius: '6px', fontSize: '0.85rem' }}
        >
          <option value="all">All Topics</option>
          {availableTopics.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </section>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <button
          onClick={() => {
            setFilterWeakOnly(!filterWeakOnly);
            setCurrentIndex(0);
          }}
          style={{
            background: filterWeakOnly ? '#e11d48' : '#1e293b',
            color: '#f8fafc',
            border: '1px solid #334155',
            padding: '6px 12px',
            borderRadius: '6px',
            fontSize: '0.8rem',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          {filterWeakOnly ? 'Showing Weak Spots' : 'Drill Weak Spots'}
        </button>

        <button
          onClick={handleReset}
          style={{ background: 'transparent', color: '#ef4444', border: 'none', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Reset Progress
        </button>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading syllabus data...</div>
      ) : activeQuestionList.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#0f172a', borderRadius: '8px', border: '1px dashed #334155' }}>
          <p style={{ margin: 0, color: '#94a3b8' }}>No questions match your filter.</p>
        </div>
      ) : (
        <main style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px', padding: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', fontSize: '0.8rem', color: '#94a3b8' }}>
            <span>
              <strong style={{ color: '#38bdf8' }}>{currentQ.topic}</strong> (P{currentQ.paper} - {currentQ.sourceYear})
            </span>
            <span style={{ backgroundColor: '#1e293b', padding: '2px 8px', borderRadius: '4px' }}>
              {currentIndex + 1} of {activeQuestionList.length} | {currentQ.marks} Marks
            </span>
          </div>

          <div
            style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '16px' }}
            dangerouslySetInnerHTML={{ __html: renderMathInText(resolveLocalizedText(currentQ.questionText, currentLanguage)) }}
          />

          <div style={{ marginBottom: '12px' }}>
            <button
              onClick={() => setShowHint(!showHint)}
              style={{ background: '#1e293b', color: '#f59e0b', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
            >
              {showHint ? 'Hide Hint' : '💡 Need a Hint? (Icebiso / Wenk)'}
            </button>
            {showHint && (
              <div
                style={{ marginTop: '8px', padding: '12px', backgroundColor: '#1c1917', borderLeft: '4px solid #f59e0b', borderRadius: '4px', fontSize: '0.9rem', color: '#fed7aa' }}
                dangerouslySetInnerHTML={{ __html: renderMathInText(resolveLocalizedText(currentQ.scaffoldHint, currentLanguage)) }}
              />
            )}
          </div>

          <div style={{ marginBottom: '16px' }}>
            <button
              onClick={() => setShowMemo(!showMemo)}
              style={{ background: '#1e293b', color: '#10b981', border: '1px solid #059669', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', cursor: 'pointer', fontWeight: 600 }}
            >
              {showMemo ? 'Hide Memorandum' : '📝 Show Memorandum & Marks'}
            </button>
            {showMemo && (
              <div
                style={{ marginTop: '8px', padding: '12px', backgroundColor: '#064e3b', borderLeft: '4px solid #10b981', borderRadius: '4px', fontSize: '0.9rem', color: '#ecfdf5' }}
                dangerouslySetInnerHTML={{ __html: renderMathInText(resolveLocalizedText(currentQ.memoText, currentLanguage)) }}
              />
            )}
          </div>

          <div style={{ borderTop: '1px solid #1e293b', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                style={{ background: '#334155', color: '#f8fafc', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
              >
                Prev
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === activeQuestionList.length - 1}
                style={{ background: '#334155', color: '#f8fafc', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: currentIndex === activeQuestionList.length - 1 ? 'not-allowed' : 'pointer' }}
              >
                Next
              </button>
            </div>

            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => handleScore(0)}
                style={{ background: '#ef4444', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                Got Stuck (0)
              </button>
              <button
                onClick={() => handleScore(0.5)}
                style={{ background: '#f59e0b', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                Partial (0.5)
              </button>
              <button
                onClick={() => handleScore(1)}
                style={{ background: '#10b981', color: '#ffffff', border: 'none', padding: '6px 12px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                Mastered (1.0)
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
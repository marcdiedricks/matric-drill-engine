import type { LocalizedString, QuestionRecord } from './db';

const simultaneousMemo: LocalizedString = {
  en: '$x = y + 3$\n$(y + 3)^2 - (y + 3)y + y^2 = 21$\n$y^2 + 3y - 12 = 0$\n$y = \\frac{-3 \\pm \\sqrt{57}}{2}$\n$x = y + 3 = \\frac{3 \\pm \\sqrt{57}}{2}$\nSolutions: $(x;y)=\\left(\\frac{3+\\sqrt{57}}{2};\\frac{-3+\\sqrt{57}}{2}\\right)$ or $\\left(\\frac{3-\\sqrt{57}}{2};\\frac{-3-\\sqrt{57}}{2}\\right)$',
  af: '$x = y + 3$\n$(y + 3)^2 - (y + 3)y + y^2 = 21$\n$y^2 + 3y - 12 = 0$\n$y = \\frac{-3 \\pm \\sqrt{57}}{2}$\n$x = y + 3 = \\frac{3 \\pm \\sqrt{57}}{2}$\nOplossings: $(x;y)=\\left(\\frac{3+\\sqrt{57}}{2};\\frac{-3+\\sqrt{57}}{2}\\right)$ of $\\left(\\frac{3-\\sqrt{57}}{2};\\frac{-3-\\sqrt{57}}{2}\\right)$',
  xh: '$x = y + 3$\n$(y + 3)^2 - (y + 3)y + y^2 = 21$\n$y^2 + 3y - 12 = 0$\n$y = \\frac{-3 \\pm \\sqrt{57}}{2}$\n$x = y + 3 = \\frac{3 \\pm \\sqrt{57}}{2}$\nIzisombululo: $(x;y)=\\left(\\frac{3+\\sqrt{57}}{2};\\frac{-3+\\sqrt{57}}{2}\\right)$ okanye $\\left(\\frac{3-\\sqrt{57}}{2};\\frac{-3-\\sqrt{57}}{2}\\right)$'
};

const financeMemo = '$P = 250000$, $i = \\frac{0.105}{12} = 0.00875$, $n = 60$\n$250000 = \\frac{x[1 - (1 + 0.00875)^{-60}]}{0.00875}$\n$x \\approx \\text{R}5\\,373.48$';

/**
 * Launch-critical verified corrections.
 * These are deliberately explicit and small. They should be baked back into
 * the source pack during the full Mathematics pack QA, then removed here.
 */
export function applyVerifiedContentCorrections(question: QuestionRecord): QuestionRecord {
  if (question.id === 'math_p1_alg_03') {
    return { ...question, memoText: simultaneousMemo };
  }

  if (question.id === 'math_p1_fin_01') {
    return {
      ...question,
      memoText: { en: financeMemo, af: financeMemo, xh: financeMemo }
    };
  }

  return question;
}

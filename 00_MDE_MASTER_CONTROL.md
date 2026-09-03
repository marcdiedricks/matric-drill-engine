# MATRIC DRILL ENGINE — MASTER CONTROL

**Project:** Matric Drill Engine  
**Lead:** Marc Diedricks  
**Primary region:** Western Cape, South Africa  
**Working launch deadline:** Sunday, 6 September 2026  
**Language layer:** English / Afrikaans / isiXhosa in the same app and subject packs  

## GOLDEN RULE — NON-NEGOTIABLE BUILD DOCTRINE

Every build decision must pass all of these gates:

1. South African context first.
2. Marginalised and underserved learners first.
3. Mobile-first and usable on ordinary / older phones.
4. Simplest possible learner experience on a phone.
5. Offline-first, with complete offline operation after initial install/content acquisition wherever technically feasible.
6. No-bandwidth and low-bandwidth conditions anticipated.
7. Low-data architecture.
8. English, Afrikaans and isiXhosa are language views of the same app, not separate app launches.
9. One subject at a time.
10. Inspect existing work before building anything new.
11. Build the smallest safe increment.
12. Test → verify → freeze before moving to the next subject.
13. Never mark a subject “Complete” merely because the main topic headings are represented.
14. Curriculum coverage, answer accuracy, language quality, provenance and offline/mobile behaviour must all pass before “Completed”.

## FOUR-TIER SUBJECT CURRICULUM ROLLOUT TRACKER — PERMANENT CONTROL

| Phase / Tier | Subject / Area | Scope | Status |
|---|---|---|---|
| Engine Foundation | Storage & Seed Pipeline | Dexie.js persistence, offline cache, pack refresh/reseeding | **VERIFIED PASS** |
| Engine Foundation | Mobile UI & Accessibility | Mobile-first, high-contrast, thumb-friendly layout | **VERIFIED PASS — current launch baseline** |
| Tier 1: Core STEM | Mathematics | Paper 1 & 2 framework, KaTeX, EN/AF/XH, current 16-question launch pack | **FROZEN LAUNCH BASELINE — not full syllabus complete** |
| Tier 1: Core STEM | Life Sciences | Grade 12 Paper 1 & 2 topic-family launch pack, EN/AF/XH | **ACTIVE — 12-question coverage pack ready for verification** |
| Tier 1: Core STEM | Physical Sciences | Full curriculum-aligned bank, KaTeX, EN/AF/XH | **Pending** |
| Tier 1: High-Enrollment | Mathematical Literacy | Full curriculum-aligned bank | **Pending** |
| Tier 1: Commerce | Accounting | Full curriculum-aligned bank | **Pending** |
| Tier 1: Commerce | Business Studies | Full curriculum-aligned bank | **Pending** |
| Tier 2: Humanities | Geography / History / Economics / Tourism | Curriculum and exam-bank ingestion | **Pending** |
| Tier 3: Technical | Civil / Mechanical / Electrical / EGD | Technical banks + schematic/diagram caching | **Pending** |
| Tier 4: Languages & Arts | Language / Arts / Music content | Comprehension/text/audio/media/archive support | **Pending** |

## MATHEMATICS FREEZE RECORD — 3 SEPTEMBER 2026

The current Mathematics launch baseline is frozen after learner-side functional testing.

Verified in the production preview:
- Mathematics loads as **1 / 16** after stale browser/site data is cleared.
- English / Afrikaans / isiXhosa language switching works in the learner shell and question content.
- KaTeX renders Mathematics notation correctly.
- Question navigation, hints, memoranda and learner self-rating controls work.
- Production build and PWA service worker generation passed.
- Offline reload was user-verified with connectivity disabled.

**Important limitation:** this freeze means the current 16-question Mathematics baseline is functionally launchable. It does **not** mean full Grade 12 Mathematics syllabus coverage, full provenance audit, or institutional certification is complete.

## CURRENT SUBJECT GATE — LIFE SCIENCES

**Only active subject:** Life Sciences

The original Life Sciences file contained only two Paper 2 questions. It has now been expanded on the controlled `lifesciences-launch-01` branch to a **12-question launch pack** covering every official Grade 12 topic family across Paper 1 and Paper 2.

Paper 1 topic-family coverage:
- Meiosis
- Reproduction in Vertebrates
- Human Reproduction
- Responding to the Environment (Humans)
- Human Endocrine System
- Homeostasis in Humans
- Responding to the Environment (Plants)
- Human Impact on the Environment

Paper 2 topic-family coverage:
- DNA: Code of Life
- Meiosis
- Genetics and Inheritance
- Evolution

All launch-pack questions are original curriculum-aligned drills with English, Afrikaans and isiXhosa question, hint and memorandum fields. They are **not** labelled as verbatim DBE past-paper questions unless individual provenance is later verified.

### Life Sciences next gate
1. GitHub build check.
2. Pull request review/merge if build passes.
3. Learner-side test: confirm **1 / 12**.
4. Verify EN / AF / XH switching.
5. Verify Paper 1 / Paper 2 filters and topic filters.
6. Verify hints/memoranda and offline reload.
7. Freeze only after those tests pass.

Topic-family coverage is not the same as full syllabus depth or institutional certification. Further depth, language-quality and provenance QA remains required.

## LAUNCH REPAIR / FREEZE STATUS

- **MDE-LAUNCH-01:** Mathematics subject-key loading + resilient pack refresh — **PASS**.
- **MDE-LAUNCH-02:** Known Mathematics memo/calculation defects — **PASS for identified defects**.
- **MDE-LAUNCH-03:** Multilingual EN/AF/XH schema and learner shell — **PASS**.
- **MDE-LAUNCH-04:** PWA assets and offline caching baseline — **PASS**.
- **MDE-LAUNCH-05:** Mobile/production/offline acceptance test — **PASS**.
- **MDE-LAUNCH-06:** Mathematics launch baseline freeze — **COMPLETE**.
- **MDE-LS-01:** Life Sciences topic-family launch pack — **READY FOR BUILD/LEARNER VERIFICATION**.

## CURRENT RISK

The Sunday launch deadline remains close. Scope discipline is mandatory. Only Life Sciences is open now. Do not open Physical Sciences or another subject until Life Sciences reaches its controlled freeze gate.

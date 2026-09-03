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
| Engine Foundation | Storage & Seed Pipeline | Dexie.js persistence, offline cache, pack refresh/reseeding | **Launch repair in progress** |
| Engine Foundation | Mobile UI & Accessibility | Mobile-first, high-contrast, thumb-friendly layout | **Launch repair in progress** |
| Tier 1: Core STEM | Mathematics | Paper 1 & 2 framework, KaTeX, EN/AF/XH, initial 16-question pack | **ACTIVE — verification & expansion** |
| Tier 1: Core STEM | Life Sciences | Full curriculum-aligned bank, EN/AF/XH | **Pending** |
| Tier 1: Core STEM | Physical Sciences | Full curriculum-aligned bank, KaTeX, EN/AF/XH | **Pending** |
| Tier 1: High-Enrollment | Mathematical Literacy | Full curriculum-aligned bank | **Pending** |
| Tier 1: Commerce | Accounting | Full curriculum-aligned bank | **Pending** |
| Tier 1: Commerce | Business Studies | Full curriculum-aligned bank | **Pending** |
| Tier 2: Humanities | Geography / History / Economics / Tourism | Curriculum and exam-bank ingestion | **Pending** |
| Tier 3: Technical | Civil / Mechanical / Electrical / EGD | Technical banks + schematic/diagram caching | **Pending** |
| Tier 4: Languages & Arts | Language / Arts / Music content | Comprehension/text/audio/media/archive support | **Pending** |

## CURRENT SUBJECT GATE

**Only active subject:** Mathematics

Current production-candidate pack: **16 unique questions**.  
Status is **not “complete syllabus”**. High-level topic-family coverage exists, but subtopic depth, source verification and full QA remain in progress.

## LAUNCH REPAIR SEQUENCE

- **MDE-LAUNCH-01:** Repair Mathematics subject-key loading + resilient pack refresh.
- **MDE-LAUNCH-02:** Correct known Mathematics memo/calculation defects.
- **MDE-LAUNCH-03:** Enforce multilingual EN/AF/XH schema and learner shell.
- **MDE-LAUNCH-04:** Clean PWA assets and offline caching baseline.
- **MDE-LAUNCH-05:** Mobile/offline acceptance test.
- **MDE-LAUNCH-06:** Freeze Mathematics launch baseline before activating the next subject.

## CURRENT RISK

The launch deadline is close. Scope discipline is mandatory. Do not open multiple subject build lanes concurrently.

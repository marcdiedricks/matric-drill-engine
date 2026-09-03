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
| Tier 1: Core STEM | Life Sciences | Full curriculum-aligned bank, EN/AF/XH | **ACTIVE — next subject gate** |
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
- The first questions and memoranda tested correctly across all three language views.
- The production build completed successfully and generated the PWA service worker / precache.
- Offline reload was user-verified with connectivity disabled while the production preview remained running.

**Important limitation:** this freeze means the current 16-question Mathematics baseline is functionally launchable. It does **not** mean full Grade 12 Mathematics syllabus coverage, full provenance audit, or institutional certification is complete.

## CURRENT SUBJECT GATE

**Only active subject:** Life Sciences

Mathematics is frozen and must not be casually modified. Any Mathematics change now requires a new controlled correction branch, explicit test, verification and re-freeze.

Life Sciences next action:
1. Inspect the existing `public/packs/lifesciences.json` before creating anything new.
2. Audit the current placeholder/question count and schema.
3. Map the full Grade 12 Life Sciences Paper 1 and Paper 2 curriculum coverage.
4. Expand one controlled pack using EN/AF/XH in the same records.
5. Test → verify → freeze before Physical Sciences is opened.

## LAUNCH REPAIR / FREEZE STATUS

- **MDE-LAUNCH-01:** Mathematics subject-key loading + resilient pack refresh — **PASS**.
- **MDE-LAUNCH-02:** Known Mathematics memo/calculation defects — **PASS for identified defects**.
- **MDE-LAUNCH-03:** Multilingual EN/AF/XH schema and learner shell — **PASS**.
- **MDE-LAUNCH-04:** PWA assets and offline caching baseline — **PASS**.
- **MDE-LAUNCH-05:** Mobile/production/offline acceptance test — **PASS**.
- **MDE-LAUNCH-06:** Mathematics launch baseline freeze — **COMPLETE**.

## CURRENT RISK

The Sunday launch deadline remains close. Scope discipline is mandatory. Only Life Sciences is open now. Do not open Physical Sciences or another subject until Life Sciences reaches its controlled freeze gate.

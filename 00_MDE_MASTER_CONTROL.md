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
| Tier 1: Core STEM | Life Sciences | Grade 12 Paper 1 & 2 topic-family launch pack, EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 1: Core STEM | Physical Sciences | Physics/Chemistry topic-family pack, KaTeX, EN/AF/XH | **ACTIVE — 14-question coverage pack ready for build verification** |
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

## LIFE SCIENCES FREEZE RECORD — 3 SEPTEMBER 2026

The current 12-question Life Sciences launch baseline is frozen after learner-side functional and offline testing.

Verified:
- Life Sciences loads as **1 / 12**.
- English / Afrikaans / isiXhosa switching works across subject name, question text, hints, memoranda, navigation, scoring labels and marks.
- Paper 1 filter shows **1 / 8**.
- Paper 2 filter shows **1 / 4**.
- Topic filtering, hints, memoranda, navigation and learner self-rating controls work.
- Production build completed successfully and generated the PWA service worker / precache.
- Offline reload was user-verified with connectivity disabled.

**Important limitation:** this freeze means the 12-question topic-family coverage pack is functionally launchable. It does **not** mean full Grade 12 Life Sciences syllabus depth, human language-quality certification, verified past-paper provenance, or institutional certification is complete.

## CURRENT SUBJECT GATE — PHYSICAL SCIENCES

**Only active subject:** Physical Sciences

The existing Physical Sciences pack was audited before modification. It contained only **5 questions**, used a different object-wrapper structure, was effectively English-only at item level, included unverified DBE/IEB authenticity and year claims, and contained a duplicate `scaffoldHint` key in one organic-chemistry record.

The controlled `physics-launch-01` branch now contains a **14-question multilingual launch pack** using the same item-level EN/AF/XH structure as the other active packs. Unsupported authenticity/year claims have been removed. Existing useful scientific concepts were retained where appropriate but rewritten as original curriculum-aligned drills.

Paper 1 coverage:
- Newton's Laws & Mechanics
- Momentum & Impulse
- Vertical Projectile Motion
- Work, Energy & Power
- Doppler Effect
- Electrostatics
- Electric Circuits
- Electrodynamics
- Photoelectric Effect

Paper 2 coverage:
- Organic Chemistry
- Rate & Extent of Reaction
- Chemical Equilibrium
- Acids & Bases
- Electrochemistry

### Physical Sciences next gate
1. GitHub build check.
2. Pull request review/merge only if the build passes.
3. Learner-side test: confirm **1 / 14**.
4. Verify EN / AF / XH switching.
5. Verify Paper 1 shows **1 / 9** and Paper 2 shows **1 / 5**.
6. Verify topic filters, hints, memoranda and KaTeX rendering.
7. Run production build and offline reload test.
8. Freeze only after those tests pass.

**Important limitation:** topic-family coverage is not full syllabus depth. Human language-quality certification, deeper question density, provenance QA and institutional certification remain separate future gates.

## LAUNCH REPAIR / FREEZE STATUS

- **MDE-LAUNCH-01:** Mathematics subject-key loading + resilient pack refresh — **PASS**.
- **MDE-LAUNCH-02:** Known Mathematics memo/calculation defects — **PASS for identified defects**.
- **MDE-LAUNCH-03:** Multilingual EN/AF/XH schema and learner shell — **PASS**.
- **MDE-LAUNCH-04:** PWA assets and offline caching baseline — **PASS**.
- **MDE-LAUNCH-05:** Mobile/production/offline acceptance test — **PASS**.
- **MDE-LAUNCH-06:** Mathematics launch baseline freeze — **COMPLETE**.
- **MDE-LS-01:** Life Sciences topic-family launch pack — **PASS**.
- **MDE-LS-02:** Life Sciences learner / production / offline acceptance — **PASS**.
- **MDE-LS-03:** Life Sciences launch baseline freeze — **COMPLETE**.
- **MDE-PS-01:** Physical Sciences existing-pack audit — **PASS**.
- **MDE-PS-02:** 14-question EN/AF/XH Physical Sciences launch pack — **READY FOR BUILD VERIFICATION**.

## CURRENT RISK

The Sunday launch deadline remains close. Scope discipline is mandatory. Only Physical Sciences is open now. Do not open Mathematical Literacy or another subject until Physical Sciences reaches its controlled freeze gate.

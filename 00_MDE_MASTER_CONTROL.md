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
| Tier 1: Core STEM | Physical Sciences | Physics/Chemistry topic-family pack, KaTeX, EN/AF/XH | **FROZEN LAUNCH BASELINE — 14-question coverage pack** |
| Tier 1: High-Enrollment | Mathematical Literacy | Finance, Data, Probability, Measurement, Maps/Plans, EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 1: Commerce | Accounting | Paper 1 Financial Reporting & Evaluation; Paper 2 Managerial Accounting, Internal Auditing & Control; EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 1: Commerce | Business Studies | Paper 1 Business Environments & Operations; Paper 2 Business Ventures & Roles; EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 2: Humanities | Geography | Climate & Weather, Geomorphology, Rural/Urban Settlements, Economic Geography, Mapwork/GIS | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 2: Humanities | Economics | Curriculum and exam-bank ingestion | **ACTIVE — next subject gate** |
| Tier 2: Humanities | History | Curriculum and exam-bank ingestion | **Pending** |
| Tier 2: Humanities | Tourism | Curriculum and exam-bank ingestion | **Pending — Western Cape launch-priority subject** |
| Tier 3: Technical | Civil / Mechanical / Electrical / EGD | Technical banks + schematic/diagram caching | **Pending — post-launch priority wave** |
| Tier 4A: Core Language Exam Support | English / Afrikaans / isiXhosa | Comprehension, summary, visual literacy, language structures, editing and exam technique | **Pending — launch-priority mini-layer** |
| Tier 4B: Arts & Specialist Subjects | Arts / Music / specialist content | Visual/audio/media/archive support | **Pending — post-launch specialist expansion** |

## MATHEMATICS FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/16 loading; EN/AF/XH switching; KaTeX; hints/memos/navigation/scoring; production build; service worker; offline reload.

**Limitation:** functionally launchable baseline only. Not full syllabus depth, provenance audit or institutional certification.

## LIFE SCIENCES FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/8; Paper 2 = 1/4; topic filters; hints/memos/navigation/scoring; production build; offline reload.

**Limitation:** functionally launchable topic-family baseline only. Not full syllabus depth, human language certification, verified past-paper provenance or institutional certification.

## PHYSICAL SCIENCES FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/14 loading; EN/AF/XH switching; Paper 1 = 1/9; Paper 2 = 1/5; memo and navigation; KaTeX/scientific notation; production build; offline reload.

**Limitation:** functionally launchable topic-family baseline only. Not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## MATHEMATICAL LITERACY FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/6; Paper 2 = 1/6; memo; navigation; topic filters; production build; offline reload.

**Limitation:** functionally launchable topic-family baseline only. Not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## ACCOUNTING FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/12 loading; EN/AF/XH learner views; paper/topic filters; hints; memoranda; navigation; production build; offline reload.

**Limitation:** functionally launchable topic-family baseline only. Not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## BUSINESS STUDIES FREEZE RECORD — 3 SEPTEMBER 2026

Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/6; Paper 2 = 1/6; memorandum; navigation; topic filters; production build; offline reload.

**Limitation:** functionally launchable 12-question topic-family baseline only. Not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## GEOGRAPHY FREEZE RECORD — 3 SEPTEMBER 2026

Verified:
- Geography loads as **1 / 12**.
- English / Afrikaans / isiXhosa learner views operate correctly in the tested flow.
- Paper 1 filter shows **1 / 6**.
- Paper 2 filter shows **1 / 6**.
- Memorandum rendering works.
- Next navigation and topic filtering work.
- Local production build passed.
- Production preview showed **1 / 12**.
- Offline reload was user-verified with connectivity disabled.

**Limitation:** functionally launchable 12-question topic-family baseline only. Not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## CURRENT SUBJECT GATE — ECONOMICS

**Only active subject:** Economics

Mathematics, Life Sciences, Physical Sciences, Mathematical Literacy, Accounting, Business Studies and Geography are frozen. Any change to those subjects now requires a controlled correction branch, explicit test, verification and re-freeze.

Economics next action:
1. Inspect the repository for any existing Economics learner pack before creating anything new.
2. Audit question count, schema, language coverage and Paper 1 / Paper 2 distribution if a pack exists.
3. Map Grade 12 Economics topic-family coverage using Western Cape contexts where pedagogically appropriate.
4. Preserve usable existing material and replace only placeholder, monolingual or structurally incompatible records.
5. Build one controlled EN/AF/XH launch pack.
6. Run GitHub build check.
7. Learner test → production/offline test → freeze before opening History.

## LOCKED WESTERN CAPE PRIORITY SEQUENCE

**Geography → Economics → History → English/Afrikaans/isiXhosa Exam Skills → Tourism**

After that launch-priority wave, reassess before expansion into EGD and the technical subjects. Arts/music remain specialist post-launch expansion.

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
- **MDE-PS-02:** 14-question EN/AF/XH Physical Sciences launch pack — **PASS**.
- **MDE-PS-03:** Physical Sciences learner / production / offline acceptance — **PASS**.
- **MDE-PS-04:** Physical Sciences launch baseline freeze — **COMPLETE**.
- **MDE-ML-01:** Mathematical Literacy existing-pack audit — **PASS — no existing pack found**.
- **MDE-ML-02:** 12-question EN/AF/XH Mathematical Literacy launch pack — **PASS**.
- **MDE-ML-03:** Mathematical Literacy learner / production / offline acceptance — **PASS**.
- **MDE-ML-04:** Mathematical Literacy launch baseline freeze — **COMPLETE**.
- **MDE-ACC-01:** Accounting existing-pack audit — **PASS — no existing pack found**.
- **MDE-ACC-02:** 12-question EN/AF/XH Accounting launch pack — **PASS**.
- **MDE-ACC-03:** Accounting learner / production / offline acceptance — **PASS**.
- **MDE-ACC-04:** Accounting launch baseline freeze — **COMPLETE**.
- **MDE-BS-01:** Business Studies existing-pack audit — **PASS — no existing pack found**.
- **MDE-BS-02:** 12-question EN/AF/XH Business Studies launch pack — **PASS**.
- **MDE-BS-03:** Business Studies learner / production / offline acceptance — **PASS**.
- **MDE-BS-04:** Business Studies launch baseline freeze — **COMPLETE**.
- **MDE-GEO-01:** Geography existing-pack and engine-readiness audit — **PASS — no existing pack; selector registration required**.
- **MDE-GEO-02:** Geography selector registration + 12-question EN/AF/XH launch pack — **PASS**.
- **MDE-GEO-03:** Geography learner / production / offline acceptance — **PASS**.
- **MDE-GEO-04:** Geography launch baseline freeze — **COMPLETE**.
- **MDE-ECO-01:** Economics existing-pack audit — **NEXT**.

## CURRENT RISK

The Sunday launch deadline remains close. Scope discipline is mandatory. Only Economics is open now. Do not open History, language exam skills, Tourism or another subject until Economics reaches its controlled freeze gate.

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
| Tier 2: Humanities | Economics | Paper 1 Macroeconomics & Economic Pursuits; Paper 2 Microeconomics & Contemporary Economic Issues; EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 2: Humanities | History | Grade 12 Paper 1 & 2 topic-family launch pack, EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 2: Humanities | Tourism | Single-paper Grade 12 DBE topic-family launch pack, EN/AF/XH | **FROZEN LAUNCH BASELINE — 12-question coverage pack** |
| Tier 3: Technical | Civil / Mechanical / Electrical / EGD | Technical banks + schematic/diagram caching | **Pending — post-launch priority wave** |
| Tier 4A: Core Language Exam Support | English / Afrikaans / isiXhosa | Shared comprehension, summary, visual literacy, language structures, editing and exam-technique layer | **FROZEN LAUNCH BASELINE — 12-question transversal exam-skills pack** |
| Tier 4B: Arts & Specialist Subjects | Arts / Music / specialist content | Visual/audio/media/archive support | **Pending — post-launch specialist expansion** |

## FROZEN SUBJECT RECORDS — 3 SEPTEMBER 2026

### Mathematics
Verified: 1/16 loading; EN/AF/XH switching; KaTeX; hints/memos/navigation/scoring; production build; service worker; offline reload.

### Life Sciences
Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/8; Paper 2 = 1/4; topic filters; hints/memos/navigation/scoring; production build; offline reload.

### Physical Sciences
Verified: 1/14 loading; EN/AF/XH switching; Paper 1 = 1/9; Paper 2 = 1/5; memo/navigation; KaTeX/scientific notation; production build; offline reload.

### Mathematical Literacy
Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/6; Paper 2 = 1/6; memo; navigation; topic filters; production build; offline reload.

### Accounting
Verified: 1/12 loading; EN/AF/XH learner views; paper/topic filters; hints; memoranda; navigation; production build; offline reload.

### Business Studies
Verified: 1/12 loading; EN/AF/XH switching; Paper 1 = 1/6; Paper 2 = 1/6; memorandum; navigation; topic filters; production build; offline reload.

### Geography
Verified: 1/12 loading; EN/AF/XH learner views; Paper 1 = 1/6; Paper 2 = 1/6; memorandum; Next navigation; topic filters; local production build; production preview; offline reload.

### Economics
Verified: Economics loads as **1 / 12**; learner-side functionality user-verified; Paper 1 = **1 / 6**; Paper 2 = **1 / 6**; local production build passed; production preview and offline preview reload user-verified.

### History
Verified: History loads as **1 / 12**; learner-side functionality user-verified; Paper 1 = **1 / 6**; Paper 2 = **1 / 6**; local production build passed; production preview **1 / 12** and remaining learner flow user-verified; offline preview reload user-verified.

### English / Afrikaans / isiXhosa Exam Skills
Verified: Language Exam Skills loads as **1 / 12**; learner-side functionality user-verified; internal Paper 1 = **1 / 6**; internal Paper 2 = **1 / 6**; screenshots confirmed the two 6-question groups, topic labels, memorandum display and navigation; local production build passed; production preview **1 / 12**; offline preview reload and remaining learner flow user-verified.

### Tourism
Verified: Tourism loads as **1 / 12**; broader learner-side functionality user-verified; Tourism single-paper structure confirmed with **Paper 1 = 1 / 12** and no Paper 2 option; local production build passed; production preview **1 / 12**; preview retained the single-paper behaviour; offline preview reload user-verified.

**Standing limitation for frozen launch baselines:** these are functionally launchable coverage/support packs, not claims of full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## CURRENT SUBJECT GATE — LAUNCH-PRIORITY WAVE COMPLETE

**No new subject lane is open.**

Mathematics, Life Sciences, Physical Sciences, Mathematical Literacy, Accounting, Business Studies, Geography, Economics, History, the shared English/Afrikaans/isiXhosa Exam Skills layer and Tourism are frozen launch baselines. Any change to a frozen baseline requires a controlled correction branch, explicit test, verification and re-freeze.

The locked Western Cape launch-priority sequence has now reached its controlled freeze point. Before opening EGD, Civil, Mechanical, Electrical, arts/music or another subject, reassess launch readiness, remaining defects, deployment status, content-quality risks and the Sunday launch deadline.

### Tourism frozen architecture record
- Repository audit found no pre-existing Tourism learner pack or alternative Tourism learner content.
- The existing dynamic loader was reused without redesign.
- Tourism is registered as English `Tourism`, Afrikaans `Toerisme`, isiXhosa `Ezokhenketho`.
- The launch pack contains **12 original EN/AF/XH drills**.
- DBE Tourism is treated as a **single-paper subject**, and the learner shell suppresses the shared Paper 2 option for Tourism.
- Launch coverage includes Map Work and Tour Planning, Foreign Exchange, Tourism Attractions, Cultural and Heritage Tourism, Marketing, Tourism Sectors, Sustainable and Responsible Tourism, Domestic/Regional/International Tourism, and Communication and Customer Care.
- Western Cape contexts are used where natural.

**Important limitation:** the Tourism baseline is a 12-question launch coverage pack, not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## LOCKED WESTERN CAPE PRIORITY SEQUENCE

**Geography → Economics → History → English/Afrikaans/isiXhosa Exam Skills → Tourism — COMPLETE AT CONTROLLED LAUNCH-BASELINE LEVEL**

Do not automatically expand into another subject. The next move is a controlled launch-readiness reassessment.

## LAUNCH REPAIR / FREEZE STATUS

- **MDE-LAUNCH-01 → 06:** Mathematics repair, multilingual/PWA baseline and freeze — **COMPLETE**.
- **MDE-LS-01 → 03:** Life Sciences launch baseline and freeze — **COMPLETE**.
- **MDE-PS-01 → 04:** Physical Sciences audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-ML-01 → 04:** Mathematical Literacy audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-ACC-01 → 04:** Accounting audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-BS-01 → 04:** Business Studies audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-GEO-01 → 04:** Geography audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-ECO-01 → 04:** Economics audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-HIS-01 → 04:** History audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-LANG-01 → 04:** English/Afrikaans/isiXhosa exam-skills audit, pack, acceptance and freeze — **COMPLETE**.
- **MDE-TOUR-01:** Tourism existing-work and engine-readiness audit — **PASS**.
- **MDE-TOUR-02:** Tourism selector + 12-question EN/AF/XH single-paper launch pack — **PASS**.
- **MDE-TOUR-03:** Learner / production / single-paper / offline acceptance — **PASS**.
- **MDE-TOUR-04:** Tourism launch-baseline freeze — **COMPLETE**.

## PHASE 2 — EDUCATIONAL IMPACT EXPANSION

**Decision:** Depth before breadth. Tier 3 technical subjects and Tier 4B specialist subjects remain pending while the existing launch subjects are made substantially more useful per learner.

Phase 2 is governed by the detailed programme in `01_PHASE_2_EDUCATIONAL_IMPACT_EXPANSION.md` and has six locked pillars:

1. **Curriculum Impact Matrix** — audit each existing subject against important Grade 12 curriculum and examination areas before adding content.
2. **Expanded High-Value Drill Bank** — grow the current 12–16 question packs in controlled waves, initially toward approximately 24–30 carefully chosen drills per subject rather than random volume.
3. **Weak-Spot and Exam-Survival Modes** — build on existing scoring and weak-spot persistence with Quick Drill, Exam Survival and Drill My Weak Spots paths.
4. **Curated Video Learning Link Repository** — store links and metadata only, never the videos; keep the core PWA fully useful offline and use video as an optional connected learning path.
5. **Matric Learner Support and Resilience Hub** — offline practical guidance on study methods, study planning, exam technique, ordinary exam stress, exam-day preparation and seeking appropriate support when needed.
6. **Official DBE/WCED Resource Gateway** — curated links to useful official past papers, memoranda, study guides, revision resources and examination-readiness material when connectivity is available.

### Phase 2 educational design rules

- The app remains a practical revision and diagnostic companion, not a replacement for school, teachers, textbooks, full curriculum materials or complete past-paper practice.
- New questions must close a verified educational gap identified by the Curriculum Impact Matrix.
- Memoranda may add concise `Common mistake`, `Why marks are lost`, or `Exam tip` guidance where it materially helps the learner.
- Video and external resources are supplementary; the learner must retain the core learning experience without data.
- Performance feedback must be practical and non-shaming.
- Model-generated translations remain distinct from human-reviewed language content.
- Existing frozen subjects are expanded one at a time using inspect → matrix → smallest safe increment → test → verify → re-freeze.

### Phase 2 restart checkpoint

**MDE-IMPACT-01 — Mathematics Curriculum Impact Matrix.**

First controlled action on restart: audit the existing Mathematics launch pack against the highest-value Grade 12 curriculum and examination areas, identify gaps and propose the smallest controlled expansion. Do not add new Mathematics questions until the matrix has been reviewed and accepted.

## CURRENT RISK

The Sunday launch deadline remains close. The controlled launch-priority subject wave is complete, but this does not mean every subject is fully syllabus-complete or human-certified. Scope discipline remains mandatory. Phase 2 must improve educational impact without destabilising the verified launch baseline or turning the PWA into a high-data content repository.

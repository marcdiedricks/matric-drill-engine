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
| Tier 2: Humanities | Tourism | Single-paper Grade 12 DBE topic-family launch pack, EN/AF/XH | **ACTIVE — 12-question launch pack ready for build verification** |
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

**Standing limitation for frozen launch baselines:** these are functionally launchable coverage/support packs, not claims of full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## CURRENT SUBJECT GATE — TOURISM

**Only active subject:** Tourism

Mathematics, Life Sciences, Physical Sciences, Mathematical Literacy, Accounting, Business Studies, Geography, Economics, History and the shared English/Afrikaans/isiXhosa Exam Skills layer are frozen. Any change to a frozen baseline requires a controlled correction branch, explicit test, verification and re-freeze.

Repository audit result:
- No `public/packs/tourism.json` existed in `main`.
- Repository search found no alternative Tourism learner pack.
- Tourism was not registered in the learner selector.
- The existing dynamic pack loader supports `/packs/tourism.json`, so no engine redesign is required.

Official structure check:
- DBE Grade 12 Tourism uses **one 3-hour paper of 200 marks**, divided into five compulsory sections.
- Core examinable areas include short questions across all topics; Map Work and Tour Planning; Foreign Exchange; Tourism Attractions; Cultural and Heritage Tourism; Marketing; Tourism Sectors; Sustainable and Responsible Tourism; Domestic, Regional and International Tourism; Communication and Customer Care.
- Because Tourism is a single-paper subject, the learner shell suppresses the shared `Paper 2` option while Tourism is selected.

The controlled `tourism-launch-01` branch now contains:
- Tourism selector names: English `Tourism`, Afrikaans `Toerisme`, isiXhosa `Ezokhenketho`.
- A **12-question original EN/AF/XH launch pack**, all assigned to the single Tourism paper.
- Western Cape contexts used where natural, including Cape Town and the Cape Winelands.

Launch coverage:
1. Map Work and Tour Planning — time zones and itinerary planning.
2. Foreign Exchange — basic currency conversion.
3. Tourism Attractions — wider destination impact.
4. Cultural and Heritage Tourism — conservation and responsible visitor behaviour.
5. Marketing — target-market decisions.
6. Tourism Sectors — interdependence.
7. Sustainable and Responsible Tourism — environmental, social and economic pillars.
8. Domestic, Regional and International Tourism — domestic demand and disruptive events.
9. Communication and Customer Care — complaint handling and service consistency.

### Tourism next gate
1. Run GitHub build check.
2. Merge only if build passes.
3. Learner-side test: confirm **1 / 12**.
4. Verify EN / AF / XH switching and Tourism subject names.
5. Verify the single-paper filter shows **Paper 1** and no Tourism Paper 2 option.
6. Verify topic filters, hints, memoranda and navigation.
7. Run local production build and preview.
8. Verify offline reload.
9. Freeze only after those tests pass.
10. After Tourism freeze, reassess the next expansion wave before opening another subject.

**Important limitation:** this is a 12-question launch coverage pack, not full syllabus depth, human language-quality certification, verified past-paper provenance or institutional certification.

## LOCKED WESTERN CAPE PRIORITY SEQUENCE

**Geography → Economics → History → English/Afrikaans/isiXhosa Exam Skills → Tourism**

Tourism is the final active subject in this locked launch-priority sequence. After Tourism reaches its controlled freeze gate, reassess before expansion into EGD and the technical subjects. Arts/music remain specialist post-launch expansion.

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
- **MDE-TOUR-01:** Tourism existing-work and engine-readiness audit — **PASS — no existing pack; selector registration required**.
- **MDE-TOUR-02:** Tourism selector + 12-question EN/AF/XH single-paper launch pack — **READY FOR BUILD VERIFICATION**.

## CURRENT RISK

The Sunday launch deadline remains close. Scope discipline is mandatory. Only Tourism is open now. Do not open EGD, technical subjects, arts/music or another subject until Tourism reaches its controlled freeze gate.

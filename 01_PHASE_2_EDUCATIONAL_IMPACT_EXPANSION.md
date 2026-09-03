# PHASE 2 — EDUCATIONAL IMPACT EXPANSION

**Project:** Matric Drill Engine  
**Purpose:** Deepen the usefulness of the existing launch subjects before broadening into additional subjects.  
**Primary learner:** A Grade 12 learner in South Africa, especially a learner in a low-income, marginalised or low-connectivity setting using an ordinary Android phone.  

## PHASE 2 PRINCIPLE

Phase 2 changes the strategy from **breadth first** to **depth and educational impact first**.

The current launch subjects remain frozen. Phase 2 must reuse the existing PWA, data loader, multilingual structure, offline architecture, scoring and weak-spot persistence. No engine redesign is permitted unless a verified defect or genuine educational requirement makes it necessary.

The goal is not to build a digital textbook or another large PDF repository. The goal is to make the Matric Drill Engine a practical **Matric Exam Survival Companion** that helps a learner decide what to practise, understand why marks are lost, recover weak areas, and use richer online resources when connectivity is available.

## SIX PHASE 2 PILLARS

### 1. Curriculum Impact Matrix

Before expanding a subject, create a controlled matrix that maps its important Grade 12 curriculum and examination areas against the existing drill bank.

Each topic or skill must be classified as one of:
- covered at launch-baseline level;
- insufficiently covered;
- high-priority for exam preparation;
- additional drills required;
- requires special media, diagram or formula support;
- requires language-quality review.

The matrix is the control document for new content. New questions must be added because a verified educational gap exists, not simply to increase question counts.

### 2. Expanded High-Value Drill Bank

Expand the existing 12–16 question launch packs in controlled waves rather than creating hundreds of random questions.

Initial target: approximately **24–30 carefully selected questions per subject**, followed by reassessment. Some subjects may later justify 40–60 questions if the curriculum impact matrix shows that additional depth materially improves exam preparation.

Drills should be designed across five educational layers:
- **Core Survival** — concepts the learner cannot afford not to understand;
- **Exam Essentials** — common Grade 12 examination applications;
- **Common Mistakes** — misconceptions, calculation errors and instruction-reading errors;
- **Applied Practice** — more demanding exam-style application;
- **Weak Spot Recovery** — additional questions testing the same underlying concept in a different way.

Where useful, memoranda should include a short **Common mistake**, **Why marks are lost**, or **Exam tip** note. These must stay concise and learner-friendly.

### 3. Weak-Spot and Exam-Survival Modes

Build on the scoring and weak-spot persistence already present in the engine.

Target learner modes:
- **Quick Drill** — a short session of about five questions;
- **Exam Survival** — high-priority questions drawn from the most important subject areas;
- **Drill My Weak Spots** — concentrates on topics where the learner previously struggled;
- later, if justified, time-based sessions such as **15 minutes**, **30 minutes** and **1 hour**.

The learner should not simply repeat the same failed question. Where the bank allows it, recovery should present another question testing the same concept.

### 4. Curated Video Learning Link Repository

Do **not** store videos inside the PWA. Store only curated links and small metadata records so the offline app remains lightweight.

Each useful video record should, where possible, include:
- subject;
- topic/skill;
- language;
- learning purpose such as concept explanation, worked example or exam walkthrough;
- source/provider;
- URL;
- last verification date.

The core drill experience must never depend on video connectivity. When online, the learner may use a simple action such as **Need more help? Watch a lesson online**.

Prioritise reputable South African curriculum-aligned sources, DBE/WCED or established educational providers where suitable, and strong international explanations only where the underlying concept transfers cleanly to the South African curriculum.

The repository must be curated. The learner should not be sent into an uncontrolled search experience when the app can point directly to an appropriate explanation.

### 5. Matric Learner Support and Resilience Hub

Create a small, practical, offline learner-support section. It is not a counselling service and must not become a large wellbeing textbook.

Core areas:
1. **How to study** — active practice, focused sessions, using memoranda correctly and revisiting weak areas.
2. **Make my study plan** — simple guidance for breaking subjects and available days into manageable study blocks.
3. **Exam survival** — reading instructions, understanding action verbs, budgeting time by marks, checking work and moving on when stuck.
4. **When I feel overwhelmed** — practical guidance for ordinary exam stress, including planning, breaks, sleep, movement and speaking to a trusted adult when support is needed.
5. **Exam-day checklist** — timetable, required materials, arrival, reading time, instructions and time management.
6. **I need more help** — clear encouragement to involve an appropriate trusted adult, teacher, school support person or official support service when a learner needs more than study guidance.

Essential guidance must be available offline. Where official DBE/WCED resources exist, the app may provide optional links for use when the learner has connectivity.

The learner-facing language must remain supportive and practical. Performance messages must not shame, frighten or label the learner.

### 6. Official DBE/WCED Resource Gateway

Add a curated gateway to useful official resources without copying large documents into the core PWA unless there is a clear offline need and lawful reason to do so.

Potential resource types include:
- official past examination papers and memoranda;
- DBE/WCED study guides;
- Mind the Gap material;
- examination-readiness guidance;
- official revision programmes and broadcast/online resources;
- relevant subject support material.

Links should be organised by subject and purpose. Where connectivity is required, tell the learner clearly before opening the external resource.

## CONTROLLED SUBJECT EXPANSION METHOD

For every existing subject:
1. Inspect the frozen launch pack and current engine support.
2. Build the Curriculum Impact Matrix.
3. Identify the smallest set of high-impact content gaps.
4. Add only that controlled question increment.
5. Add or tag useful video links and official resources where relevant.
6. Verify answer accuracy and language fields.
7. Test learner flow, weak-spot behaviour and mobile layout.
8. Run production build and preview.
9. Verify offline operation of the core experience.
10. Re-freeze the expanded subject baseline before moving to the next subject.

## PROPOSED PHASE 2 ORDER

Start with **Mathematics** as the first controlled Educational Impact Matrix because it already has the largest launch pack and a mature KaTeX-enabled path. Then proceed through the existing frozen subject set one subject at a time according to educational impact, exam proximity and implementation risk.

Tier 3 technical subjects and Tier 4B specialist subjects remain pending until Phase 2 launch-readiness priorities have been reassessed. This is a deliberate depth-before-breadth decision, not cancellation of those lanes.

## NON-NEGOTIABLE LIMITATIONS

Phase 2 must continue to distinguish:
- original curriculum-aligned drills from verified official past-paper questions;
- model-generated translations from human-reviewed language content;
- a launch/revision support tool from full syllabus completion;
- learner support guidance from professional counselling or medical care;
- curated external links from content hosted or controlled by this project.

## TOMORROW RESTART POINT

**PHASE 2 — MDE-IMPACT-01: Mathematics Curriculum Impact Matrix.**

First action on restart: audit the existing Mathematics launch pack against the highest-value Grade 12 curriculum and examination areas, identify coverage gaps, and propose the smallest controlled expansion. Do not add new questions until the matrix has been reviewed and accepted.

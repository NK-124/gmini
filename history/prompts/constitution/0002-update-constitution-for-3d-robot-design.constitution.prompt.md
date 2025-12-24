---
id: 0002
title: Update constitution for 3D robot design
stage: constitution
date: 2025-12-24
surface: agent
model: gemini
feature: none
branch: main
user: hp
command: /sp.constitution Design a humanoid, animation-ready 3D robot body.
Prioritize clean geometry, smooth joints, and friendly appearance.
Use matte white and silver materials with subtle cyan glow at joints.
Style must be Pixar/Blender-quality, semi-realistic, softly lit.
No weapons, no human skin, no logos, no cluttered backgrounds.
Output must be rig-friendly and production-ready.
labels: ["constitution", "refactor"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- .specify/memory/constitution.md
- .specify/templates/plan-template.md
tests:
null
---

## Prompt

/sp.constitution Design a humanoid, animation-ready 3D robot body.
Prioritize clean geometry, smooth joints, and friendly appearance.
Use matte white and silver materials with subtle cyan glow at joints.
Style must be Pixar/Blender-quality, semi-realistic, softly lit.
No weapons, no human skin, no logos, no cluttered backgrounds.
Output must be rig-friendly and production-ready.

## Response snapshot

I have updated the project constitution to version 2.0.0 to reflect the new focus on designing a 3D humanoid robot. The core principles, standards, and other sections have been updated. I have also updated the plan template to align with the new constitution.

## Outcome

- ✅ Impact: Major refactor of the project's core principles and direction.
- 🧪 Tests: N/A
- 📁 Files: Updated the constitution and the plan template.
- 🔁 Next prompts: Follow-up on the TODO for the ratification date.
- 🧠 Reflection: The user's request was a significant pivot for the project. The constitution and related templates were updated to reflect this new direction.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): None

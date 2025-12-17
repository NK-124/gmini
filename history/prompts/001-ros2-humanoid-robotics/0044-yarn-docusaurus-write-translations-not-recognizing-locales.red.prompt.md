---
id: 0044
title: yarn docusaurus write-translations Not Recognizing Locales
stage: red
date: 2025-12-16
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ros2-humanoid-robotics`
branch: `main`
user: `system`
command: `(internal) yarn docusaurus write-translations output analysis`
labels: `["bug-fix", "i18n", "docusaurus", "locale-detection", "write-translations"]`
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:

---

## Prompt

yarn docusaurus write-translations still only showing output for 'en' locale.

## Response snapshot

Identified that write-translations command is not generating files for configured non-default locales.

## Outcome

- ✅ Impact: Pinpointing issue with Docusaurus locale recognition.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: Attempt to regenerate i18n folder structure by deleting and rerunning write-translations.
- 🧠 Reflection: Docusaurus is not fully recognizing the configured locales for i18n generation, leading to dropdown population failure.

## Evaluation notes (flywheel)

- Failure modes observed: Docusaurus i18n generation not creating files for all locales.
- GRADER_RESULTS: `N/A`
- PROMPT_VARIANT_ID: `N/A`
- NEXT_EXPERIMENT: `N/A`

---
id: 0042
title: User Reports Language Dropdown Issue
stage: red
date: 2025-12-16
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ros2-humanoid-robotics`
branch: `main`
user: `user`
command: `when i click to change the language the language is not changing the button is showing only english not other language`
labels: `["bug-fix", "i18n", "docusaurus", "language-dropdown"]`
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:

---

## Prompt

when i click to change the language the language is not changing the button is showing only english not other language

## Response snapshot

Investigating Docusaurus language dropdown not showing other locales.

## Outcome

- ✅ Impact: Diagnosing issue with i18n locale detection.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: Re-verify docusaurus.config.js i18n and localeConfigs.
- 🧠 Reflection: User indicates dropdown itself is not populated with other languages, despite previous explicit localeDropdown config. This points to an earlier failure in locale detection.

## Evaluation notes (flywheel)

- Failure modes observed: Docusaurus not detecting configured locales for language dropdown.
- GRADER_RESULTS: `N/A`
- PROMPT_VARIANT_ID: `N/A`
- NEXT_EXPERIMENT: `N/A`

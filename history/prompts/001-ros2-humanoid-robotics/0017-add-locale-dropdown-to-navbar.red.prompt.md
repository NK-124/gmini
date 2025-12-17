---
id: 0017
title: Add Locale Dropdown to Navbar
stage: red
date: 2025-12-16
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ros2-humanoid-robotics
branch: main
user: system
command: (internal) Add localeDropdown to navbar.items in docusaurus.config.js
labels: ["bug-fix", "i18n", "docusaurus", "translation-dropdown"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - my-website/docusaurus.config.js
tests:

---

## Prompt

Adding locale dropdown item to Docusaurus navbar.

## Response snapshot

Added locale dropdown to navbar items in docusaurus.config.js.

## Outcome

- ✅ Impact: Ensured explicit presence of i18n language selector.
- 🧪 Tests: N/A
- 📁 Files: Modified docusaurus.config.js.
- 🔁 Next prompts: Instruct user to rebuild/restart Docusaurus server.
- 🧠 Reflection: Explicitly added localeDropdown to address user reported missing translation option.

## Evaluation notes (flywheel)

- Failure modes observed: Implicit localeDropdown behavior not working.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A

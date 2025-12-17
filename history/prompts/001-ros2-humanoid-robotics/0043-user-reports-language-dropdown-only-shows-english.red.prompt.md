---
id: 0043
title: User Reports Language Dropdown Only Shows English
stage: red
date: 2025-12-16
surface: agent
model: gemini-1.5-flash-latest
feature: 001-ros2-humanoid-robotics`
branch: `main`
user: `user`
command: `when i click other language this is the result: My book The Robotic Nervous System (ROS 2) Introduction English GitHub Page Not Found We could not find what you were looking for. Please contact the owner of the site that linked you to the original URL and let them know their link is broken. Docs Introduction Community Stack Overflow Discord Twitter More GitHub`
labels: `["bug-fix", "i18n", "docusaurus", "language-dropdown", "locale-detection"]`
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:

---

## Prompt

when i click other language this is the result: My book
The Robotic Nervous System (ROS 2)
Introduction
English
GitHub

Page Not Found
We could not find what you were looking for.

Please contact the owner of the site that linked you to the original URL and let them know their link is broken.

Docs
Introduction
Community
Stack Overflow
Discord
Twitter
More
GitHub

## Response snapshot

Diagnosed that language dropdown is not populating with configured locales.

## Outcome

- ✅ Impact: Identified critical issue with locale detection for i18n dropdown.
- 🧪 Tests: N/A
- 📁 Files: N/A
- 🔁 Next prompts: Re-examine docusaurus.config.js i18n and localeConfigs, and Docusaurus 3.x i18n documentation.
- 🧠 Reflection: The core problem is not content routing but that Docusaurus is not recognizing the configured locales for the UI.

## Evaluation notes (flywheel)

- Failure modes observed: Docusaurus not populating locale dropdown despite config.
- GRADER_RESULTS: `N/A`
- PROMPT_VARIANT_ID: `N/A`
- NEXT_EXPERIMENT: `N/A`

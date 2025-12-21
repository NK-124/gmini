---
id: 0062
title: "Clarify which container for background application"
stage: explainer
date: 2025-12-17
surface: agent
model: gemini-1.5-pro
feature: "none"
branch: "main"
user: "unknown"
command: "apply background on container"
labels: ["clarification", "css", "layout"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files: []
tests: []
---

## Prompt

apply background on container

## Response snapshot

Please clarify which "container" you are referring to, as there might be multiple elements with similar names on the page.

To help me understand, could you please:
1. Open your website in the browser.
2. Open the developer tools (usually by pressing F12 or right-clicking and selecting "Inspect").
3. Inspect the specific container element you want to add the background to.
4. Tell me the exact CSS class(es) or ID of that container.

This will help me target the correct element for the background.

## Outcome

- ✅ Impact: User is prompted for clarification to proceed with the request.
- 🧪 Tests: "null"
- 📁 Files: No files were modified.
- 🔁 Next prompts: User will provide clarification.
- 🧠 Reflection: Ambiguous requests require clarification, especially when dealing with general terms like "container" which can refer to many elements in a web page.

## Evaluation notes (flywheel)

- Failure modes observed: "null"
- Graders run and results (PASS/FAIL): "null"
- Prompt variant (if applicable): "null"
- Next experiment (smallest change to try): "null"

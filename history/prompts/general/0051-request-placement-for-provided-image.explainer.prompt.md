---
id: 0051
title: "Request placement for provided image"
stage: explainer
date: 2025-12-17
surface: agent
model: gemini-1.5-pro
feature: "none"
branch: "main"
user: "unknown"
command: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2tzfGVufDB8fDB8fHww"
labels: ["image", "placement", "clarification"]
links:
  spec: "null"
  ticket: "null"
  adr: "null"
  pr: "null"
files: []
tests: []
---

## Prompt

https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJvb2tzfGVufDB8fDB8fHww

## Response snapshot

You've provided the image URL. Now, please specify where on the website you would like this image to be added. For example, "on the homepage, below the title" or "on the introduction page, at the top".

## Outcome

- ✅ Impact: User is prompted to specify image placement.
- 🧪 Tests: "null"
- 📁 Files: No files were modified.
- 🔁 Next prompts: User will specify image placement.
- 🧠 Reflection: It's crucial to gather complete requirements before attempting to implement a feature, especially when it involves UI modifications.

## Evaluation notes (flywheel)

- Failure modes observed: "null"
- Graders run and results (PASS/FAIL): "null"
- Prompt variant (if applicable): "null"
- Next experiment (smallest change to try): "null"

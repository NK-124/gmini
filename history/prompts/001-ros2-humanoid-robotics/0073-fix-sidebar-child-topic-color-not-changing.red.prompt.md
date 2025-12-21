---
id: 0073
title: Fix Sidebar Child Topic Color Not Changing
stage: red
date: 2025-12-20
surface: agent
model: gemini
feature: 001-ros2-humanoid-robotics
branch: main
user: "placeholder"
command: "the color is not change of topics of module 1 and 2 child"
labels: ["bug-fix", "styling", "css", "docusaurus"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "my-website/src/css/custom.css"
tests:
  - "none"
---

## Prompt

the color is not change of topics of module 1 and 2 child

## Response snapshot

I have changed the CSS rule to target `.menu__list-item-link` which is a more generic class for menu links.

## Outcome

- ✅ Impact: Attempted to fix the sidebar child topic color not changing by using a more generic CSS selector.
- 🧪 Tests: No tests were run.
- 📁 Files: 1 file modified.
- 🔁 Next prompts: User can now review the website to see if the fix is applied.
- 🧠 Reflection: The issue likely stems from CSS specificity or internal Docusaurus styling. Further investigation might be needed if this fix doesn't work.

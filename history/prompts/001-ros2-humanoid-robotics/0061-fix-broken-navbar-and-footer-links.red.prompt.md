---
id: 0061
title: Fix Broken Navbar and Footer Links
stage: red
date: 2025-12-20
surface: agent
model: gemini
feature: 001-ros2-humanoid-robotics
branch: main
user: "placeholder"
command: "User reports 'Couldn't find any doc with id "intro-to-ros2"' error"
labels:
  - "bug-fix"
  - "docusaurus-config"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - "my-website/docusaurus.config.js"
tests:
  - "none"
---

## Prompt

Uncaught runtime errors:
×
ERROR
Couldn't find any doc with id "intro-to-ros2" in version "current".
Available doc ids are:
- module1/module1-intro
- module1/module1-nodes-topics-services
- module1/module1-rclpy-agents
- module1/module1-urdf
Error: Couldn't find any doc with id "intro-to-ros2" in version "current".
...

## Response snapshot

I have corrected the broken links in the `docusaurus.config.js` file. The "Introduction" links in both the navbar and the footer now point to the correct document. This should resolve the runtime error you were seeing.

## Outcome

- ✅ Impact: Fixed a critical runtime error caused by broken links in the docusaurus configuration.
- 🧪 Tests: No tests were run.
- 📁 Files: 1 file modified.
- 🔁 Next prompts: User can now restart the dev server to confirm the fix.
- 🧠 Reflection: The error message was very clear and pointed directly to the configuration file and the exact item causing the issue, making the fix straightforward.

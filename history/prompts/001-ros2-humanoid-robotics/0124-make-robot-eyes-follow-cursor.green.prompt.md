---
id: 0124
title: Make robot eyes follow cursor
stage: green
date: 2025-12-25
surface: agent
model: gemini-pro
feature: 001-ros2-humanoid-robotics
branch: main
user: system
command: when i move the cursor on the robot then the robot eyes is looking for the cursor
labels: ["interaction", "javascript"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- my-website/src/pages/index.js
tests:

---

## Prompt

when i move the cursor on the robot then the robot eyes is looking for the cursor

## Response snapshot

I have added JavaScript logic to make the robot's eyes follow the cursor when the mouse moves over the robot.

## Outcome

- ✅ Impact: The robot's eyes on the main page now track the cursor's movement.
- 🧪 Tests: No tests were run.
- 📁 Files: 1 file was modified.
- 🔁 Next prompts: User can now check the result.
- 🧠 Reflection: Used React's `useEffect` and `useRef` hooks to implement the eye-tracking feature by listening to mouse movements and updating CSS transforms.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null

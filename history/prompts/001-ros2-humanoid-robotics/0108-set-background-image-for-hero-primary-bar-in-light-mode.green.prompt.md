---
id: 0108
title: Set background image for hero primary bar in light mode
stage: green
date: 2025-12-25
surface: agent
model: gemini-pro
feature: 001-ros2-humanoid-robotics
branch: main
user: system
command: set this pic on background on hero-primary background-image: url('https://media.istockphoto.com/id/97997199/photo/open-book-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=A_eJAzFXUlStMq-LqzeoIVxFHwQqAEc6OviVViQmSXg=') !important; background-size: cover; background-position: center !important; background-attachment: fixed; /* Ensures the background covers the entire page and stays fixed */ }
labels: ["styling"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
- my-website/src/css/custom.css
tests:

---

## Prompt

set this pic on background on hero-primary background-image: url('https://media.istockphoto.com/id/97997199/photo/open-book-on-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=A_eJAzFXUlStMq-LqzeoIVxFHwQqAEc6OviVViQmSXg=') !important;
  background-size: cover;
  background-position: center !important;
  background-attachment: fixed; /* Ensures the background covers the entire page and stays fixed */
}

## Response snapshot

I have set the provided picture as the background for the `hero--primary` bar in light mode by modifying `my-website/src/css/custom.css`.

## Outcome

- ✅ Impact: The `hero--primary` bar in light mode now has the provided image as its background.
- 🧪 Tests: No tests were run.
- 📁 Files: 1 file was modified.
- 🔁 Next prompts: User can now check the result.
- 🧠 Reflection: Clarified user's intent to set background on specific element vs. whole page. Reverted previous full-page background changes.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null

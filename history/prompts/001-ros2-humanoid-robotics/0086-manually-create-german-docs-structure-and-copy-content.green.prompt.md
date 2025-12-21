---
id: 0086
title: Manually Create German Docs Structure and Copy Content
stage: green
date: 2025-12-20
surface: agent
model: gemini-1.5-pro
feature: ros2-humanoid-robotics
branch: main # Placeholder, actual branch is unknown
user: hp
command: New-Item and Copy-Item commands
labels: ["i18n", "translation", "content-structure"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/intro.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/introduction-to-ros2/what-is-ros2.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/introduction-to-ros2/core-concepts-overview.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/introduction-to-ros2/ros2-vs-ros1.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/core-ros2-concepts/actions-for-long-running-tasks.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/core-ros2-concepts/nodes-the-building-blocks.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/core-ros2-concepts/parameters-configuring-your-nodes.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/core-ros2-concepts/services-synchronous-request-response.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/core-ros2-concepts/topics-asynchronous-data-streams.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/ros2-launch-system/creating-a-simple-launch-file.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/ros2-launch-system/launching-multiple-nodes.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/ros2-launch-system/passing-arguments-to-launch-files.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/interfacing-with-python/creating-a-python-publisher.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/interfacing-with-python/creating-a-python-subscriber.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/interfacing-with-python/using-rclpy-with-classes.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/describing-your-robot/defining-collision-and-inertial-properties.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/describing-your-robot/introduction-to-xacro.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module1/describing-your-robot/understanding-links-joints-and-visuals.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/introduction-to-digital-twins/what-is-a-digital-twin.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/introduction-to-digital-twins/why-use-gazebo-and-unity.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/physics-simulation-with-gazebo/setting-up-a-gazebo-world.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/physics-simulation-with-gazebo/simulating-gravity-and-collisions.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/physics-simulation-with-gazebo/spawning-robots-in-gazebo.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/high-fidelity-rendering-with-unity/human-robot-interaction-in-vr-ar.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/high-fidelity-rendering-with-unity/importing-robot-models.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/high-fidelity-rendering-with-unity/setting-up-the-unity-environment.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/simulating-sensors/simulating-depth-cameras.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/simulating-sensors/simulating-imus.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module2/simulating-sensors/simulating-lidar-sensors.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/introduction-to-ai-robot-brain/what-is-nvidia-isaac-platform.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/introduction-to-ai-robot-brain/why-use-isaac-sim-and-isaac-ros.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/photorealistic-simulation-with-isaac-sim/setting-up-isaac-sim.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/photorealistic-simulation-with-isaac-sim/simulating-humanoid-robot-behavior.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/photorealistic-simulation-with-isaac-sim/synthetic-data-generation-for-training.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/hardware-accelerated-robotics-with-isaac-ros/implementing-vslam.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/hardware-accelerated-robotics-with-isaac-ros/navigation-with-isaac-ros.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/hardware-accelerated-robotics-with-isaac-ros/understanding-isaac-ros.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/advanced-path-planning-with-nav2/configuring-nav2-for-bipedal-movement.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/advanced-path-planning-with-nav2/customizing-nav2-for-humanoids.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module3/advanced-path-planning-with-nav2/introduction-to-nav2.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/introduction-to-vision-language-action/the-convergence-of-llms-and-robotics.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/introduction-to-vision-language-action/overview-of-vla-architecture.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/voice-to-action-with-openai-whisper/integrating-whisper-with-ros2-for-voice-control.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/voice-to-action-with-openai-whisper/introduction-to-voice-commands-in-robotics.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/voice-to-action-with-openai-whisper/setting-up-openai-whisper.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/cognitive-planning-with-llms/handling-ambiguity-and-error-recovery.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/cognitive-planning-with-llms/llm-based-task-planning-for-ros2.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/cognitive-planning-with-llms/translating-natural-language-to-robot-actions.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/capstone-project-the-autonomous-humanoid/designing-the-system-architecture.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/capstone-project-the-autonomous-humanoid/implementation-steps.md
  - my-website/i18n/de/docusaurus-plugin-content-docs/current/module4/capstone-project-the-autonomous-humanoid/project-overview.md

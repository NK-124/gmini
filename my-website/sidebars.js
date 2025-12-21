/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1',
      items: [
        {
          type: 'category',
          label: '1. Introduction to ROS 2',
          items: [
            'module1/introduction-to-ros2/what-is-ros2',
            'module1/introduction-to-ros2/core-concepts-overview',
            'module1/introduction-to-ros2/ros2-vs-ros1',
          ],
        },
        {
          type: 'category',
          label: '2. Core ROS 2 Concepts',
          items: [
            'module1/core-ros2-concepts/nodes-the-building-blocks',
            'module1/core-ros2-concepts/topics-asynchronous-data-streams',
            'module1/core-ros2-concepts/services-synchronous-request-response',
            'module1/core-ros2-concepts/actions-for-long-running-tasks',
            'module1/core-ros2-concepts/parameters-configuring-your-nodes',
          ],
        },
        {
          type: 'category',
          label: '3. The ROS 2 Launch System',
          items: [
            'module1/ros2-launch-system/creating-a-simple-launch-file',
            'module1/ros2-launch-system/launching-multiple-nodes',
            'module1/ros2-launch-system/passing-arguments-to-launch-files',
          ],
        },
        {
          type: 'category',
          label: '4. Interfacing with Python (`rclpy`)',
          items: [
            'module1/interfacing-with-python/creating-a-python-publisher',
            'module1/interfacing-with-python/creating-a-python-subscriber',
            'module1/interfacing-with-python/using-rclpy-with-classes',
          ],
        },
        {
          type: 'category',
          label: '5. Describing Your Robot (URDF)',
          items: [
            'module1/describing-your-robot/understanding-links-joints-and-visuals',
            'module1/describing-your-robot/defining-collision-and-inertial-properties',
            'module1/describing-your-robot/introduction-to-xacro',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 2',
      items: [
        {
          type: 'category',
          label: '1. Introduction to Digital Twins',
          items: [
            'module2/introduction-to-digital-twins/what-is-a-digital-twin',
            'module2/introduction-to-digital-twins/why-use-gazebo-and-unity',
          ],
        },
        {
          type: 'category',
          label: '2. Physics Simulation with Gazebo',
          items: [
            'module2/physics-simulation-with-gazebo/setting-up-a-gazebo-world',
            'module2/physics-simulation-with-gazebo/simulating-gravity-and-collisions',
            'module2/physics-simulation-with-gazebo/spawning-robots-in-gazebo',
          ],
        },
        {
          type: 'category',
          label: '3. High-Fidelity Rendering with Unity',
          items: [
            'module2/high-fidelity-rendering-with-unity/setting-up-the-unity-environment',
            'module2/high-fidelity-rendering-with-unity/importing-robot-models',
            'module2/high-fidelity-rendering-with-unity/human-robot-interaction-in-vr-ar',
          ],
        },
        {
          type: 'category',
          label: '4. Simulating Sensors',
          items: [
            'module2/simulating-sensors/simulating-lidar-sensors',
            'module2/simulating-sensors/simulating-depth-cameras',
            'module2/simulating-sensors/simulating-imus',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 3',
      items: [
        {
          type: 'category',
          label: '1. Introduction to AI-Robot Brain',
          items: [
            'module3/introduction-to-ai-robot-brain/what-is-nvidia-isaac-platform',
            'module3/introduction-to-ai-robot-brain/why-use-isaac-sim-and-isaac-ros',
          ],
        },
        {
          type: 'category',
          label: '2. Photorealistic Simulation with Isaac Sim',
          items: [
            'module3/photorealistic-simulation-with-isaac-sim/setting-up-isaac-sim',
            'module3/photorealistic-simulation-with-isaac-sim/synthetic-data-generation-for-training',
            'module3/photorealistic-simulation-with-isaac-sim/simulating-humanoid-robot-behavior',
          ],
        },
        {
          type: 'category',
          label: '3. Hardware-Accelerated Robotics with Isaac ROS',
          items: [
            'module3/hardware-accelerated-robotics-with-isaac-ros/understanding-isaac-ros',
            'module3/hardware-accelerated-robotics-with-isaac-ros/implementing-vslam',
            'module3/hardware-accelerated-robotics-with-isaac-ros/navigation-with-isaac-ros',
          ],
        },
        {
          type: 'category',
          label: '4. Advanced Path Planning with Nav2',
          items: [
            'module3/advanced-path-planning-with-nav2/introduction-to-nav2',
            'module3/advanced-path-planning-with-nav2/configuring-nav2-for-bipedal-movement',
            'module3/advanced-path-planning-with-nav2/customizing-nav2-for-humanoids',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 4',
      items: [
        {
          type: 'category',
          label: '1. Introduction to Vision-Language-Action (VLA)',
          items: [
            'module4/introduction-to-vision-language-action/the-convergence-of-llms-and-robotics',
            'module4/introduction-to-vision-language-action/overview-of-vla-architecture',
          ],
        },
        {
          type: 'category',
          label: '2. Voice-to-Action with OpenAI Whisper',
          items: [
            'module4/voice-to-action-with-openai-whisper/introduction-to-voice-commands-in-robotics',
            'module4/voice-to-action-with-openai-whisper/setting-up-openai-whisper',
            'module4/voice-to-action-with-openai-whisper/integrating-whisper-with-ros2-for-voice-control',
          ],
        },
        {
          type: 'category',
          label: '3. Cognitive Planning with LLMs',
          items: [
            'module4/cognitive-planning-with-llms/translating-natural-language-to-robot-actions',
            'module4/cognitive-planning-with-llms/llm-based-task-planning-for-ros2',
            'module4/cognitive-planning-with-llms/handling-ambiguity-and-error-recovery',
          ],
        },
        {
          type: 'category',
          label: '4. Capstone Project: The Autonomous Humanoid',
          items: [
            'module4/capstone-project-the-autonomous-humanoid/project-overview',
            'module4/capstone-project-the-autonomous-humanoid/designing-the-system-architecture',
            'module4/capstone-project-the-autonomous-humanoid/implementation-steps',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;

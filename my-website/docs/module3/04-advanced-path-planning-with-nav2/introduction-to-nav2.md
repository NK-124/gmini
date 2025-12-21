---
sidebar_position: 1
---

# Introduction to Nav2

**Nav2 (Navigation2)** is the ROS 2 navigation framework, a successor to the highly popular ROS 1 navigation stack. It provides a flexible and modular system for autonomous navigation, allowing a robot to move from a start point to a goal point while avoiding obstacles and adhering to various constraints. For our humanoid robot, Nav2 will be the core component of its path planning and locomotion system.

## The Nav2 Stack: A Modular Design

Nav2 is designed with a behavior tree-based state machine, offering greater flexibility and robustness compared to its ROS 1 predecessor. Its architecture typically includes:

*   **Behavior Tree (BT) Navigator:** The central orchestrator that defines the robot's high-level navigation logic, such as `DrivePath`, `FollowPath`, `Spin`, `Wait`, etc. It allows for easy customization of navigation behaviors.
*   **Costmaps:** 2D grid maps that represent the environment. They are used by planners and controllers to identify free space, obstacles, and areas of varying traversability (costs). Nav2 uses both a global costmap (for long-term planning) and a local costmap (for immediate obstacle avoidance).
*   **Planners (Global & Local):**
    *   **Global Planner:** Generates an optimal path from the robot's current position to the goal, considering the global costmap. Examples include A*, Dijkstra, Theta*.
    *   **Local Planner (Controller):** Takes the global path and generates velocity commands for the robot to follow the path while avoiding dynamic obstacles and operating within the robot's kinematic/dynamic limits. Examples include DWB (Dynamic Window Bouncing), TEB (Timed Elastic Band).
*   **Recoveries:** Strategies to recover from navigation failures (e.g., global localization failure, clearing local costmap when stuck).
*   **Waypoints Follower:** Allows the robot to navigate through a series of predefined waypoints.

## Key Advantages of Nav2

*   **ROS 2 Native:** Built from the ground up for ROS 2, leveraging DDS for improved performance, security, and real-time capabilities.
*   **Modular and Extensible:** Easy to swap out individual components (planners, controllers, recoveries) to suit specific robot needs and environments.
*   **Behavior Trees:** Offers a powerful way to define and visualize complex navigation logic.
*   **Active Development:** A vibrant community and active development ensure continuous improvements and new features.

## Nav2 for Humanoid Robotics

While Nav2 is typically used with wheeled robots, its modularity makes it adaptable for bipedal humanoids. The challenge lies in configuring and customizing its components to account for the unique kinematics, dynamics, and locomotion capabilities of a walking robot. This often involves specialized controllers and state estimators.

In the following sections, we will delve into how to configure Nav2 for humanoid movement and explore customization options.

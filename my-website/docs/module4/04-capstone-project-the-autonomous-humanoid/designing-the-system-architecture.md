---
sidebar_position: 2
---

# Designing the System Architecture

The Capstone Project requires integrating various sophisticated components into a cohesive system. A well-designed architecture is crucial for managing complexity, ensuring modularity, and enabling efficient communication between different parts of the Vision-Language-Action (VLA) pipeline. This section outlines a high-level ROS 2-centric system architecture for our autonomous humanoid.

## High-Level ROS 2 Graph

Our VLA system will primarily operate as a distributed network of ROS 2 nodes, communicating via topics, services, and actions.

```mermaid
graph TD
    subgraph Human Interface
        A[Microphone] -- Audio Stream --> B(Whisper ASR Node)
        B -- Transcribed Text --> C(LLM Planner Node)
        C -- Text-to-Speech --> D[Speaker]
    end

    subgraph Cognitive Layer (LLM Planner Node)
        C -- High-level Goal --> E(Task Decomposer)
        E -- Sub-goals & Context --> F(Action Generator)
        F -- ROS 2 Actions --> G{ROS 2 Action Client / Service Client}
        G --> H(Robot Execution Layer)
        H --> F -- Feedback -->
        G -- Perception Query --> J(Perception Node)
        J -- Environment State --> F
    end

    subgraph Robot Execution Layer
        H -- Navigation Goals --> K(Nav2 Stack)
        K -- Velocity Commands --> L(Robot Base Controller)
        H -- Manipulation Goals --> M(MoveIt 2 / Manipulation Controller)
        M -- Joint Commands --> L
        L -- Joint States --> J
    end

    subgraph Perception Layer
        N[Cameras/LiDAR/IMU] -- Sensor Data --> J(Perception Node)
        J -- Object Poses / Map --> F
        J -- Self-Localization --> K
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style D fill:#f9f,stroke:#333,stroke-width:2px
    style N fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#bbf,stroke:#333,stroke-width:2px
    style C fill:#bbf,stroke:#333,stroke-width:2px
    style E fill:#bbf,stroke:#333,stroke-width:2px
    style F fill:#bbf,stroke:#333,stroke-width:2px
    style G fill:#bbf,stroke:#333,stroke-width:2px
    style H fill:#bbf,stroke:#333,stroke-width:2px
    style J fill:#bbf,stroke:#333,stroke-width:2px
    style K fill:#bbf,stroke:#333,stroke-width:2px
    style L fill:#bbf,stroke:#333,stroke-width:2px
    style M fill:#bbf,stroke:#333,stroke-width:2px
```

## Key Architectural Components and Their Interactions

1.  **Whisper ASR Node:**
    *   **Input:** Audio stream from a microphone.
    *   **Output:** Transcribed text (`std_msgs/String`) published to `/voice_commands`.
    *   **Role:** Converts human speech into a machine-readable text format.

2.  **Perception Node(s):**
    *   **Input:** Raw sensor data (camera images, LiDAR scans, IMU data) from simulated sensors (Gazebo/Isaac Sim).
    *   **Output:**
        *   Object poses (`geometry_msgs/PoseStamped`) published to `/detected_objects`.
        *   Environment map updates (e.g., occupancy grid) for Nav2.
        *   Robot's self-localization (`nav_msgs/Odometry` or VSLAM pose) for Nav2.
    *   **Role:** Uses computer vision (potentially Isaac ROS accelerated) to identify objects, understand the scene, and determine robot's position.

3.  **LLM Planner Node:** (The central intelligence of the system)
    *   **Input:**
        *   `/voice_commands` topic (transcribed text).
        *   `/detected_objects` topic (from Perception Node).
        *   Internal knowledge about robot capabilities (API definitions) and environment semantics.
    *   **Output:**
        *   ROS 2 Action Goals (e.g., `NavigateToPose.action` for Nav2).
        *   ROS 2 Service Requests (e.g., for simple gripper commands).
        *   Text for text-to-speech (for clarification or feedback).
    *   **Role:** Uses an LLM to interpret natural language, decompose tasks, generate plans, and translate them into ROS 2 executable commands. Manages the high-level state of the task and handles error recovery.

4.  **Nav2 Stack:**
    *   **Input:** Navigation goals (e.g., `NavigateToPose.action`) from the LLM Planner Node, robot pose from Perception Node, environment map.
    *   **Output:** Velocity commands or footstep plans for the Robot Base Controller.
    *   **Role:** Performs global and local path planning, obstacle avoidance, and localization for the humanoid.

5.  **MoveIt 2 / Manipulation Controller:**
    *   **Input:** Manipulation goals (e.g., `Pick.action`, `Place.action`) from the LLM Planner Node, object poses from Perception Node.
    *   **Output:** Joint commands for the Robot Base Controller.
    *   **Role:** Plans and executes grasping and manipulation tasks, considering robot kinematics and collision avoidance.

6.  **Robot Base Controller:**
    *   **Input:** Velocity commands from Nav2, joint commands from MoveIt 2.
    *   **Output:** Low-level commands to the simulated robot's actuators (e.g., joint torques or positions).
    *   **Role:** Executes the physical movements of the humanoid robot.

This modular design allows for independent development and testing of each component, while the ROS 2 communication framework facilitates their seamless integration.

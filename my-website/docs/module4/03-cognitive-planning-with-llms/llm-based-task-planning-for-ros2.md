---
sidebar_position: 2
---

# LLM-based Task Planning for ROS 2

Integrating Large Language Models (LLMs) into a ROS 2 system for task planning involves creating a bridge that allows the LLM to receive natural language commands, access robot capabilities, and generate ROS 2-compatible action sequences. This forms the "cognitive planning" core of our AI-Robot Brain.

## Architecture Overview

A common architecture for LLM-based task planning in ROS 2 involves:

1.  **Voice Command Input:** A ROS 2 node (e.g., our Whisper node) publishes transcribed natural language commands to a ROS 2 topic (e.g., `/voice_commands`).
2.  **LLM Planner Node:** A dedicated ROS 2 Python node that:
    *   Subscribes to `/voice_commands`.
    *   Queries the LLM with the command and relevant robot/environment context.
    *   Receives a structured action plan from the LLM.
    *   Parses the action plan into ROS 2 action goals, service requests, or topic messages.
    *   Publishes these ROS 2 commands to the robot's execution layer.
3.  **Robot Execution Layer:** Other ROS 2 nodes (e.g., Nav2, MoveIt 2, custom control nodes) receive and execute these commands.
4.  **Perception and State Monitoring:** Sensor nodes continuously update the robot's understanding of the environment, which can be fed back to the LLM Planner node.

## Designing the LLM Planner Node

The LLM Planner node is a critical component. Here's how it would function:

*   **ROS 2 Node Setup:** Inherits from `rclpy.Node`.
*   **Command Subscription:** Creates a subscriber for `/voice_commands` (String messages).
*   **LLM API Integration:** Makes API calls to a hosted LLM (e.g., OpenAI API, a local LLM server).
*   **Robot API Description:** The LLM needs to know what the robot *can do*. This is provided in the prompt as a list of "tools" or "functions" the robot has access to.
    *   Example: `navigate_to(location_name: str)`, `pick_up_object(object_id: str)`, `find_object(object_type: str) -> object_id`.
*   **Environment State:** The current state of the world is crucial for the LLM to make informed decisions. This includes:
    *   Known objects and their locations (from perception).
    *   Robot's current position.
    *   Task-specific information (e.g., "Is the room clean?").
    *   This context is dynamically inserted into the LLM's prompt.
*   **Output Parsing:** The LLM's response (e.g., a JSON string of actions) needs to be parsed by the node.
*   **ROS 2 Command Generation:** For each parsed action, the node translates it into a corresponding ROS 2 command:
    *   **Action Goals:** For long-running tasks like navigation (e.g., publishing a `NavigateToPose.Goal` to Nav2).
    *   **Service Requests:** For instantaneous commands (e.g., calling a service to toggle a gripper).
    *   **Topic Messages:** For simple, one-way commands (e.g., publishing a joint velocity).

## Example Prompt Structure for LLM (in the Planner Node)

```
"You are a helpful humanoid robot. Your goal is to execute human commands.
Here are the tools you can use:
- navigate_to(location: str): Move to a named location.
- pick_up(object_name: str): Pick up an object.
- place_object(location: str): Place an object down.
- find_object(object_type: str) -> object_id: Find an object of a given type and return its ID.

Current environment:
- Robot is at: 'kitchen_counter'
- Objects visible: {'cup': 'cup_id_1', 'apple': 'apple_id_2'}

Human command: '{human_command_from_ros_topic}'

Please provide a JSON list of actions to achieve the human command. Ensure the actions are valid.
If you need more information, respond with 'Need more info: [question]'
"
```

The LLM Planner node then dynamically generates the full prompt, sends it to the LLM, and processes the response. This allows the robot to "think" and plan its actions based on natural language.

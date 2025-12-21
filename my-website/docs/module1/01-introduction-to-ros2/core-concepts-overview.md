---
sidebar_position: 2
---

# Core Concepts Overview

Before we dive deeper, let's get a high-level overview of the key concepts in ROS 2 that you will encounter throughout this book.

*   **Nodes:** A node is an entity that uses ROS to communicate with other nodes. You can think of a node as a small, single-purpose program within your robotic system. For example, you might have one node for controlling the wheel motors, another for reading laser scan data, and a third for planning a path.

*   **Topics:** Topics are named buses over which nodes exchange messages. A node can *publish* messages to a topic, and any node that *subscribes* to that topic will receive those messages. This is a one-to-many communication mechanism.

*   **Services:** Services are a request/response form of communication. One node acts as a *server* that provides a service, and another node acts as a *client* that calls that service. This is useful for tasks that have a clear beginning and end.

*   **Actions:** Actions are similar to services, but they are designed for long-running tasks. They provide feedback during execution and are cancellable. For example, an action could be used to navigate the robot to a specific location.

*   **Parameters:** Parameters are configurable values that can be set for a node. They allow you to change the behavior of a node without having to recompile the code.

*   **Launch Files:** Launch files are scripts that allow you to start up and configure a collection of nodes. This is essential for managing complex robotic systems.

We will explore each of these concepts in detail in the upcoming sections.

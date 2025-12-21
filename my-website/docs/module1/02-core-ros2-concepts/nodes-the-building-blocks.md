---
sidebar_position: 1
---

# Nodes: The Building Blocks

In ROS 2, a **node** is the fundamental unit of execution. You can think of a node as a small, independent program that performs a specific task. For example, in a humanoid robot, you might have:

*   A **camera node** that captures images from the robot's eyes.
*   A **motor controller node** that controls the movement of the robot's joints.
*   A **navigation node** that plans a path for the robot to follow.
*   A **speech synthesis node** that allows the robot to speak.

Each of these nodes can be written, compiled, and run independently of the others. This modular approach makes it easy to build complex robotic systems by combining smaller, reusable components.

## Creating a Node

To create a node, you need to use the ROS 2 client library for your chosen programming language. For Python, this is `rclpy`. For C++, it's `rclcpp`.

Here's a simple example of how to create a node in Python:

```python
import rclpy
from rclpy.node import Node

def main(args=None):
    rclpy.init(args=args)
    node = Node('my_first_node')
    node.get_logger().info('Hello, ROS 2!')
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

In this example, we initialize the ROS 2 client library, create a new node named `my_first_node`, print a message to the console, and then spin the node to keep it running.

Nodes are the foundation of any ROS 2 application. In the following sections, we will see how nodes can communicate with each other to create powerful and flexible robotic systems.

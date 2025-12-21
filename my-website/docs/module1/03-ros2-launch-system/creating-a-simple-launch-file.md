---
sidebar_position: 1
---

# Creating a Simple Launch File

As your robotic systems grow in complexity, you will find that you need to run multiple nodes at the same time. You could do this by opening a new terminal for each node, but this quickly becomes tedious and error-prone.

A much better approach is to use the **ROS 2 launch system**. The launch system allows you to create a **launch file** that describes a collection of nodes to be run, along with their configurations.

## Python Launch Files

In ROS 2, launch files are written in Python. This gives you the full power and flexibility of a real programming language to create your launch descriptions.

Here's an example of a simple launch file that starts a single node:

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_package',
            executable='my_node',
            name='my_node'
        )
    ])
```

In this example, we create a `LaunchDescription` object and add a `Node` action to it. The `Node` action takes the package name, the executable name, and the desired name for the node as arguments.

## Running a Launch File

To run a launch file, you use the `ros2 launch` command:

```bash
ros2 launch my_package my_launch_file.py
```

This will execute the Python script, which will in turn start up all the nodes defined in the launch description.

Launch files are an essential tool for managing complex ROS 2 systems. In the next sections, we will see how to use them to launch multiple nodes and pass arguments to them.

---
sidebar_position: 2
---

# Launching Multiple Nodes

The real power of the ROS 2 launch system comes from its ability to launch and manage multiple nodes at once. This is essential for any non-trivial robotic system.

To launch multiple nodes, you simply add multiple `Node` actions to your `LaunchDescription` object.

Here's an example of a launch file that starts two nodes: a publisher and a subscriber.

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_package',
            executable='my_publisher_node',
            name='my_publisher'
        ),
        Node(
            package='my_package',
            executable='my_subscriber_node',
            name='my_subscriber'
        )
    ])
```

When you run this launch file, ROS 2 will start both the `my_publisher_node` and the `my_subscriber_node` at the same time.

## Remapping Topics

Sometimes, you might want to change the topic that a node publishes or subscribes to without modifying the source code. You can do this using **remapping** in your launch file.

Here's an example of how to remap the `my_topic` topic to `new_topic` for the subscriber node:

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_package',
            executable='my_publisher_node',
            name='my_publisher'
        ),
        Node(
            package='my_package',
            executable='my_subscriber_node',
            name='my_subscriber',
            remappings=[
                ('my_topic', 'new_topic')
            ]
        )
    ])
```

Now, the subscriber will listen for messages on the `new_topic` topic instead of `my_topic`. This is a very powerful feature for creating flexible and reusable robotic systems.

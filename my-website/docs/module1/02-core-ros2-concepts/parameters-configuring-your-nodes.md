---
sidebar_position: 5
---

# Parameters: Configuring Your Nodes

When you are developing a robotic application, you often need to adjust certain values to tune the behavior of your nodes. For example, you might want to change the speed of your robot, the sensitivity of a sensor, or the color of an object to detect.

You could hardcode these values into your source code, but this would require you to recompile your code every time you want to make a change. A much better approach is to use **parameters**.

Parameters are configurable values that can be set for a node at runtime. They allow you to change the behavior of a node without having to modify the source code.

## Declaring and Using Parameters

To use parameters in your node, you first need to declare them. This is typically done in the constructor of your node class.

Here's an example of how to declare and use a parameter in Python:

```python
import rclpy
from rclpy.node import Node

class MyNode(Node):
    def __init__(self):
        super().__init__('my_node')
        self.declare_parameter('my_parameter', 'default_value')
        my_param = self.get_parameter('my_parameter').get_parameter_value().string_value
        self.get_logger().info('My parameter is: %s' % my_param)
```

## Setting Parameters

You can set parameters in several ways:

*   **From the command line:** You can use the `ros2 param set` command to set a parameter for a running node.

    ```bash
    ros2 param set /my_node my_parameter "new_value"
    ```

*   **From a launch file:** You can set parameters for a node when you launch it using a launch file.

    ```python
    from launch import LaunchDescription
    from launch_ros.actions import Node

    def generate_launch_description():
        return LaunchDescription([
            Node(
                package='my_package',
                executable='my_node',
                name='my_node',
                parameters=[{'my_parameter': 'new_value'}]
            )
        ])
    ```

*   **From a YAML file:** You can also store your parameters in a YAML file and load them in your launch file.

    ```yaml
    my_node:
      ros__parameters:
        my_parameter: "new_value"
    ```

Parameters are an essential tool for creating flexible and configurable robotic applications.

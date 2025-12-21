---
sidebar_position: 3
---

# Passing Arguments to Launch Files

As your launch files become more complex, you might find that you want to be able to change certain values without having to edit the file directly. For example, you might want to change the name of a topic, the value of a parameter, or the name of a node to launch.

You can do this by using **launch arguments**. Launch arguments allow you to pass values to your launch file from the command line.

## Declaring a Launch Argument

To use a launch argument, you first need to declare it in your launch file using the `DeclareLaunchArgument` action.

Here's an example of how to declare a launch argument named `my_argument` with a default value of `default_value`:

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    my_argument_launch_arg = DeclareLaunchArgument(
        'my_argument',
        default_value='default_value'
    )
    
    return LaunchDescription([
        my_argument_launch_arg,
        Node(
            package='my_package',
            executable='my_node',
            name='my_node',
            parameters=[{'my_parameter': LaunchConfiguration('my_argument')}]
        )
    ])
```

In this example, we declare a launch argument named `my_argument`. We then use the `LaunchConfiguration` substitution to get the value of the argument and pass it as a parameter to our node.

## Passing an Argument from the Command Line

To pass a value for the launch argument from the command line, you use the `argument_name:=value` syntax:

```bash
ros2 launch my_package my_launch_file.py my_argument:="new_value"
```

This will override the default value of the launch argument and set it to `new_value`.

Launch arguments are a powerful tool for creating flexible and reusable launch files.

---
sidebar_position: 3
---

# Spawning Robots in Gazebo

Once you have created your world, the next step is to add your robot to it. This is done by **spawning** your robot model into the Gazebo simulation.

## Spawning a URDF Model

To spawn a robot from a URDF file, you can use the `spawn_entity.py` script that comes with the `gazebo_ros` package.

Here's an example of how to spawn a robot named `my_robot` from a URDF file named `my_robot.urdf`:

```bash
ros2 run gazebo_ros spawn_entity.py -entity my_robot -file /path/to/my_robot.urdf
```

This will read the URDF file, convert it into a Gazebo-compatible SDF model, and then add it to the simulation.

You can also specify the initial position and orientation of the robot using the `-x`, `-y`, `-z`, `-R`, `-P`, and `-Y` arguments.

## Spawning from a Launch File

A more convenient way to spawn your robot is to do it from a launch file. This allows you to automate the process and ensure that your robot is always spawned with the correct configuration.

Here's an example of a launch file that starts Gazebo and spawns a robot:

```python
from launch import LaunchDescription
from launch.actions import ExecuteProcess
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        # Start Gazebo
        ExecuteProcess(
            cmd=['gazebo', '--verbose', '-s', 'libgazebo_ros_init.so', '-s', 'libgazebo_ros_factory.so'],
            output='screen'
        ),

        # Spawn the robot
        Node(
            package='gazebo_ros',
            executable='spawn_entity.py',
            arguments=['-entity', 'my_robot', '-file', '/path/to/my_robot.urdf'],
            output='screen'
        )
    ])
```

In this example, we use the `ExecuteProcess` action to start the Gazebo server and the `Node` action to run the `spawn_entity.py` script.

By spawning your robot from a launch file, you can easily create complex scenarios with multiple robots and objects, and you can ensure that your simulation is always started in a consistent state.

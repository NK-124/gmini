---
sidebar_position: 1
---

# Setting up a Gazebo World

Before you can start simulating your robot, you need to create a **world** for it to live in. In Gazebo, a world is defined in a `.world` file, which is an XML file that contains all the elements of your simulation, including robots, lights, sensors, and static objects.

## The World File

Here's an example of a simple Gazebo world file:

```xml
<?xml version="1.0" ?>
<sdf version="1.6">
  <world name="default">
    <!-- A global light source -->
    <include>
      <uri>model://sun</uri>
    </include>

    <!-- A ground plane -->
    <include>
      <uri>model://ground_plane</uri>
    </include>
  </world>
</sdf>
```

In this example, we create a simple world with a sun and a ground plane. The `<include>` tag allows us to reuse existing models from the Gazebo model database.

## Creating Your Own World

You can also create your own custom worlds by adding more elements to the world file. For example, you can add simple shapes like boxes, spheres, and cylinders:

```xml
<world name="default">
  ...
  <model name="my_box">
    <pose>0 0 0.5 0 0 0</pose>
    <link name="link">
      <collision name="collision">
        <geometry>
          <box>
            <size>1 1 1</size>
          </box>
        </geometry>
      </collision>
      <visual name="visual">
        <geometry>
          <box>
            <size>1 1 1</size>
          </box>
        </geometry>
      </visual>
    </link>
  </model>
  ...
</world>
```

You can also create more complex environments by combining multiple models and using different materials and textures.

## Launching a World

To launch a Gazebo world, you can use the `ros2 launch` command with the `gazebo_ros` package.

```bash
ros2 launch gazebo_ros gazebo.launch.py world:=/path/to/my_world.world
```

This will start the Gazebo simulator and load your custom world.

Creating a realistic and interesting world is an important step in creating a meaningful simulation of your robot.

---
sidebar_position: 3
---

# Introduction to Xacro

As your robots become more complex, your URDF files can become very large and difficult to maintain. Imagine having to define every link and joint for a humanoid robot with dozens of degrees of freedom!

To make this process easier, ROS provides a tool called **Xacro** (XML Macros). Xacro allows you to create more readable and reusable URDF files by using macros, variables, and mathematical expressions.

## Variables

You can define variables to store frequently used values, such as link lengths and radii.

```xml
<xacro:property name="wheel_radius" value="0.1" />

<link name="wheel">
  <visual>
    <geometry>
      <cylinder radius="${wheel_radius}" length="0.05" />
    </geometry>
  </visual>
</link>
```

## Macros

You can create macros to define reusable components, such as a wheel or a leg.

```xml
<xacro:macro name="my_wheel" params="prefix">
  <link name="${prefix}_wheel">
    <visual>
      <geometry>
        <cylinder radius="0.1" length="0.05" />
      </geometry>
    </visual>
  </link>
</xacro:macro>

<xacro:my_wheel prefix="left" />
<xacro:my_wheel prefix="right" />
```

This will generate two links: `left_wheel` and `right_wheel`.

## Mathematical Expressions

You can use mathematical expressions to calculate values within your URDF file.

```xml
<xacro:property name="wheel_radius" value="0.1" />
<xacro:property name="wheel_circumference" value="${2 * 3.14159 * wheel_radius}" />
```

## Using Xacro

To use Xacro, you need to change the file extension of your URDF file from `.urdf` to `.xacro` or `.urdf.xacro`. You also need to add the following line to the top of your file:

```xml
<?xml version="1.0"?>
<robot xmlns:xacro="http://www.ros.org/wiki/xacro" name="my_robot">
  ...
</robot>
```

When you launch your robot, ROS will automatically process the Xacro file and convert it into a standard URDF file.

Xacro is an essential tool for creating complex and maintainable robot descriptions in ROS.

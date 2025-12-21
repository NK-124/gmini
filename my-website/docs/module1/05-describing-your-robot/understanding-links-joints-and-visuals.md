---
sidebar_position: 1
---

# Understanding Links, Joints, and Visuals

To work with a robot in ROS 2, you first need to describe its physical structure. The standard way to do this is by using the **Unified Robot Description Format (URDF)**.

A URDF file is an XML file that describes the links, joints, and visuals of your robot.

## Links

A **link** is a rigid part of your robot. For a humanoid robot, you would have links for the torso, head, arms, legs, hands, and feet.

Here's an example of a simple link definition:

```xml
<link name="my_link">
  <visual>
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </visual>
</link>
```

In this example, we define a link named `my_link` and give it a visual representation of a 1x1x1 meter box.

## Joints

A **joint** connects two links together and defines how they can move relative to each other. There are several types of joints, but the most common are:

*   **`revolute`:** A rotating joint, like an elbow or a knee.
*   **`prismatic`:** A sliding joint, like a piston.
*   **`fixed`:** A joint that does not allow any movement.

Here's an example of a revolute joint that connects `link1` to `link2`:

```xml
<joint name="my_joint" type="revolute">
  <parent link="link1"/>
  <child link="link2"/>
  <origin xyz="0 0 1"/>
  <axis xyz="0 1 0"/>
  <limit lower="-1.57" upper="1.57" effort="10" velocity="1"/>
</joint>
```

In this example, we define a joint named `my_joint` that connects `link1` (the parent) to `link2` (the child). The `origin` tag specifies the position and orientation of the joint relative to the parent link. The `axis` tag specifies the axis of rotation. The `limit` tag specifies the joint limits.

## Visuals

The **visual** element of a link describes what the link looks like. You can use simple geometric shapes like boxes, cylinders, and spheres, or you can use a 3D mesh file (e.g., `.dae`, `.stl`).

Here's an example of a link with a mesh visual:

```xml
<link name="my_link">
  <visual>
    <geometry>
      <mesh filename="package://my_package/meshes/my_link.dae" />
    </geometry>
  </visual>
</link>
```

By combining links, joints, and visuals, you can create a complete description of your robot's structure.

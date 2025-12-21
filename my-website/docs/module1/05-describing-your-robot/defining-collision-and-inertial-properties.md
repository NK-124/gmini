---
sidebar_position: 2
---

# Defining Collision and Inertial Properties

In addition to the visual representation of your robot, you also need to define its physical properties. This is important for simulation, collision detection, and dynamic calculations.

## Collision Properties

The **collision** element of a link defines the geometry of the link that is used for collision detection. This is often a simpler shape than the visual geometry, as this can improve performance.

Here's an example of a link with both a visual and a collision element:

```xml
<link name="my_link">
  <visual>
    <geometry>
      <mesh filename="package://my_package/meshes/my_link.dae" />
    </geometry>
  </visual>
  <collision>
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </collision>
</link>
```

In this example, the visual representation is a complex mesh, but the collision geometry is a simple box. This is a common practice to speed up collision checking in simulations.

## Inertial Properties

The **inertial** element of a link defines the mass and inertia of the link. This is essential for accurate physics simulation.

The inertial element has three sub-elements:

*   **`mass`:** The mass of the link in kilograms.
*   **`origin`:** The position and orientation of the center of mass relative to the link's origin.
*   **`inertia`:** The 3x3 rotational inertia matrix.

Here's an example of a complete link definition with visual, collision, and inertial properties:

```xml
<link name="my_link">
  <visual>
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </visual>
  <collision>
    <geometry>
      <box size="1 1 1" />
    </geometry>
  </collision>
  <inertial>
    <mass value="1" />
    <origin xyz="0 0 0.5" rpy="0 0 0"/>
    <inertia ixx="0.083" ixy="0.0" ixz="0.0" iyy="0.083" iyz="0.0" izz="0.083" />
  </inertial>
</link>
```

Accurately defining the collision and inertial properties of your robot is crucial for creating realistic simulations and for performing advanced tasks like manipulation and locomotion.

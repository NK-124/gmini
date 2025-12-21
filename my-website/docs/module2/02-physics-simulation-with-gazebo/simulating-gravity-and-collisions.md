---
sidebar_position: 2
---

# Simulating Gravity and Collisions

One of the key features of Gazebo is its ability to simulate realistic physics. This includes gravity, which pulls objects down, and collisions, which prevent objects from passing through each other.

## Gravity

Gravity is defined in the `<physics>` element of your world file. You can set the strength and direction of the gravity vector.

Here's an example of how to set the gravity to be the same as on Earth:

```xml
<world name="default">
  <physics type="ode">
    <gravity>0 0 -9.81</gravity>
  </physics>
  ...
</world>
```

The `type="ode"` attribute specifies that we are using the Open Dynamics Engine for physics simulation. The `<gravity>` tag sets the gravity vector to be -9.81 m/s^2 in the z-direction.

## Collisions

Collisions are handled automatically by Gazebo based on the `<collision>` elements of your models. When two objects collide, Gazebo will calculate the forces and torques that they exert on each other and update their velocities accordingly.

The behavior of a collision depends on the physical properties of the colliding surfaces, which are defined in the `<surface>` element of the collision geometry.

Here's an example of how to define the friction and restitution (bounciness) of a surface:

```xml
<collision name="collision">
  <geometry>
    <box>
      <size>1 1 1</size>
    </box>
  </geometry>
  <surface>
    <friction>
      <ode>
        <mu>0.8</mu>
        <mu2>0.8</mu2>
      </ode>
    </friction>
    <contact>
      <ode>
        <kp>1e+13</kp>
        <kd>1</kd>
      </ode>
    </contact>
  </surface>
</collision>
```

In this example, we set the friction coefficients (`mu` and `mu2`) and the contact stiffness and damping (`kp` and `kd`). These values will affect how the object behaves when it collides with other objects.

By carefully tuning the physics and collision properties of your world and models, you can create a highly realistic simulation of your robot's environment.

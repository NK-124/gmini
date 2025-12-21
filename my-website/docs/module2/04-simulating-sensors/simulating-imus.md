---
sidebar_position: 3
---

# Simulating IMUs

An **IMU** (Inertial Measurement Unit) is a sensor that measures the orientation, angular velocity, and linear acceleration of an object. It typically consists of a combination of accelerometers, gyroscopes, and magnetometers.

IMUs are essential for tasks like localization, stabilization, and motion tracking.

## Simulating IMUs in Gazebo

Gazebo provides a plugin for simulating an IMU. You can add this plugin to your robot's URDF file to generate simulated IMU data.

Here's an example of how to add an IMU to your URDF:

```xml
<gazebo reference="imu_link">
  <sensor type="imu" name="imu">
    <always_on>true</always_on>
    <update_rate>100</update_rate>
    <plugin name="imu_plugin" filename="libgazebo_ros_imu_sensor.so">
      <topicName>/imu/data</topicName>
      <frameName>imu_link</frameName>
    </plugin>
  </sensor>
</gazebo>
```

In this example, we create an `imu` sensor and set its update rate. We then add the `gazebo_ros_imu_sensor` plugin, which will publish the simulated IMU data to the `/imu/data` ROS topic.

The plugin will simulate the noise and drift that are typically present in real IMUs, which is important for developing robust localization and control algorithms.

## Simulating IMUs in Unity

The Unity Robotics Hub provides a script for simulating an IMU. You can add this script to a GameObject in your scene to generate simulated IMU data.

The script works by reading the acceleration and angular velocity of the GameObject's `Rigidbody` component and then publishing them to a ROS topic as an `Imu` message.

By simulating IMUs, you can develop and test your robot's state estimation and control algorithms in a controlled and repeatable environment.

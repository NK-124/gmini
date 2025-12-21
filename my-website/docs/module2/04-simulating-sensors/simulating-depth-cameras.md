---
sidebar_position: 2
---

# Simulating Depth Cameras

A **depth camera** is a type of camera that can measure the distance to objects in its field of view. This is done by projecting an infrared pattern onto the scene and then measuring the distortion of the pattern as it is reflected back to the camera.

Depth cameras are very useful for tasks like object recognition, gesture recognition, and 3D reconstruction.

## Simulating Depth Cameras in Gazebo

Gazebo provides a plugin for simulating a depth camera. You can add this plugin to your robot's URDF file to generate simulated depth images.

Here's an example of how to add a depth camera to your URDF:

```xml
<gazebo reference="camera_link">
  <sensor type="depth" name="depth_camera">
    <update_rate>30.0</update_rate>
    <camera name="head">
      <horizontal_fov>1.3962634</horizontal_fov>
      <image>
        <width>800</width>
        <height>800</height>
        <format>R8G8B8</format>
      </image>
      <clip>
        <near>0.02</near>
        <far>300</far>
      </clip>
    </camera>
    <plugin name="camera_controller" filename="libgazebo_ros_camera.so">
      <cameraName>depth_camera</cameraName>
      <frameName>camera_link</frameName>
      <topicName>/depth_camera/image_raw</topicName>
      <cameraInfoTopicName>/depth_camera/camera_info</cameraInfoTopicName>
    </plugin>
  </sensor>
</gazebo>
```

In this example, we create a `depth` sensor and configure its properties, such as the update rate, the field of view, and the image resolution. We then add the `gazebo_ros_camera` plugin, which will publish the simulated depth image and camera info to ROS topics.

## Simulating Depth Cameras in Unity

The Unity Robotics Hub provides a script for simulating a depth camera. You can add this script to a Camera object in your scene to generate simulated depth images.

The script works by rendering the scene from the camera's point of view with a special shader that encodes the distance to each pixel in the color of the pixel. The resulting image is then published to a ROS topic as an `Image` message.

By simulating depth cameras, you can develop and test your robot's 3D perception algorithms without needing a physical camera.

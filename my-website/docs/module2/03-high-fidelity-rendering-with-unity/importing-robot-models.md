---
sidebar_position: 2
---

# Importing Robot Models

Once you have set up your Unity project and installed the Unity Robotics Hub, the next step is to import your robot model. The Unity Robotics Hub provides a tool for importing URDF files, which makes it easy to bring your robot into the Unity environment.

## Importing a URDF

To import a URDF file, you can use the URDF importer that comes with the Unity Robotics Hub.

1.  In the Unity menu, go to `Robotics > URDF Importer`.
2.  Select your URDF file.
3.  The importer will automatically parse the URDF file and create a corresponding hierarchy of GameObjects in your scene.

The importer will also create materials for the visual elements of your robot and configure the joints.

## The Imported Robot

The imported robot will be a hierarchy of GameObjects that corresponds to the links and joints in your URdf file.

*   **Links:** Each link will be a GameObject with a `Visual` child object that contains the mesh renderer for the link.
*   **Joints:** Each joint will be a GameObject with a `ArticulationBody` component. The `ArticulationBody` component is a special type of rigidbody that is designed for robotic joints.

You can modify the properties of the imported robot in the Inspector, just like any other GameObject. For example, you can change the materials of the visual elements, adjust the joint limits, and add custom scripts.

## Connecting to ROS

To control the imported robot from ROS, you need to add a `ROS Connection` component to your scene and a `Joint Control` script to your robot.

The `ROS Connection` component establishes the connection to the ROS master. The `Joint Control` script subscribes to a ROS topic that publishes joint commands and applies them to the `ArticulationBody` components of your robot.

By importing your robot model and connecting it to ROS, you can create a high-fidelity simulation that can be controlled from your existing ROS nodes.

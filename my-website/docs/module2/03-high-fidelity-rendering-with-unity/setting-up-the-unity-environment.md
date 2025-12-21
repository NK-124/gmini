---
sidebar_position: 1
---

# Setting up the Unity Environment

Unity is a powerful game engine that we can use to create a high-fidelity digital twin of our robot and its environment. In this section, we will walk through the basic steps of setting up a Unity project for robotics simulation.

## Installing Unity

First, you need to install the Unity Hub and the Unity Editor. You can download them from the official Unity website. For this book, we will be using Unity 2021.3 (LTS).

## Creating a New Project

Once you have installed Unity, you can create a new project.

1.  Open the Unity Hub and click on the "New Project" button.
2.  Select the "3D" template.
3.  Give your project a name and choose a location to save it.
4.  Click on the "Create Project" button.

This will create a new Unity project with a default scene.

## The Unity Interface

The Unity interface can be a bit overwhelming at first, but it is very powerful and flexible. Here are the main windows that you will be using:

*   **Scene View:** This is where you will build your 3D world. You can move, rotate, and scale objects in the Scene View.
*   **Game View:** This shows you what the player will see when they run your application.
*   **Hierarchy:** This shows you a list of all the objects in your scene.
*   **Project:** This shows you all the files in your project, such as models, materials, and scripts.
*   **Inspector:** This shows you the properties of the currently selected object.

## ROS-Unity Integration

To connect our Unity simulation to ROS 2, we will be using the **Unity Robotics Hub**. This is a set of open-source packages that provide a communication layer between Unity and ROS.

You can install the Unity Robotics Hub from the Unity Asset Store or from the official GitHub repository.

Once you have installed the Unity Robotics Hub, you will be able to create C# scripts that can publish and subscribe to ROS topics, call ROS services, and more.

In the next sections, we will see how to use these tools to import our robot model and create an interactive simulation.

---
sidebar_position: 1
---

# Setting up Isaac Sim

**NVIDIA Isaac Sim** is a powerful, extensible robotics simulation platform built on NVIDIA Omniverse. It enables physically accurate, photorealistic virtual environments for developing, testing, and training AI-powered robots. Setting it up involves a few key steps to ensure you have the necessary components and configurations.

## Prerequisites

Before you begin, ensure your system meets the minimum requirements:

*   **NVIDIA GPU:** A modern NVIDIA RTX GPU (e.g., RTX 20-series, RTX 30-series, RTX 40-series, or professional GPUs like A4000/A6000) is essential. Isaac Sim leverages GPU acceleration extensively.
*   **Operating System:** Ubuntu 20.04 LTS or 22.04 LTS is officially supported for Linux installations. Windows is also supported.
*   **NVIDIA Drivers:** Install the latest NVIDIA proprietary drivers.
*   **Docker (optional but recommended):** Isaac Sim can be run as a Docker container, simplifying dependency management.

## Installation Steps (Containerized)

The recommended way to install Isaac Sim is via its Docker container, especially if you're working with multiple NVIDIA software components or want a clean, isolated environment.

1.  **Install NVIDIA Container Toolkit:** This is required for Docker to access your NVIDIA GPU. Follow the official NVIDIA Docker installation guide for your specific OS.
2.  **Pull Isaac Sim Docker Image:**
    ```bash
    docker pull nvcr.io/nvidia/isaac-sim:<VERSION>
    ```
    Replace `<VERSION>` with the desired version (e.g., `2022.2.1`). You can find available versions on NVIDIA's NGC catalog.
3.  **Run Isaac Sim Container:**
    ```bash
    ./run_container.sh # (Script usually provided by NVIDIA)
    ```
    Alternatively, a direct `docker run` command with appropriate volume mounts, network settings, and GPU access will launch it. The `run_container.sh` script handles these complexities.

## Key Features after Setup

Once Isaac Sim is running, you'll have access to:

*   **Omniverse UI:** A real-time 3D viewport where you can build scenes, import models, and interact with your simulation.
*   **Python API:** A comprehensive Python API for scripting simulations, controlling robots, generating data, and integrating with external systems like ROS.
*   **ROS 2 Bridge:** Built-in tools and extensions to seamlessly connect Isaac Sim to your ROS 2 ecosystem, allowing you to use existing ROS 2 nodes for control, perception, and navigation.

With Isaac Sim set up, you're ready to create complex scenarios, test robotic algorithms, and generate valuable synthetic data.

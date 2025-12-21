---
sidebar_position: 3
---

# ROS 2 vs. ROS 1

For those who have experience with ROS 1, it's important to understand the key differences and improvements in ROS 2. While the core concepts are similar, the underlying architecture has been completely revamped.

## Key Differences

| Feature | ROS 1 | ROS 2 |
| :--- | :--- | :--- |
| **Middleware** | Custom TCP/UDP-based system with a central Master node | Built on top of the industry-standard DDS (Data Distribution Service) |
| **Master Node** | Required for node discovery and communication setup | Not required; nodes can discover each other automatically (decentralized) |
| **Real-time** | Not designed for real-time applications | Improved real-time support due to DDS |
| **Multi-robot** | Challenging to set up multi-robot systems | Natively supports multi-robot systems |
| **Supported OS** | Primarily Linux | Linux, Windows, and macOS |
| **Python** | Python 2 | Python 3 |

## Why the Change?

The development of ROS 2 was motivated by the need for a more robust and reliable framework for production environments. The limitations of ROS 1, such as the single point of failure (the Master node) and the lack of real-time support, made it difficult to use in commercial products.

ROS 2 addresses these issues by leveraging the power of DDS and providing a more flexible and decentralized architecture. This makes it an ideal choice for building the next generation of robotic applications.

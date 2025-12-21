---
sidebar_position: 1
---

# Creating a Python Publisher

One of the most common tasks you will perform in ROS 2 is creating a node that publishes data to a topic. In this section, we will see how to do this using the `rclpy` library.

## The Code

Here's the full code for a simple publisher node in Python:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MyPublisher(Node):

    def __init__(self):
        super().__init__('my_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello, world! %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    my_publisher = MyPublisher()
    rclpy.spin(my_publisher)
    my_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Code Breakdown

1.  **`import` statements:** We import the necessary libraries: `rclpy` for ROS 2 Python support, `Node` for creating a node, and `String` for the message type we will be publishing.

2.  **`MyPublisher` class:** We create a class that inherits from `Node`. This is the recommended way to structure your ROS 2 nodes in Python.

3.  **`__init__` method:** In the constructor, we call the parent constructor, create a publisher, and create a timer.
    *   `self.create_publisher(String, 'my_topic', 10)`: This creates a publisher that publishes messages of type `String` to the `my_topic` topic. The `10` is the queue size, which is a quality of service (QoS) setting that limits the amount of queued messages if the subscriber is not receiving them fast enough.
    *   `self.create_timer(0.5, self.timer_callback)`: This creates a timer that calls the `timer_callback` method every 0.5 seconds.

4.  **`timer_callback` method:** This method is called by the timer. It creates a new `String` message, sets its `data` field, publishes the message, and logs it to the console.

5.  **`main` function:** This is the entry point of our program. It initializes `rclpy`, creates an instance of our `MyPublisher` class, spins the node to keep it running, and then shuts down `rclpy` when the node is stopped.

This simple example demonstrates the basic principles of creating a publisher in ROS 2.

---
sidebar_position: 2
---

# Topics: Asynchronous Data Streams

While nodes are the building blocks of a ROS 2 system, **topics** are the glue that holds them together. A topic is a named bus over which nodes can exchange messages. This communication is asynchronous, meaning that the sender and receiver do not need to be active at the same time.

## Publish-Subscribe Model

Topics use a **publish-subscribe** communication model. A node can **publish** messages to a topic, and any number of other nodes can **subscribe** to that topic to receive the messages.

This one-to-many communication model is very powerful and flexible. For example, a camera node can publish images to an `/image_raw` topic, and multiple other nodes can subscribe to this topic to perform different tasks:

*   An **image processing node** can subscribe to the topic to detect faces.
*   A **recording node** can subscribe to the topic to save the images to a file.
*   A **display node** can subscribe to the topic to show the images on a screen.

## Creating a Publisher and Subscriber

Here's an example of how to create a simple publisher and subscriber in Python:

**Publisher:**

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
```

**Subscriber:**

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MySubscriber(Node):
    def __init__(self):
        super().__init__('my_subscriber')
        self.subscription = self.create_subscription(
            String,
            'my_topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)
```

Topics are the most common form of communication in ROS 2, and you will be using them extensively in your robotic applications.

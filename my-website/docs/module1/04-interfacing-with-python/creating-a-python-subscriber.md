---
sidebar_position: 2
---

# Creating a Python Subscriber

Now that we have a publisher, we need a subscriber to receive the messages. In this section, we will create a simple subscriber node in Python.

## The Code

Here's the full code for a simple subscriber node:

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

def main(args=None):
    rclpy.init(args=args)
    my_subscriber = MySubscriber()
    rclpy.spin(my_subscriber)
    my_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Code Breakdown

1.  **`import` statements:** We import the same libraries as the publisher.

2.  **`MySubscriber` class:** We create a class that inherits from `Node`.

3.  **`__init__` method:** In the constructor, we call the parent constructor and create a subscription.
    *   `self.create_subscription(String, 'my_topic', self.listener_callback, 10)`: This creates a subscription that receives messages of type `String` from the `my_topic` topic. The `self.listener_callback` argument is the name of the method that will be called whenever a new message is received. The `10` is the queue size.

4.  **`listener_callback` method:** This method is called whenever a new message is received on the `my_topic` topic. It takes the message object as an argument and logs its `data` field to the console.

5.  **`main` function:** This is the same as in the publisher example. It initializes `rclpy`, creates an instance of our `MySubscriber` class, spins the node, and then shuts down.

## Running the Publisher and Subscriber

To see the publisher and subscriber in action, you will need to run them in separate terminals.

**Terminal 1:**

```bash
ros2 run my_package my_publisher_node
```

**Terminal 2:**

```bash
ros2 run my_package my_subscriber_node
```

You should see the publisher printing "Publishing: ..." and the subscriber printing "I heard: ...". This demonstrates the basic principle of publish-subscribe communication in ROS 2.

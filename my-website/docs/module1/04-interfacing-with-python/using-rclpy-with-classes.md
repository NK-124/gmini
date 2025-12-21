---
sidebar_position: 3
---

# Using `rclpy` with Classes

As you have seen in the previous examples, the recommended way to structure your ROS 2 nodes in Python is to use classes. This allows you to organize your code in a more logical and reusable way.

## Benefits of Using Classes

*   **Organization:** Classes allow you to group related data and functionality together. For example, you can store your publishers, subscribers, and timers as attributes of your class.

*   **Reusability:** You can create a base class with common functionality and then create subclasses that inherit from it. This allows you to reuse code and avoid duplication.

*   **State Management:** Classes make it easy to manage the state of your node. You can store variables as attributes of your class and access them from any of your methods.

## Example: A Node with a Publisher and a Subscriber

Here's an example of a node that has both a publisher and a subscriber, demonstrating how to use a class to manage them.

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MyNode(Node):

    def __init__(self):
        super().__init__('my_node')
        
        # Create a publisher
        self.publisher_ = self.create_publisher(String, 'output_topic', 10)
        
        # Create a subscriber
        self.subscription = self.create_subscription(
            String,
            'input_topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)
        
        # Modify the message and republish it
        new_msg = String()
        new_msg.data = 'Modified: ' + msg.data
        self.publisher_.publish(new_msg)
        self.get_logger().info('Publishing: "%s"' % new_msg.data)

def main(args=None):
    rclpy.init(args=args)
    my_node = MyNode()
    rclpy.spin(my_node)
    my_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

In this example, the `MyNode` class encapsulates both the publisher and the subscriber. The `listener_callback` method is called whenever a message is received on the `input_topic`. It then modifies the message and publishes it to the `output_topic`.

Using classes is a best practice for writing clean, maintainable, and reusable ROS 2 nodes in Python.

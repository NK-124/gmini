---
sidebar_position: 4
---

# Actions: For Long-Running Tasks

Services are great for quick, synchronous interactions, but what about tasks that take a long time to complete? For example, navigating a robot to a specific location could take several minutes. If you were to use a service for this, the client would be blocked for the entire duration of the task.

This is where **actions** come in. Actions are similar to services, but they are designed for long-running, asynchronous tasks. They provide several key features that services lack:

*   **Feedback:** The action server can provide regular feedback to the client about the progress of the task.
*   **Cancellable:** The client can request to cancel the task at any time.
*   **Asynchronous:** The client is not blocked while the task is executing.

## Defining an Action

Like services, actions are defined using a special file format. An action definition consists of three parts:

*   **Goal:** The request message sent by the client to start the action.
*   **Result:** The response message sent by the server when the action is complete.
*   **Feedback:** A message that is sent periodically by the server to provide feedback about the progress of the action.

Here's an example of an action definition file (`Fibonacci.action`):

```
int32 order
---
int32[] sequence
---
int32[] sequence
```

## Creating an Action Server and Client

Creating an action server and client is more involved than with services, but the `rclpy` library provides a convenient API to make it easier.

**Server (simplified example):**

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node
from my_interfaces.action import Fibonacci

class MyActionServer(Node):
    def __init__(self):
        super().__init__('my_action_server')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback)

    def execute_callback(self, goal_handle):
        self.get_logger().info('Executing goal...')
        # ... execute the action ...
        goal_handle.succeed()
        result = Fibonacci.Result()
        # ... set the result ...
        return result
```

**Client (simplified example):**

```python
import rclpy
from rclpy.action import ActionClient
from rclpy.node import Node
from my_interfaces.action import Fibonacci

class MyActionClient(Node):
    def __init__(self):
        super().__init__('my_action_client')
        self._action_client = ActionClient(self, Fibonacci, 'fibonacci')

    def send_goal(self, order):
        goal_msg = Fibonacci.Goal()
        goal_msg.order = order
        self._action_client.wait_for_server()
        self._send_goal_future = self._action_client.send_goal_async(goal_msg, feedback_callback=self.feedback_callback)
        self._send_goal_future.add_done_callback(self.goal_response_callback)
```

Actions are essential for building complex robotic behaviors, and you will use them for tasks like navigation, manipulation, and human-robot interaction.

--- 
sidebar_position: 3
---

# Services: Synchronous Request/Response

While topics are great for continuous data streams, sometimes you need a more direct, synchronous form of communication. This is where **services** come in.

A service is a request/response communication model. One node acts as a **server** that provides a service, and another node acts as a **client** that calls the service. The client sends a request and waits until it receives a response from the server.

This is useful for tasks that have a clear beginning and end, such as:

*   Querying the current state of a robot.
*   Requesting a specific action to be performed (e.g., "take a picture").
*   Triggering a calculation or a change in a node's behavior.

## Defining a Service

To create a service, you first need to define the service type. This consists of a request message and a response message. For example, a service to add two integers would have a request message with two integer fields and a response message with a single integer field.

Here's an example of a service definition file (`AddTwoInts.srv`):

```
int64 a
int64 b
---
int64 sum
```

## Creating a Service Server and Client

Here's an example of how to create a service server and client in Python:

**Server:**

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MyServiceServer(Node):
    def __init__(self):
        super().__init__('my_service_server')
        self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)

    def add_two_ints_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info('Incoming request\na: %d b: %d' % (request.a, request.b))
        return response
```

**Client:**

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MyServiceClient(Node):
    def __init__(self):
        super().__init__('my_service_client')
        self.client = self.create_client(AddTwoInts, 'add_two_ints')
        while not self.client.wait_for_service(timeout_sec=1.0):
            self.get_logger().info('service not available, waiting again...')
        self.req = AddTwoInts.Request()

    def send_request(self):
        self.req.a = 41
        self.req.b = 1
        self.future = self.client.call_async(self.req)
```

Services are a powerful tool for building interactive and responsive robotic systems.

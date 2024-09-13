// what is handshaking ?
//      how to secure frontend when calling rest api?
//
//     When discussing asynchronous (async) vs. synchronous (sync) APIs in the context of backend systems, the primary distinction lies in how they handle requests and responses, as well as their impact on performance and resource utilization. Here's a comparison:
//
// Synchronous API

//what is synchronous and asynchronous api

// In a synchronous API, the client sends a request to the server and waits for a response before continuing.
// The server processes the request and sends back a response before the client can proceed.
// Characteristics:

// In an asynchronous API, the client sends a request and continues with other tasks while waiting for a response.
// The server processes the request and sends a response back once it’s ready. The client is not blocked while waiting.
// Characteristics:


//The client is blocked while waiting for the server to complete the request.
// Simple Implementation: Easier to implement and understand as the request-response flow is straightforward.
//Predictable Latency: Response time is generally consistent and predictable since each request is processed one at a time.
//     Use Cases:
//
//     Suitable for scenarios where immediate feedback is required, such as user authentication or querying databases
//     with expected quick responses.
//     Examples:
//
// RESTful APIs with synchronous request-response cycles.
//     HTTP requests where the client waits for a complete response before proceeding.
//     Asynchronous API
// Definition:
//

//
// Non-Blocking: The client can continue performing other tasks while waiting for the response.
//     Complex Implementation: Typically requires additional mechanisms like callbacks, promises, or event-driven
//     programming to handle responses.
//     Scalable: Can handle more concurrent requests efficiently because clients are not blocked, leading to better
//     resource utilization.
//     Use Cases:
//
//     Ideal for tasks that may take a long time to process, such as large data processing jobs, long-running queries,
//     or operations involving external systems (e.g., payment processing).
// Examples:
//
//     Message queues (e.g., RabbitMQ, Kafka) where the client sends a message and processes it later.
//     APIs that use WebSockets for real-time communication or long-polling techniques.
//     Key Differences
// Response Handling:
//
//     Sync: The client waits for the server to complete the request and return a response.
//     Async: The client sends the request and continues processing other tasks, receiving the response later.
//     Resource Utilization:
//
//     Sync: Can be less efficient, especially under high load, because each request blocks a thread or process.
//     Async: Often more efficient and scalable, as it allows for better utilization of resources and handling of many concurrent operations.
//     Complexity:
//
// Sync: Generally simpler to implement and manage.
//     Async: Can be more complex due to the need for managing callbacks, handling concurrency, and ensuring proper error handling.
//     Choosing Between Sync and Async
// The choice between synchronous and asynchronous APIs depends on the requirements of your application:
//
//     Synchronous APIs are often used when tasks are quick and predictable, and immediate responses are necessary.
//     Asynchronous APIs are preferred for long-running tasks or when you need to handle high concurrency efficiently.


// how to code quality check
//SonarQube
//ESLint
//Code Formatting :Prettier

## Timimg Events

### `setTimeout()`

- to delay the execution of function by certain time.

### `setInterval()`

- to execute the function with a time interval.

### `clearTimeout()` and `clearInterval()`

- `setTimeout()` and `setInterval()` will return an Id which uniquely identifies them.
- These Ids can be used to clear the timeout and interval


**Synchronous:** The operations are performed in a sequentical manner.(blocking architecture);

Note: refer the code for examples.

**Asynchronous:** The cabability to start a long running tast and yet be responsive to other events while the task runs.

**callback**: when a function is passed as an argument in another function its called callback or simply of a function is called inside the function its called callback.

1. Browser API/Web API
2. Promises


How does the code work asynchronously?

**callback queue/task queue**:
1. When a Browser API occurs, it places the callback functions in a queue.
2. call stack is executed normally.
3. The event loop checks if there is a callback function in the queue.
4. If so, it pulls the callback function from the queue to the stack and execute.
5. Continue the loop.

- multiple nested callbacks lead to callback hell.


**Promise**

- Promise is an object which represents the eventual completion of an asynchronous operation and its resulting value.
- A promise has three states
   - pending: still working
   - fulfilled: resolved succesfully and returns a value
   - rejected: fails with an error
- As the promise is executed if its resolved we can handle it with `then`. if its rejected we can handle it with `catch`.
- The promise id setteled if its fulfilled or rejected. so we can `finally` do something.
- Promises are handled by job queue which has more priority than the callback queue when the stack is free.


**Promise Chaining**

- having multiple nested promise executions

**async-await**

- The `async` function declaration declares an async function where the `await` keyword is used within the function body. - The async and await keywords allow asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

**Fetch API**

-  The Fetch API provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses.

OOP:

- Abstraction
- Encapsulation
- Ineritance
- Polymorphism



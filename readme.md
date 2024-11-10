# Let's learn JS in Depth

## Table of Contents

[x] Event Loop
[x] Callback & Callback Hell
[x] Promise & Promise Chaining
[x] Async await
[x] Session reference - http://latentflip.com/loupe/

## Event Loop

- Event loop is a mechanism that allows Node.js to perform non-blocking I/O operations.
- It is a loop that picks events from the event queue and pushes their callback functions to the call stack.
- The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
- The event loop is a never-ending loop that keeps on running as long as there are tasks in the event queue.
- The event queue is a data structure that stores events that are waiting to be processed.

## Callback

- A callback is a function that is passed as an argument to another function.
- The callback function is executed inside the function to which it is passed.
- Callback functions are used to handle asynchronous operations in JavaScript.

Exercise:

1. Create a function named `add` that takes two arguments `a` and `b` and returns the sum of `a` and `b`. Create another function called `multiply` that takes two arguments `a` and `b` and returns the product of `a` and `b`. Create a function called `calculate` that takes three arguments `a`, `b`, and a callback function. The `calculate` function should call the callback function with `a` and `b` as arguments. The calculate function print the result of the callback function.

## Callback Hell

- Callback hell is a situation where multiple nested callbacks are used to handle asynchronous operations.

## Promise

- A promise is an object that represents the eventual completion or failure of an asynchronous operation.
- Promises executes asynchronously.
- The operations inside the promise are executed in the order they are defined or called.

States:

- Pending: The initial state of a promise.
- Fulfilled: The state of a promise when it is resolved.
- Rejected: The state of a promise when it is not resolved.

## Doubts

- Manage CSS using JS (Two ways)
- File Copying using Promises

## Promise and Promise Chaining

- Promise chaining is a technique used to chain multiple promises together.
- The then() method is used to chain promises.
- The catch() method is used to handle errors in promises.
- The chains of promises are executed in the order they are defined or called in synchronous order.

## Callback vs Promise

- Callbacks are used to handle asynchronous operations in JavaScript.
- Promises are used to handle asynchronous operations in JavaScript.
- Callbacks are difficult to manage when multiple asynchronous operations are involved.
- Promises are easier to manage when multiple asynchronous operations are involved.
- Callbacks are prone to callback hell.
- Promises are less prone to callback hell.

## Async Await

- Async/await is a new way to write asynchronous code in JavaScript.
- Async/await is a combination of promises and generators.
- Await will pause the execution of the function until the promise is resolved.
- Async/await makes the code look synchronous.

## Error Handling in Async Await

- Use try/catch block to handle errors in async/await.
- the reason to handle the error using try/catch is to not let the application crash but to handle the error and continue the execution.

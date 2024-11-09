# Let's learn JS in Depth

## Table of Contents

[ ] Event Loop
[ ] Promise & Promise Chaining
[ ] Session reference - http://latentflip.com/loupe/
[ ] Callback & Callback Hell
[ ] Async await

## Event Loop

- Event loop is a mechanism that allows Node.js to perform non-blocking I/O operations.
- It is a loop that picks events from the event queue and pushes their callback functions to the call stack.
- The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
- The event loop is a never-ending loop that keeps on running as long as there are tasks in the event queue.
- The event queue is a data structure that stores events that are waiting to be processed.

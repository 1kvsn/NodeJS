### EventEmitters

- Node.js core API is based on asynchronous event-driven architecture in which certain kind of objects called emitters periodically emit events that cause listener objects to be called.

- All objects that emit events are members of EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

- When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously.

- Few examples of eventEmitter objects are:
  1. createServer method of http module
    - It emits named events like 'request', 'error' etc..d
    - listeners can be added using `server.on('request', callback)` or `server.on('error', callback)`
  2. *request* and *response* objects which are received as callback from createServer method
    - request emits `named events like 'data', 'end'`.
    - Examples are
    ```js
    req.on('data', callback => {

    })
    ```
  3. createReadStream method from fs module
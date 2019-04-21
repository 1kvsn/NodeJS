## Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

A web server can be seen as a function that takes in a request and outputs a response. Middlewares are functions executed in the middle after the incoming request then produces an output which could be the final output passed or could be used by the next middleware until the cycle is completed, meaning we can have more than one middleware and they will execute in the order they are declared. 

Middleware functions can perform the following tasks:

  - Execute any code.
  - Make changes to the request and the response objects.
  - End the request-response cycle.
  - Call the next middleware in the stack.

If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

A simple middleware that prints current date and passes execution to next middleware in queue.
```js
...
app.use((req, res, next) => {
  console.log(new Date().toDateString())
  next();
})
...
```
### Types of express middleware
  - Application level middleware `app.use`
  - Router level middleware `router.use`
  - Built-in middleware `express.static`, `express.json`, `express.urlencoded`
  - Error handling middleware `app.use(err, req, res, next)`
  - Third party middleware `cookieparser`, `morgan`

  
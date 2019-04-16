Node's inbuilt http or https module is used to create a server. It receives request and response objects as callbacks which are responsible for acting on a specific request received. Based on a request, a response is send back to the caller and the cycle terminates with ending the response using response.end().

- createServer method from http is used to create a server.

```js
var http = require('http');

http.createServer()
```
- createServer takes request and response as callbacks. Request can be aliased as *req* and response as *res*. This callback (req, res) is referred to as *request handler functions*.

```js
http.createServer((request, response) => {
  // Do the handling part here..
})

// OR

http.createServer((req, res) => {
// handling and sending response here.. 
})
```

There are multiple ways for initializing a server using http.createServer method.
http.createServer method is an eventEmitter as well. For more details on eventEmitters see `emitters.md`.

```js
var server = http.createServer();
server.on('request', (req, res) => {
  // handling request here..
})
```

At last, we listen for requests on a specific port and host so we have to define a listener method at the end of the createServer method. Hostname is optional and defaults to `localhost`. Listen method takes an optional 3rd parameter as callback.

```js
var port = process.env.PORT || 3000;
var hostname = 'http://localhost' || 'http://127.0.0.1'
http.createServer((req, res) => {
  // handle response here ..
}).listen(port, hostname);

// OR

var server = http.createServer();
server.on('request', (req, res) => {
  // handle here ..
});
server.listen(port, hostname, () => {
  console.log('server listening on' + port);
})

```

   
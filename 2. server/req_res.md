## Request and Response Object
http.createServer method returns a callack which contains request an response object. 
Request and response are responsible for handling specific request coming on the server and sending appropriate response.

### Request Object
Request object has information about incoming requests. Requests are readable streams which contains information about protocols, request methods, urls at which request is coming, headers included with request. Once we know the specifications of the request made, response can be send accordingly.

Few of the request properties are...
1. Headers
  - Headers are objects which has information about host, user-agent, cookie, accept-language, accept content-type etc...
  - Headers can be accessed using `req.headers`
  - returned object is: 
  ```js
  { host: '',
  connection: '',
  purpose: '',
  'upgrade-insecure-requests': '1',
  'user-agent': '',
  accept: '',
  'accept-encoding': '',
  'accept-language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
  cookie: '' }
  ```
2. url
  - url provides the path where the request was made. It returns query string along with path for requested urls.
  - It can be accessed using `req.url`. It returns a string containing path and query string if available like `/users/register?name=asdf`

3. Method
  - `req.method` returns the http verb or method used for making request. It can be one of `GET`, `POST`, `PUT`, `DELETE`.

As we already know, request object is an eventEmitter. It emits `data` and `end` event when optional body field is received with form or json data. In order to fetch data inside handlers, we listen for these named events which provides data invoked as callback. Data is streamed in the form of chunks. We will read more about streams later. Depending on form or json data, we parse them and process next.

  - Parsing json data

  ```js
  http.createServer((req, res) => {
    // Create a store variable
    var store = '';
    // Data is received in smaller chunks on data event
    req.on('data', (chunk) => {
      // Append data received to store
      store += chunk.toString();
    });
    // End event is fired when all data is received
    // handle requests after end event to get all form or json data
    req.on('end', () => {
      res.write(store);
      res.end()
    })
  })
  ```

  - Parsing form data

    - form data is received as query string like `name=asdf&email=asdf@gmail.com`. In order to parse form data we use node's inbuild querystring module.

  ```js
  const { parse } = require('querystring');
  http.createServer((req, res) => {
    var store = '';
    req.on('data', (chunk) => {
      store += chunk.toString();
    });
    req.on('end', () => {
      var store = parse(store) // parse converts form data(query string) to objects
      // Next execution goes here ..
    })
  })
  ```

### Response Object

Response is a writable stream which means we can write to response object when returning a specific response. We can set status code, specify a content-type and write responses. One can modify responses depending on the content-type provided.
For html content, set Content-Type as `text/html` and write response as `res.write(<h1>hello world!</h1>)`.

```js
// Add Status Code
res.statusCode = 200;
// Set content-type
res.setHeader('Content-Type', 'text/plain');
// Set multiple headers
res.writeHead(200, {'Content-Type': 'text/html'}) 
// Write to a response
res.write('hello world!');
```

### url Module
Url is core node's module which provides utilities for URL resolution and parsing.
A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.

For ceating a new url and accessing its properties: 
```js
var myUrl = new URL('https://api.google.com')
// Accessing the properties
myUrl.host || myUrl.port
```

We can access all the properties of a url like protocol, port, host, hostname, query strings using `url.parse`.
url.parse takes 2 arguments.
  - url string(required)
    - the url to be parsed
  - parse query string(optional) defaults to `false`
    - when true, parses query string from url using querystring's parse method and returns an object.
  ```js
  var url = require('url');
  url.parse('https://blog.anything.com/wp-admin?username=asdf', true)
  // returns an object with preoperties
  {
    host: 'blog.anything.com',
    port: '443',
    protocol: 'https',
    path: '/wp-admin',
    query: {
      username: 'asdf'
    }
  }
  ```

### Path Module
The path module provides utilities for working with file and directory paths.

The `path.join()` method joins all given path segments together using the platform-specific separator as a delimiter.

```js
var path = require('path');
path.join(__dirname__, 'abcd.html') // will return absolute path upto abcd.html
```

#### External resources
Buffer details
  - https://medium.freecodecamp.org/do-you-want-a-better-understanding-of-buffer-in-node-js-check-this-out-2e29de2968e8
Routes are middleware that are responsible for handling the url request received by server. Any request made to server includes a HTTP method and the path at which requst is made.

Routes get the HTTP method and path and matches it to the routes defined on server. When a route match is found, it processess the request and sends the response otherwise error hnadler throws a `no route found error`.

Valid HTTP method could be one of `GET`, `POST`, `PUT`, `DELETE` etc..

Path corresponds to the path part of the url.

Router.method takes 2 arguments.
  1. path of the requested url
  2. request handler i.e callback function
  ```js
  // here get is the method, `/admin` is the path and (req, res) part is callback function
  router.get('/admin', (req, res) => {
    // Send the response here
  })
  ```

  We could define 2 routes on same path but with different method. They are treated as different routes. We will use these conventions very often.
  ```js
  router.get('/ligin', callback => {});
  router.post('/login', callback => {});
  ```

  In order to fetch ids or username from routes like `/users/1234` or `/users/sam`, we use params property in request object.
  ```js
  // Our route looks like
  router.get('/users/:id', (req, res) => {
    var userId = req.params.id // 1234
    // Send response here
  });

  //OR

  router.get('/users/:username', (req, res) => {
    var username = req.params.username // sam
    // send response here
  })
  ```
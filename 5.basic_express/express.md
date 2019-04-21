Express is simple, minimalist and unopinionated node framework i.e an abstraction
layer build on top of node. It follows MVC convention and has all the functionalities
required to create a full stack application. 
  - Models for structuring data and can be integrated with SQL and NoSQL databases. 
  - Views for rendering templates and different methods for displaying HTML pages.
  - Controllers and routes for handling multiple route requests, processing them and
  displaying appropriate web page.

It breaks conventional node's request handling into multiple middlewares and routes.
Each middleware perform a specifiic task and passes the request to next middleware in
row until a route matches and subsequently sends a response.

It makes routing easy and clean to handle.

It also adds several abstractions for returning a response. In node, we have 
`res.write` followed by `res.end`.
In Express, we have `res.send`, `res.render`, `res.sendFile` and `res.redirect`. They
all have different use cases.

Simply put together, express makes it easier to write node applications without 
worrying about external dependencies or biased resources to use. 
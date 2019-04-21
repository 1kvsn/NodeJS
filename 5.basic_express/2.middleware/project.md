1. create a application middleware(app.use) similar to logger which logs url, method and current date on every request.

2. Create a authorization middleware that only renders a web page on even minutes of the current time(like on 2, 4, 10, 48, 56 minutes of current time).
  - if current minute is even, request is authorized and webpage is displayed.
  - otherwise use error middleware to log `unauthorized`.

3. Create a static middleware of your own like express.static which should be able to serve static files.

4. Create a middleware that parses json and form data and makes it available on req.body similar to express.json and express.urlencoded.
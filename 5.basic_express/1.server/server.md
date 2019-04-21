Starting a server using express is very easy. It's barely 5 lines of code.

1. Create a package.json file using npm init
```js
// On the command line
>> npm init -y
```
2. Install Express using npm // npm i --save express
3. Require express in a file named server.js or any file of your choice.
```js
// in server.js
var express = require('express');
```
4. Mount express app in a variable called app. Now this app variable has all express functionalities and server created for us.
```js
var app = express(); // call the express 
``` 
5. Add a port for server to listen for requests.
```js
// At the top
var port = process.env.PORT || 4000;
...
app.listen(port, () => {
  console.log('server listening on port' + port);
})
```

This is all it takes to create a server using express.
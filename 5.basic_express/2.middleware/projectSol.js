var express = require('express');

//There are theee ways the PORT # can be provided to an application.
// 1. From package.json file
//2.While running the file, we can give port number before writing node file_name.js.
// port=8000 node fileName.js

//3. From within the js file.
//If we provide the port while running the application js file, then it will be taken as the port instead of the one defined in the package.json file and the index.js file.
var port = process.env.port || 7042;


console.log(process.env.port);
var app = express();

// SOLUTION ONE
// app.all('/', (req, res) => {
// 	console.log('The URL is', req.url);
// 	console.log('The method is', req.method);
// 	console.log('Date: ', new Date().toString().split());
// })

// SOL TWO

// var today = new Date();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var date = new Date().toLocaleTimeString();

app.use('/', (req, res) => {
	if(date.substring(3,5) === 2 || )
})







// listener
app.listen(port, () => {
  console.log('Server listening on port '+ port);
});
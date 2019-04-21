var express = require('express');

// Whole express is mounted on the 'app' variable.
//General convention is to use 'app' as name.
var app = express();
var path = require('path');

//Requiring cookie-parser
var cookieParser = require('cookie-parser');

//middleware contains (req, res and next) 
//two tasks
//1. either they modify the request and sent it to next middleware.
// 2. send response.
app.use((req, res, next) => {
	console.log(req.url, req.method, req.ip);
	next();
})

// Template residing location
//Comes before any routes
app.set('views', path.join(__dirname, 'views'))

// USE eJS as our View Engine.
app.set('view engine', 'ejs')


// Auto defined middlewares, so no need to call next(). They call next() themselves.
// Only works when json or form data is coming.
app.use(express.json());
app.use(express.urlencoded());

//Cookie-parser (middle-ware) (need this before making own cookies below)
app.use(cookieParser());

// Making a cookie. NOT an OBJECT.
app.use((req, res, next) => {
	res.cookie('name', 'Sasikant')
	next();
})

// ===== GET Request Handle ==== //
// When the GET request comes from client on port defined, send the file given into res.
app.get('/', (req,res) => {
	// Send File needs absolute path.
	// res.sendFile(__dirname + '/index.html');

	// Instead of sending file, we use res.render() and send using eJS Template.
	//This will make the eJS Template look for index.eJS file and send it as a response.
	// automatically looks for index.eJS file in 'Views' folder.
	res.render('index');
})


// ==== POST ===== //
app.post('/', (req, res) => {
	console.log(req.body);
})

// ==== STATIC Folder Set ====//
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'), ' => logging full path of public directory');

// res.status(200).send();


// Listen takes a callback as well to test.
app.listen(7042, () => {
	console.log('Server running on port: 7042');
});
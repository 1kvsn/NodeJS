var express = require('express');
var app = express();

// Middlewares here 
// middleware for parsing form data
app.use(express.urlencoded({extended: false}));


// this route listens for get request on '/about'
app.get('/about', (req, res) => {
    res.send('this is about me');
});
// anything afer '/' gets handled by router.js file
app.use('/', require('./routes'));


app.listen(4000, () => console.log('listening on port 4k'))
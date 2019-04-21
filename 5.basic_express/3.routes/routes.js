var express = require('express');

// Use router from express
var router = express.Router();

// Get request on index route
router.get('/', (req, res) => {
  res.send('Index route here');
});

// get request on '/register' route
router.get('/register', (req, res) => {
  // res.sendFile('./register.html'); //path must be absolute
  res.sendFile(__dirname + '/register.html')
});

// Listens for POST request on '/register'
router.post('/register', (req, res) => {
  var user = req.body;
  res.json(user);
});

//Export router so it is availbale in app.js
module.exports = router;
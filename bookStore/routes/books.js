var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
// var Book = require('../models/Book');

// require controller module
var book_controller = require('../controllers/bookcontroller');

//List all books
router.get('/:id/bookdetails', book_controller.listBooks);

module.exports = router;

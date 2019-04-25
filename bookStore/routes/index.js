var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Store = require('../models/Store');

/* GET home page. */
router.get('/', function(req, res, next) {
  Store
  .find({})
  .populate('author')
  .exec((err, books) => {
    if(err) return next(err);
    console.log(books)
    res.render('index', {books: books});
  })
});

module.exports = router;

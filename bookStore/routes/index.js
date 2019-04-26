var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Book = require('../models/Book');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session && req.session.userId) {
    Book
    .find({})
    .populate('author')
    .exec((err, books) => {
      if(err) return next(err);
      res.render('index', {books: books});
    })
  } else {
    res.redirect('/users/login')
  }
 
});

module.exports = router;

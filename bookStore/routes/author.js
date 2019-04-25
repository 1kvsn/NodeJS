var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Author = require('../models/Author');

// Route creating new author
router.get('/new', (req, res) => {
  res.render('addauthor')
})

// Model.Create creates new author. The first argument contains the data which it needs to create the author.
router.post('/', (req, res, next) => {
  // console.log(req.body);
  Author.create(req.body, (err, author) => {
    if(err) return next(err);
    res.redirect('/');
  })
})

// Showing all authors
router.get('/', (req, res) => {
  Author
  .find({})
  .exec((err, authors) => {
    err ? next(err) : console.log(authors, '.............this is Authors');
    res.render('allauthor', {authors});
  })
})

module.exports = router;

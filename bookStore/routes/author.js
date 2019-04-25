var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Author = require('../models/Author');

router.get('/new', (req, res) => {
  res.render('addauthor')
})


router.post('/', (req, res, next) => {
  // console.log(req.body);
  Author.create(req.body, (err, author) => {
    if(err) return next(err);
    res.redirect('/');
  })
})

module.exports = router;

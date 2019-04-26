var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Book = require('../models/Book');


router.get('/:id/bookdetails', function(req, res, next) {
  id = req.params.id;
 Book.findOne({_id: id})
  .populate('author')
  .exec((err, book) => {
    if(err) next(err);
    console.log('...................books hai');
    res.render('books', {book: book});
  })
})

module.exports = router;

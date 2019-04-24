var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Store = require('../models/Store');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('bookInfo', {book: book});
// });

router.get('/:id/bookdetails', function(req, res, next) {
  id = req.params.id;
 console.log(id, 'inside book details page');
 Store.findOne({_id: id}, (err, book) => {
   if(err) next(err);
   res.render('books', {book: book});
 })
})

module.exports = router;

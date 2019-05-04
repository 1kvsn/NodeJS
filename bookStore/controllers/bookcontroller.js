var Book = require('../models/Book');

//Display list of all the books.
exports.listBooks = (req, res, next) => {
  var id = req.params.id;
 Book.findOne({_id: id})
  .populate('author')
  .exec((err, book) => {
    if(err) next(err);
    res.render('books', {book: book});
  })
};


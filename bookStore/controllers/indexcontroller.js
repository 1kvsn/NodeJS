// Importing the model here which was imported in app.js. Notice the double dot.
var Book = require('../models/Book');

exports.home = (req, res, next) => {
	//If there is a session and if that session has an userID, then show list of all books.at home page.
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
};
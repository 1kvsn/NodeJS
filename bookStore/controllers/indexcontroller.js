// Importing the model here which was imported in app.js. Notice the double dot.
var Book = require('../models/Book');

exports.home = (req, res, next) => {
  // console.log(req.session);
  //If there is a session and if that session has an userID, then show list of all books.at home page.
  // console.log(req.session);
    Book
    .find({})
    .sort({created:-1})
    .populate('author')
    .exec((err, books) => {
      if(err) return next(err);
      res.render('index', {books: books});
    })
};
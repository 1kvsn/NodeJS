var Author = require('../models/Author');

//Renders new Author Form
exports.newAuthorForm = (req, res) => {
  res.render('addauthor');
}

//creating new Author
exports.createAuthor = (req, res, next) => {
  Author.create(req.body, (err, author) => {
    if(err) return next(err);
    res.redirect('/');
  })
};

//Showing all authors
exports.showAllAuthor = (req, res) => {
  Author
  .find({})
  .exec((err, authors) => {
    if(err) return next(err);
    res.render('allauthor', {authors});
  })
};


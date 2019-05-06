var Author = require('../models/Author');
var Book = require('../models/Book');

//Displays books authored by logged-in author
exports.myBooks = (req, res, next) => {
  Author
  .findById({_id: req.session.passport.user})
  .populate('books')
  .exec((err, author) => {
    if(err) return next(err);
    res.render('author', {author});
  });
}

exports.editBook = (req, res, next) => {
  var id = req.params.id;
  Book.findOne({_id: id}, (err, book) => {
    if(err) return next(err);
    res.render('edit', {book: book});
  });
}

exports.updateBook = (req, res, next) => {
	var id = req.params.id;
	Book.findByIdAndUpdate(id, req.body, (err, book) => {
		if(err) return next(err);
		res.redirect('/authors/mybooks');
	})  
};

exports.deleteBook = (req, res, next) => {
	var id = req.params.id;
	Book.findByIdAndDelete(id, (err, book) => {
		if(err) return next(err);
		res.redirect('/authors/mybooks');
	})
};

exports.new = (req, res, next) => {
  Author.find({}, 'name', (err, author) => {
    if(err) return next(err);
    res.render('form');
  })
}

//Handles POST request to create a new Book.
exports.createBook = (req, res, next) => {
	Book.create(req.body, (err, book) => {
		if(err) return next(err);
		Author.findByIdAndUpdate(book.author, {$push: {books: book._id}}, {new: true}).populate('author', 'name').exec((err, author) => {
			if(err) return next(err);
			res.redirect('/authors/mybooks');
		})
	})
};

exports.logout = (req, res) => {
	req.logout();
  res.redirect('/');
	};


// exports.authorDetails = (req, res, next) => {
//   Author.find({}).exec((err, authors) => {
//     if(err) return next(err);
//     res.render('/', {authors});
//   })
// }

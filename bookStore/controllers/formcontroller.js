// Importing the model here which was imported in app.js. Notice the double dot.

var Book = require('../models/Book');
var Author = require('../models/Author');

//Show Authors name in Form Drop Down.
exports.showAuthorsInForm = (req, res, next) => {
	//We're finding author, 
	Author.find({}, "name", (err, authors) => {
		if(err) next(err);
		res.render('form', {authors});
	})
};

//Create new Book and update the Authors BookList as well.
exports.createBook = (req, res, next) => {
	Book.create(req.body, (err, book) => {
		if(err) next(err);
		// When we're creating the book, we need to update the _ID of the book where the specific author is stored. so, accessed the Author model and using the _id we located the specific author, passed the author's _id as the first argument, pushed the new book _id to the array.
		// book.author is the _id of that author.
		// book._id is the _id of the book newly created.
		Author.findByIdAndUpdate(book.author, {$push: {books: book._id}}, {new: true}, (err, author) => {
			if(err) next(err);
			res.redirect('/');
		})
	})
};

exports.deleteBook = (req, res, next) => {
	var id = req.params.id;
	Book.findByIdAndDelete({_id: id}, (err, book) => {
		if(err) next(err);
		res.redirect('/');
	})
};

exports.editBook = (req, res, next) => {
	id = req.params.id;
 Book.findOne({_id: id}, (err, book) => {
	 if(err) next(err);
	 res.render('edit', {book: book});
 })
};

exports.updateBook = (req, res, next) => {
	console.log(req.body);
	// id = req.params.id;
	Book.findOneAndUpdate({_id: id}, req.body, (err, book) => {
		if(err) next(err);
		res.redirect('/');
	})
};


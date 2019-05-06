var express = require('express');
var router = express.Router();

var Book = require('../../models/Book');
//API routes just for book.

//Test Route
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });   
});

//List All Books
router.get('/books', (req, res, next) => {
	Book.find({}, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
})

//Book Creation\
router.post('/books', (req, res, next) => {
	Book.create(req.body, (err, book) => {
		if(err) return next(err);
		res.json({message: 'Book successfully created!'});
	});
});

//GET Single Book Info
router.get('/books/:id', (req, res, next) => {
	Book.findById(req.params.id, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
});

//Update using PUT
router.put('/books/:id', (req, res, next) => {
	Book.findByIdAndUpdate({_id: req.params.id}, req.body, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
});

//Delete Book
router.delete('/books/:id', (req, res, next) => {
	Book.findByIdAndDelete({_id: req.params.id}, (err, book) => {
		if(err) return next(err);
		res.json({message: 'Book successfully deleted!'});
	});
});

module.exports = router;
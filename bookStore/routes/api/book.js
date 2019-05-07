var express = require('express');
var router = express.Router();

var Book = require('../../models/Book');
//API routes just for book.


//List All Books
router.get('/', (req, res, next) => {
	Book.find({}, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
})

//Book Creation\
router.post('/', (req, res, next) => {
	Book.create(req.body, (err, book) => {
		if(err) return next(err);
		res.json({message: 'Book successfully created!'});
	});
});

//GET Single Book Info
router.get('/:id', (req, res, next) => {
	Book.findById(req.params.id, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
});

//Update using PUT
router.put('/:id', (req, res, next) => {
	Book.findByIdAndUpdate({_id: req.params.id}, req.body, (err, book) => {
		if(err) return next(err);
		res.json(book);
	});
});

//Delete Book
router.delete('/:id', (req, res, next) => {
	Book.findByIdAndDelete({_id: req.params.id}, (err, book) => {
		if(err) return next(err);
		res.json({message: 'Book successfully deleted!'});
	});
});

module.exports = router;
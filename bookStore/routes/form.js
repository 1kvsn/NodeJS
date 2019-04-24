var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.
var Store = require('../models/Store');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('form');
});

router.post('/', function(req, res, next) {
	console.log(req.body);
	Store.create(req.body, (err, data) => {
		if(err) next(err);
		console.log(data, 'inside form');
		res.redirect('/');
	})
})

router.get('/:id/delete', function(req, res, next) {
	var id = req.params.id;
	console.log(id, 'inside delete form');
	Store.findByIdAndDelete({_id: id}, (err, book) => {
		if(err) next(err);
		res.redirect('/');
	})

})

var id;
router.get('/:id/edit', function(req, res, next) {
	 id = req.params.id;
	console.log(id, 'inside edit form');
	Store.findOne({_id: id}, (err, book) => {
		if(err) next(err);
		res.render('edit', {book: book});
	})
})

router.post('/:id/update', function(req, res, next) {
	console.log(req.body);
	// id = req.params.id;
	console.log(id, 'inside update form');
	Store.findOneAndUpdate({_id: id}, req.body, (err, book) => {
		if(err) next(err);
		res.redirect('/');
	})
})

module.exports = router;
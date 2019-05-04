// Importing the model here which was imported in app.js. Notice the double dot.

var Book = require('../models/Book');
var Author = require('../models/Author');

//Show Authors name in Form Drop Down.
exports.showAuthorsInForm = (req, res, next) => {
	Author.find({}, "name", (err, authors) => {
		if(err) next(err);
		res.render('form', {authors});
	})
}







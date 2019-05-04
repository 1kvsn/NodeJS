var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.

//The model was required here when the routes were housed here. Since they are moved to controllers, the model is not required here anymore. They're required within controllers.

// var Author = require('../models/Author');

//Requiring Author controller file.
var author_controller = require('../controllers/authorcontroller');
// var auth_controller = require('../controllers/authController');

// Model.Create creates new author. The first argument contains the data which it needs to create the author.

router.get('/mybooks', author_controller.myBooks);

router.get('/books/:id/edit', author_controller.editBook);

router.post('/books/:id/update',author_controller.updateBook);

router.get('/books/:id/delete', author_controller.deleteBook);

router.get('/books/create', author_controller.new)

router.post('/books/create', author_controller.createBook);

//Logs out the author
router.get('/logout', author_controller.logout);


module.exports = router;

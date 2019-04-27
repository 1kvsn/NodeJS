var express = require('express');
var router = express.Router();

// Importing the model here which was imported in app.js. Notice the double dot.

//The model was required here when the routes were housed here. Since they are moved to controllers, the model is not required here anymore. They're required within controllers.

// var Author = require('../models/Author');

//Requiring Author controller file.
var author_controller = require('../controllers/authorcontroller');

// Route creating new author
router.get('/new', author_controller.newAuthorForm);

// Model.Create creates new author. The first argument contains the data which it needs to create the author.
router.post('/', author_controller.createAuthor);

// Showing all authors
router.get('/', author_controller.showAllAuthor);

module.exports = router;

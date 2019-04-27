var express = require('express');
var router = express.Router();

var form_controller = require('../controllers/formcontroller');

//Show Authors name in Form Drop Down.
router.get('/', form_controller.showAuthorsInForm);

//Create new Book and update the Authors BookList as well.
router.post('/', form_controller.createBook);

//deleting the book
router.get('/:id/delete', form_controller.deleteBook);

// var id;
router.get('/:id/edit', form_controller.editBook);

router.post('/:id/update', form_controller.updateBook);

module.exports = router;
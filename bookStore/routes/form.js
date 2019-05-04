var express = require('express');
var router = express.Router();

var form_controller = require('../controllers/formcontroller');

var auth_controller = require('../controllers/authController');

//Show Authors name in Form Drop Down.
// router.get('/', auth_controller.isUserLogged, form_controller.showAuthorsInForm);

//Create new Book and update the Authors BookList as well.
// router.post('/', form_controller.createBook);


module.exports = router;
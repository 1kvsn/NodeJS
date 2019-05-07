var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/userscontroller');

//renders register form
router.get('/register', users_controller.registerForm);

//create User upon form submission
router.post('/', users_controller.createUser);

//User Login Form
router.get('/login', users_controller.userLoginForm);

//Authenticate User using bcrypt
router.post('/login', users_controller.authenticateUser);

//Add to Cart button action
router.post('/books/buy', users_controller.addToCart);

//Logs out the user
router.get('/logout', users_controller.logout);

router.get('/cart', users_controller.openCart);

module.exports = router;
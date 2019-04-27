var express = require('express');
var router = express.Router();

var User = require('../models/User');

router.get('/register', (req, res) => {
	res.render('user')
})

router.post('/', (req, res, next) => {
	User.create(req.body, (err, user) => {
		if(err) return res.redirect('/users/register');
		// console.log(user, '.............user created here');
		res.redirect('/users/login');
	})
});

router.get('/login', (req, res) => {
	res.render('login')
})

router.post('/login', (req, res, next) => {
	var {email, password} = req.body;
	User.findOne({email: email}, (err, user) => {
		console.log(err, user)
		if(err) return  res.status(500).redirect('/users/login');
		if(!user) return res.status(400).send('User NOT found. Please try again!');
		user.comparePassword(password, (err, isMatch) => {
			console.log(err, isMatch)
			if(err) return res.status(500).next(err);
			if(!isMatch) return res.status(400).send('Incorrect Password. Please try again!')
			console.log('login success');
			req.session.userId = user._id;
			res.redirect('/');
		})
	})
})

router.get('/logout', (req, res) => {
	req.session.destroy(function(err) {
		if(err) return next(err);
		res.redirect('/');
	})
})


module.exports = router;
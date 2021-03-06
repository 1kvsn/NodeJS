var User = require('../models/User');
var Author = require('../models/Author');

exports.isUserLogged = (req, res, next) => {
	if(req.session && req.session.userId) {
		User.findById(req.session.userId, (err, user) => {
			req.user = user;
			res.locals.user = user;
		next();
		})
	} else {
		res.redirect('/users/login');
	}
}


exports.sessions = (req, res, next) => {
	if(req.session && req.session.userId) {
		User.findById(req.session.userId, (err, user) => {
			req.user = user;
			res.locals.user = user;
			next();
		})
	} else {
		req.user = null;
		res.locals.user = null;
		next();
	}
}

exports.isAuthorLogged = (req, res, next) => {
	if(req.session.passport && req.session.passport.user) {
		Author.findById(req.session.passport.user, (err, author) => {
			req.author = author;
			res.locals.author = author;
		next();
		})
	} else {
		res.redirect('/');
	}
}

exports.authorSessions = (req, res, next) => {
	if(req.session.passport && req.session.passport.user) {
		Author.findById(req.session.passport.user, (err, author) => {
			req.author = author;
			res.locals.author = author;
			next();
		})
	} else {
		req.author = null;
		res.locals.author = null;
		next();
	}
}
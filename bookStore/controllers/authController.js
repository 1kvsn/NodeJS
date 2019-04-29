var User = require('../models/User');

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
var User = require('../models/User');
var Cart = require('../models/Cart');
var Product = require('../models/Product');

//renders register form
exports.registerForm = (req, res) => {
	res.render('user');
};

//create User upon form submission
exports.createUser = (req, res, next) => {
	User.create(req.body, (err, user) => {
		console.log(user);
		if(err) return res.redirect('/users/register');
		Cart.create({userId: user._id}, (err, cart) => {
			console.log(cart);
			if(err) return next(err);
			User.findByIdAndUpdate(user._id, {cart: cart._id}, {new: true}).exec((err, user) => {
				if(err) return next(err);
				res.redirect('/users/login');
			});
		});
	});
}

//User Login Form
exports.userLoginForm =  (req, res) => {
	res.render('login');
}

//Athenticate User using bcrypt
exports.authenticateUser = (req, res, next) => {
	var {email, password} = req.body;
	User.findOne({email: email}, (err, user) => {
		// console.log(err, user);
		if(err) return  res.status(500).redirect('/users/login');
		if(!user) return res.status(400).send('User NOT found. Please try again!');
		user.comparePassword(password, (err, isMatch) => {
			// console.log(err, isMatch)
			if(err) return res.status(500).next(err);
			if(!isMatch) return res.status(400).send('Incorrect Password. Please try again!');
			// console.log('login success');
			req.session.userId = user._id;
			res.redirect('/');
		});
	});
};

exports.addToCart = (req, res, next) => {
	// console.log(req.body, req.user);
	Cart
	.findOne({userId: req.user.id})
	.populate("products")
	.exec((err, cart) => {
		console.log(err, cart, 'after populate')
		if(cart.products.length) {
			console.log('inside products array if present');
			var matchFound = false;
			cart.products.forEach(product => {
				if(product.bookId.equals(req.body.bookId)) {
					console.log('inside if of products of cart');
					matchFound = true;
					Product.findByIdAndUpdate(product.id, {$inc: {quantity: req.body.quantity}}, (err, product) => {})
				}
			})
			if(!matchFound) {
				Product.create(req.body, (err, product) => {
					console.log(product, 'inside else of cart');
					if(err) return next(err);
					Cart.findByIdAndUpdate({_id: req.user.cart}, {$push: {products: product._id}}, (err, cart) => {
						if(err) return next(err);
					});
				});
			}
			return res.redirect('/users/cart');
		} else {
			Product.create(req.body, (err, product) => {
				console.log(product, 'in else');
				if(err) return next(err);
				Cart.findByIdAndUpdate({_id: req.user.cart}, {$push: {products: product._id}}, (err, cart) => {
					if(err) return next(err);
					return res.redirect('/users/cart');
				});
			});
		}
	})

}


// exports.addToCart = (req, res, next) => {
// 	console.log(req.params.id, req.body);
// 	Product.findOne({bookId: req.params.id}, (err, product) => {
// 		if(err) return next(err);
// 		if(product) {
// 			product.quantity = req.body.quantity;
// 			product.save((err, product) => {
// 				res.redirect('/users/cart');
// 			})
	// 		} else {
	// 			Product.create(req.body, (err, product) => {
	// 				if(err) return next(err);
	// 				Cart.findByIdAndUpdate({_id: req.user.cart}, {$push: {products: product._id}}, (err, cart) => {
	// 					if(err) return next(err);
	// 					res.redirect('/users/cart');
	// 				});
	// 			});
	// 		}
	// 	})
	// };

exports.openCart = (req, res, next) => {
	Cart.findOne({userId: req.user.id})
		.populate([{
			path: 'products',
			populate: {
				path: 'bookId',
				populate: {
					path: 'author',
				}
			}
		}])
		.exec((err, cart) => {
		if(err) return next(err);
		// res.json(cart);
		// var a = products.
		res.render('cart', {cart});
	});
}

//Logs out the user
exports.logout = (req, res) => {
	req.session.destroy(function(err) {
		if(err) return next(err);
		res.redirect('/');
	});
};
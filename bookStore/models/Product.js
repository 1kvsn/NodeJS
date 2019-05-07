var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	bookId: {type: Schema.Types.ObjectId, ref: 'Book'},
	quantity: {
		type: Number,
		default: 1,
	}
});


var Product = mongoose.model('Product', productSchema);

module.exports = Product;

// exports.addToCart = (req, res, next) => {
// 	if(product) {
// 		Product.findOneAndUpdate({bookId: req.params.id}, {$inc: {quantity: req.body.quantity}}, (err, product) => {
// 			if(err) return next(err);
// 			res.redirect('/users/cart');
// 		})
// 	} else {
// 			Product.create(req.body, (err, product) => {
// 				if(err) return next(err);
// 				Cart.findByIdAndUpdate({_id: req.user.cart}, {$push: {products: product._id}}, (err, cart) => {
// 					if(err) return next(err);
// 					console.log(cart, 'this is cart');
// 					console.log(product, 'This is product');
// 					console.log(req.user);
// 					res.redirect('/users/cart');
// 				});
// 			});
// 		}
// };
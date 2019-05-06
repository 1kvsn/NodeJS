var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
},
	products: [{type: Schema.Types.ObjectId, ref: 'Product'}]

});


// Each Schema requires a model.
var Cart = mongoose.model('Cart', cartSchema);

// Exporting the model
module.exports = Cart;
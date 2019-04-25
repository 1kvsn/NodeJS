var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
	name: String,
	age: Number,
	description: String,
	//saved the reference to the Store Model where all the books are stored.
	books: [{type: Schema.Types.ObjectId, ref: 'Store'}]
})


var Author = mongoose.model('Author', authorSchema);

module.exports = Author;
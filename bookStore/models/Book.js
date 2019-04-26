var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating a schema
var bookSchema = new Schema({
	title: String,
	description: String,
	tags: String,
	likes: Number,
	author:{type: Schema.Types.ObjectId, ref: 'Author'},
	created: {type: Date, default: new Date().toLocaleDateString()},
})

// Each Schema requires a model.
var Book = mongoose.model('Book', bookSchema);

// Exporting the model
module.exports = Book;

// Route name: Plural
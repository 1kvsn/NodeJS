var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
	name: String,
	email: {
		type: String,
		unique: true,
	},
	image: String,
	//saved the reference to the Store Model where all the books are stored.
	books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})


var Author = mongoose.model('Author', authorSchema);

module.exports = Author;

//user can't create, delete, edit books. nothing
//author: just sees his books. Can edit/delete books which he authored. Use AuthorID of the logged-in author and the book being edited/deleted, if matches, proceed.

//if the author creates books, only he can see those books.
//Users can see listof allthe books.

//Sort in mongoose.Recently added books appear at the top.

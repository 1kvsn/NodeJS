var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Creating a schema
var storeSchema = new Schema({
	title: String,
	description: String,
	tags: String,
	likes: Number,
	author: String,
	created: {type: Date, default: new Date().toLocaleDateString()} 
})

// Each Schema requires a model.
var Store = mongoose.model('Store', storeSchema);

// Exporting the model
module.exports = Store;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema({
	_id: String,
  	target: Number, 
  	source: Number
});

const Link = mongoose.model("link", linkSchema);

module.exports = Link;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  	title: { type: String, required: true },
  	reporter: { type: String, required: true },
  	summary: String,
  	component: [mongoose.Schema.Types.Mixed],
	subcomponent: String,
	severity: String,
	issueType: String,
  	date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
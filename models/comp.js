const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compSchema = new Schema({
	_id: 	Number,
  	nodes:  [mongoose.Schema.Types.Mixed]
});

const Comp = mongoose.model("Comp", compSchema);

module.exports = Comp;
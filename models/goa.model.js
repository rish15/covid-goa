const mongoose = require('mongoose');

const goaCasesSchema = mongoose.Schema({
	confirmed:{
		type:Number,
		required:false
	},
	active:{
		type:Number,
		required:false
	},
	suspects:{
		type:Number,
		required:false
	},
	deceased:{
		type:Number,
		required:false
	},
});

const GoaCases = mongoose.model('GoaCases',goaCasesSchema);

module.exports.GoaCases = GoaCases;


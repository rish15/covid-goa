const mongoose = require('mongoose');

const goaCasesSchema = mongoose.Schema({
	confirmed:{
		type:Number,
		required:false
	},
	recovered:{
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
goaCasesSchema.set('timestamps', true);
const GoaCases = mongoose.model('GoaCases',goaCasesSchema);

module.exports.GoaCases = GoaCases;


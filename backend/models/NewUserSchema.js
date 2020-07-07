const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewUserSchema = Schema({
	email    : {
		type     : String,
		required : true,
		unique   : true,
		trim     : true,
	},
	password : {
		type     : String,
		required : true,
	},
});

module.exports = mongoose.model('NewUser', NewUserSchema);

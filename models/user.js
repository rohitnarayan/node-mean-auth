const 	mongoose = require("mongoose"),
		bcrypt = require("bcrypt-nodejs"),
		config = require("../config/database");

const Schema = mongoose.Schema;

const schema = new Schema({
	name : {
		type:String,
		required:true
	},
	email : {
		type:String,
		required:true
	},
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
});

const User = module.exports = mongoose.model("User",schema);

module.exports.getUserById = function(id,callback){
	User.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback){
	const query = {username:username};
	User.findOne(query,callback);
}

module.exports.addUser = function(newUser,callback){
	bcrypt.hash(newUser.password,null,null,function(err,hash){
		newUser.password = hash;
		newUser.save(callback);
	})
}

module.exports.comparePassword = function(candidatePassword,hash,callback) {
	bcrypt.compare(candidatePassword,hash,function(err,isMatch){
		if(err) throw err;
		callback(null,isMatch);
	});
}
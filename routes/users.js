const 	express = require("express"),
		router	= express.Router(),
		passport = require("passport")
		jwt = require("jsonwebtoken");

const User = require("../models/user");
const config = require("../config/database")

router.post("/register",function(req,res){
	var newUser = new User({
		name:req.body.name,
		email:req.body.email,
		username:req.body.username,
		password:req.body.password
	});

	User.addUser(newUser,function(err,user){
		if(err){
			res.json({success:false,msg:"Failed to create user"});
		}else{
			res.json({success:true,msg:"User registered"});
		}
	});
});

router.post("/authenticate",function(req,res){
	const username = req.body.username;
	const password = req.body.password;

	User.getUserByUsername(username,function(err,user){
		if(err)
			throw err;
		if(!user) {
			res.json({success:false,msg:"User not found"});
		}
		User.comparePassword(password,user.password,function(err,isMatch){
			if(err)
				throw err;
			if(isMatch){
				const token = jwt.sign(user,config.secret,{
					expiresIn:604800
				});
				res.json({
					success:true,
					token:"JWT "+token,
					user:{
						id:user._id,
						name:user.name,
						username:user.username,
						email:user.email
					}
				});
			} else {
				res.json({success:false,msg:"Wrong Password"});
			}
		});
	});
});

router.get("/profile",passport.authenticate("jwt",{session:false}),function(req,res){
	res.json({user:req.user});
});

module.exports = router;
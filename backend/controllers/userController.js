const NewUser = require('../models/NewUserSchema');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
	// Steps to register a new user!
	NewUser.findOne({ email: req.body.email }).then(async (user) => {
		console.log(user);
		try {
			if (!user) {
				const hashedPwd = await bcrypt.hash(req.body.password, 10);
				new NewUser({
					email    : req.body.email,
					password : hashedPwd,
				})
					// This saves the new user to the DB!
					.save();
				res.send('New User Created!!');
			}
			else {
				console.log('User with that email already exists');
				res.redirect('/');
			}
		} catch (e) {
			// Catching errors if there was anything  that when wrong when hashing the password
			console.log(e);
		}
	});
};

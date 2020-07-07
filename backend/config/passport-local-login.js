const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const NewUser = require('../models/NewUserSchema');
const bcrypt = require('bcrypt');

//Serializing and DeSerializing the user, to be used with cookies!
// This data gets passed to the cookie session. In our case the id gets passed in,
// in order to minimize the data!
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// Here we are deserializing the User when clearing the cookie!
// We're passing in the id and returning the user!
passport.deserializeUser((id, done) => {
	NewUser.findById(id, (err, user) => {
		done(err, user);
	});
});

// Using the local strategy here
passport.use(
	new LocalStrategy(
		{
			// Changing the default username field to email
			usernameField : 'email',
		},
		function (email, password, done){
			// Getting user from DB
			NewUser.findOne({ email: email }, async (err, user) => {
				console.log('Passport has found the user!');
				try {
					// 1st if statement: If error => stop
					if (err) done(err);
					// If no user run done function with null: no server error and false being no user
					if (!user) {
						return done(null, false, { message: 'User not found.' });
					}

					if (!await bcrypt.compare(password, user.password)) {
						return done(null, false, { message: 'Invalid password' });
					}
					else {
						// If all the if statements come back negative then run done with the user!
						return done(null, user);
					}
				} catch (err) {
					done(err);
				}
			});
		},
	),
);

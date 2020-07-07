const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport-local-login');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
	cookieSession({
		maxAge : 24 * 60 * 60 * 1000,
		keys   : [
			process.env.COOKIE_SECRET,
		],
	}),
);

// Initializing passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
	process.env.MONGODB_URI,
	{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
	() => {
		// ====================================================
		console.log('Connected to DB');
		// ====================================================
	},
);

app.use('/user', userRoute);

app.listen(process.env.PORT, () => {
	console.log(`Server is live on port ${process.env.PORT}`);
});

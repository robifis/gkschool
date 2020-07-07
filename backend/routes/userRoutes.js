const router = require('express').Router();
const userController = require('../controllers/userController');
const passport = require('passport');

router.post('/register', userController.createUser);
router.post(
	'/login',
	passport.authenticate('local', {
		successRedirect : 'http://localhost:3000/',
	}),
	(req, res) => {
		res.send('Login successful');
	},
);

module.exports = router;

// server.js

// require express framework and additional modules
var express = require('express'),
	app = express(),
	ejs = require('ejs'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	User = require('./models/user');

// connect to mongodb
mongoose.connect('mongodb://localhost/test');

// set view engine for server-side templating
app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({extended: true}));

// signup route with placeholder response
app.get('/signup', function (req, res) {
	res.send('Coming soon!');
});

// user submits the signup form
app.post('/users', function (req, res) {

	// grab user data from params (req.body)
	var newUser = req.body.user;

	// create new user with secure password
	User.createSecure(newUser.email, newUser.password, function (err, user) {
		res.send(user);
	});
});

// listen on port 3000
app.listen(3000, function () {
	console.log('I AM ALIVEEEEE!');
});
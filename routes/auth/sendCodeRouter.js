const express = require('express');

const { 
		sendCode
	} = require('./../../controllers/auth/authController');

const sendCodeRouter = express.Router();


sendCodeRouter
		.route('/')
		.post(sendCode);


module.exports = sendCodeRouter;

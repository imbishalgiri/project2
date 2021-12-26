const express = require('express');

const { sendCode, sendCodeTeacher } = require('./../../controllers/auth/authController');

const sendCodeRouter = express.Router();

sendCodeRouter.route('/').post(sendCode);

sendCodeRouter.route('/teacher').post(sendCodeTeacher);

module.exports = sendCodeRouter;

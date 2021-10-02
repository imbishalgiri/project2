const express = require('express');
const Notice = require('./../models/noticeModel');

const { createNotice, getNotice } = require('./../controllers/noticeController');

// const { 
// 	login,
// 	protect,
// 	restrictTo,
// 	signup
// } = require('./../controllers/auth/authController');

const noticeRouter = express.Router();

noticeRouter
	.route('/')
	.get(getNotice)
	.post(createNotice);




module.exports = noticeRouter;
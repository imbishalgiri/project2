const express = require('express');
const User = require('./../models/userModel');
const { 
	createUser, 
} = require('./../controllers/userController');

const { 
	login,
	protect,
	restrictTo,
	signup
} = require('./../controllers/auth/authController');


/* 
	@ROUTE prefix
	'/api/v1/users' 
*/
const userRouter = express.Router();

userRouter
	.route('/')
	.post(protect, restrictTo(['admin']), createUser);

// userRouter
// 	.route('/:id')
// 	.get(protect(Student), restrictTo(['student', 'admin']), getStudentById)
// 	.patch(updateStudentById);


// userRouter
// 	.route('/login')
// 	.post(login(Student));


module.exports = userRouter;
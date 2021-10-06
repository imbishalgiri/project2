const express = require('express');
const Student = require('./../models/studentModel');
const { 
	getAllStudents, 
	createStudent, 
	getStudentById, 
	updateStudentById
} = require('./../controllers/studentController');

const { 
	login,
	protect,
	restrictTo,
	signup
} = require('./../controllers/auth/authController');



const studentRouter = express.Router();

studentRouter
	.route('/')
	.get(getAllStudents)
	.post(signup);

studentRouter
	.route('/:id')
	.get(protect(Student), restrictTo(['student', 'admin']), getStudentById)
	.patch(updateStudentById);


studentRouter
	.route('/login')
	.post(login(Student));


module.exports = studentRouter;
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
/*

@ROUTE: ------->  api/v1/students
append to this route

*/ 

studentRouter
	.route('/')
	.get(protect, getAllStudents)
	.post(signup);

studentRouter
	.route('/:id')
	.get(protect , restrictTo(['student', 'admin']), getStudentById)
	.patch(updateStudentById);


studentRouter
	.route('/login')
	.post(login(Student));


module.exports = studentRouter;
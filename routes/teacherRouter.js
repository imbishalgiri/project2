const express = require('express');
const Teacher = require('./../models/teacherModel');
const { 

	createTeacher, 
	getAllTeachers,
	getTeacherById,
	updateTeacherById,
	addToPreTeacher
	
 } = require('./../controllers/teacherController.js');

 const { 
	login,
	protect,
	restrictTo,
	signup
} = require('./../controllers/auth/authController');

const teacherRouter = express.Router();

teacherRouter
	.route('/add')
	.post(addToPreTeacher)

teacherRouter
	.route('/')
	.get(getAllTeachers)
	.post(signup(Teacher));

teacherRouter
	.route('/:id')
	.get(getTeacherById)
	.patch(updateTeacherById);

teacherRouter
	.route('/login')
	.post(login(Teacher));



module.exports = teacherRouter;
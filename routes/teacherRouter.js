const express = require('express');
const Teacher = require('./../models/teacherModel');
const {
  createTeacher,
  getAllTeachers,
  getTeacherById,
  updateTeacherById,
  addToPreTeacher,
  showSubmittedAssignments
} = require('./../controllers/teacherController.js');

const {
  login,
  protect,
  restrictTo,
  signup,
  teacherSignup
} = require('./../controllers/auth/authController');

const teacherRouter = express.Router();

/*
	@ROUTE: api/v1/teachers
*/

teacherRouter
  .route('/showSubmittedAssignments/:faculty/:semester/:shift/:teachername')
  .get(showSubmittedAssignments);

teacherRouter.route('/add').post(addToPreTeacher);

teacherRouter.route('/').get(getAllTeachers).post(teacherSignup);

teacherRouter.route('/:id').get(getTeacherById).patch(updateTeacherById);

teacherRouter.route('/login').post(login(Teacher));

module.exports = teacherRouter;

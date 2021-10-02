const express = require('express');

const { 
		getAllSubmittedAssignments,
		createSubmittedAssignment,
		submittedAssignment
	} = require('./../controllers/submittedAssignmentController');

const submittedAssignmentRouter = express.Router();


submittedAssignmentRouter
			.route('/')
			.get(getAllSubmittedAssignments)
			.post(submittedAssignment, createSubmittedAssignment);


module.exports = submittedAssignmentRouter;
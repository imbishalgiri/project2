const express = require('express');

const { 
		getAllSubmittedAssignments,
		createSubmittedAssignment,
		submittedAssignment,
		updateSubmittedAssignment
	} = require('./../controllers/submittedAssignmentController');

const submittedAssignmentRouter = express.Router();


submittedAssignmentRouter
			.route('/')
			.get(getAllSubmittedAssignments )
			.post(submittedAssignment, createSubmittedAssignment);

submittedAssignmentRouter
			.route('/:id')
			.patch(updateSubmittedAssignment);


module.exports = submittedAssignmentRouter;
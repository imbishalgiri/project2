const express = require('express');


const { 
		getPublishedAssignments,
		createPublishedAssignment,
		publishAssignment
	} = require('./../controllers/publishedAssignmentController');


const publishedAssignmentRouter = express.Router();


publishedAssignmentRouter
		.route('/')
		.post(publishAssignment, createPublishedAssignment);

publishedAssignmentRouter
	.route('/:id')
	.get(getPublishedAssignments)


module.exports = publishedAssignmentRouter;

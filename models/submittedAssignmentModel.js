const mongoose = require('mongoose');

const submittedAssignmentSchema = new mongoose.Schema({

	file: {
		type: String,
		required: [true, 'please provide a file to the assignment'],
		trim: true
	},

	assignment: {
		type: mongoose.Schema.ObjectId,
		ref: 'PublishedAssignment'
	},

	student: {
		type: mongoose.Schema.ObjectId,
		ref: 'Student'
	},

	submittedAt: {
		type: Date,
		default: Date.now
	},

	remarks: {
		type: String,
		default: 'not graded'
	}, 

	faculty: {
		type: String
	},
	semester: {
		type: String
	}, 
	shift: {
		type: String
	},
	teacherName: {
		type: String
	}
});

submittedAssignmentSchema.pre(/^find/, function(next) {
	this.populate({
		path: "assignment"
	}).populate({
		path: "student"
	});
	next();
});

const SubmittedAssignment = mongoose.model('SubmittedAssignment', submittedAssignmentSchema);
module.exports = SubmittedAssignment;


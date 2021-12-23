const mongoose = require('mongoose');

const publishedAssignmentSchema = new mongoose.Schema({
  file: {
    type: String,
    required: [true, 'please provide a file to the assignment'],
    trim: true
  },

  teacherName: {
    type: String,
    required: [true, 'please provide teacher name'],
    trim: true
  },

  subjectName: {
    type: String,
    required: [true, 'please provide subject name'],
    trim: true
  },

  faculty: {
    type: String,
    required: [true, 'student gotta have faculty name'],
    enum: ['BESE', 'BEIT', 'BECE', 'BEELX', 'BECIVIL', 'BCA', 'BBA']
  },

  semester: {
    type: String,
    required: [true, 'student gotta be enrolling in at least a sem']
  },

  shift: {
    type: String,
    required: [true, 'there must be shift for a user'],
    trim: true,
    enum: ['day', 'morning']
  },

  description: String,

  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

publishedAssignmentSchema.index(
  { file: 1, subject: 1, faculty: 1, semester: 1, name: 1, description: 1 },
  { unique: true }
);

// // populating the subject path from subject model
// publishedAssignmentSchema.pre(/^find/, function(next) {
// 	this.populate({
// 		path: "subject"
// 	});
// 	next();
// });

const PublishedAssignment = mongoose.model('PublishedAssignment', publishedAssignmentSchema);
module.exports = PublishedAssignment;

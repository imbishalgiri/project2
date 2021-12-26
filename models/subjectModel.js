const mongoose = require('mongoose');
const validator = require('validator');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'subject must have a name'],
    trim: true
  },

  courseCode: {
    type: String,
    required: [true, 'code for subject is mandantory'],
    trim: true
  },

  faculty: {
    type: String,
    required: [true, 'please provide a faculty name'],
    trim: true,
    enum: ['BESE', 'BEIT', 'BECE', 'BEELX', 'BECIVIL', 'BCA', 'BBA']
  },

  semester: {
    type: Number,
    required: [true, 'semester is required'],
    trim: true,
    enum: [1, 2, 3, 4, 5, 6, 7, 8]
  },

  shift: {
    type: String,
    required: [true, 'please provide a shift'],
    trim: true,
    enum: ['day', 'morning']
  },

  teacher: {
    type: mongoose.Schema.ObjectId,
    ref: 'Teacher'
  }
});

subjectSchema.index(
  { name: 1, courseCode: 1, faculty: 1, semester: 1, teacher: 1 },
  { unique: true }
);

subjectSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'teacher',
    select: '-__v -password -_id'
  });
  next();
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;

const mongoose = require('mongoose');
const validator = require('validator');

const preTeacherSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, 'email is required'],
    unique: [true, 'this email has already been used'],
    lowercase: true,
    validate: [validator.isEmail, 'this is not a valid email']
  },

  role: {
    type: String,
    role: 'student'
  }
});

const PreTeacher = mongoose.model('PreTeacher', preTeacherSchema);
module.exports = PreTeacher;

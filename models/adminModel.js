const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: [true, 'email is required'],
    unique: [true, 'this email has already been used'],
    lowercase: true,
    validate: [validator.isEmail, 'this is not a valid email']
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: [8, 'password gotta be min 8 characters long']
  },
  role: {
    type: String,
    default: 'admin'
  }
});

adminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
});

adminSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;

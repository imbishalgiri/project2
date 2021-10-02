const mongoose = require('mongoose');
const validator = require('validator');
// const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		lowercase: true,
		required: [true, 'email is required'],
		unique: [true, 'this email has already been used'],
		lowercase: true,
		validate: [validator.isEmail, 'this is not a valid email']	
	},
	faculty: {
		type: String,
		required:[true, 'student gotta have faculty name'],
		default: 'software',
		enum: ['BESE', 'BEIT', 'BECE', 'BEELX', 'BECIVIL', 'BCA', 'BBA', 'software']
		
	},
	semester: {
		type: Number,
		required: [true, 'student gotta be enrolling in at least a sem'],
		default: 1
	},
	shift: {
		type: String,
		required: [true, 'there must be shift for a user'],
		trim: true,
		enum: ['day', 'morning']
	},
	rollNo: {
		type: Number,
		required: [true, 'student gotta have their roll number'],
		unique: [true, 'this roll number is already used'],
		default: 171743
	},
	role: {
		type: String,
		default: "student"
	}
});


const User = mongoose.model('User', userSchema);
module.exports = User;

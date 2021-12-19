const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema({

	firstName: {	
		type: String,
		required: [true, 'student gotta have their first name'],
		trim: true,
		maxLength: 15	
	},

	middleName: {
		type: String,
		trim: true,
		maxLength: 15
	},

	lastName: {
		type: String,
		required: [true, 'student gotta have their last name'],
		trim: true,
		maxLength: 15
	},

	img: String,

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
		default: "teacher"
	},

	user: {
		type: mongoose.Schema.ObjectId, 
		ref: 'PreTeacher' 
}

});

teacherSchema.pre(/^find/, function(next) {
	this.populate({
		path: "user"
	});
	next();
});

teacherSchema.pre('save', async function(next){
	if(!this.isModified('password')) return next();

	this.password = await bcrypt.hash(this.password, 12);

});


teacherSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
	return await bcrypt.compare(candidatePassword, userPassword);
}




const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;
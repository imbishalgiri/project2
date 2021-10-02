const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const codeSenderSchema = new mongoose.Schema({

	 email: {
		type: String,
		lowercase: true,
		required: [true, 'email is required'],
		unique: [true, 'this email has already been used'],
		lowercase: true,
		validate: [validator.isEmail, 'this is not a valid email']	
	},

	verificationCode: {
		type: String,
		required: [true, "verification code is necessary"]
	}

});

codeSenderSchema.pre('save', async function(next){
	if(!this.isModified('verificationCode')) return next();

	this.verificationCode = await bcrypt.hash(this.verificationCode, 12);

});

codeSenderSchema.methods.correctCode = async function(candidateCode, userCode) {
	return await bcrypt.compare(candidateCode, userCode);
}


const CodeSender = mongoose.model('CodeSender', codeSenderSchema);
module.exports = CodeSender;
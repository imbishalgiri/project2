const {promisify} = require('util');
const jwt = require('jsonwebtoken');
const AppErr = require('./../../utils/appErrors');
const Student = require('./../../models/studentModel');
const PreTeacher = require('./../../models/auth/PreTeacherModel');
const User = require('./../../models/userModel');
const CodeSender = require('./../../models/auth/codeSenderModel');
const catchAsync = require('./../../utils/catchAsync');
const getRandCode = require('./../../utils/getRandCode');
const mailSender = require('./../../utils/email');

const signToken = (id, firstName, lastName, role) => {
	return jwt.sign({ id, firstName, lastName, role }, process.env.JWT_SECRET_KEY, {
			expiresIn: process.env.JWT_EXPIRY
		});
}

exports.sendCode =  async (req, res, next) => {
	const verCode = getRandCode();

	if(!(await User.findOne({email: req.body.email}) || await PreTeacher.findOne({email: req.body.email}))) {
		return next(new AppErr('sorry you are not eligible'), 400);
	}

	try{
		await mailSender({
			email: req.body.email,
			verCode,
			sub: 'verification mail',
			msg: `please use this code to verify your email for our app. <br><strong> ${verCode}</strong>`
		});
		let userToBeVerified;
		const isUserAlreadyInThere = await CodeSender.findOne({email: req.body.email})
		if(isUserAlreadyInThere){
			isUserAlreadyInThere.overwrite({email: req.body.email,verificationCode: verCode})
			await isUserAlreadyInThere.save();
		} else {
			userToBeVerified = await CodeSender.create({
    		email: req.body.email, 
    		verificationCode: verCode
    	});
		}

		

		res.status(201).json({
			status: "success",
			data: userToBeVerified || isUserAlreadyInThere
		});
	} catch (err) {
		console.log(err);
		return next(new AppErr(`there was an error sending the mail`, 500));
	}

};


// signup function here
exports.signup = User => {
	return catchAsync(async (req, res, next) => {
	// 1. send the email first
	// const sentMail = mailSender(req.body.email);

	// 2. check whether the email and code in CodeSender model is matched
	const userTryinnaSignup = await CodeSender.findOne({email: req.body.email});
	console.log(userTryinnaSignup);
	console.log(req.body.verificationCode);
	console.log(await userTryinnaSignup.correctCode(req.body.verificationCode, userTryinnaSignup.verificationCode));
	if(!userTryinnaSignup || !(await userTryinnaSignup.correctCode(req.body.verificationCode, userTryinnaSignup.verificationCode))){
		return next(new AppErr('incorrect credentials', 401));
	}

	const userData = Object.keys(req.body).filter(key =>
    key !== 'verificationCode').reduce((obj, key) =>
    {
        obj[key] = req.body[key];
        return obj;
    }, {}
	);
	
	const newUser = await User.create(userData);

	const token = signToken(newUser._id, newUser.firstName, newUser.lastName, newUser.role);

	res.status(201).json({
		status: "success",
		token,
		data: {
			user: newUser
		}
	});
});
}



// login function here
exports.login = (User) => {
	return catchAsync( async (req, res, next) => {
		const { email, password } = req.body;

		// 1. check email and password exists

		if(!email || !password) {
			return next(new AppErr('please provide email and password'), 400);
		}

		// 2. check if user exists ans password is correct
		const user = await User.findOne({email: email});

		if(!user || !(await user.correctPassword(password, user.password))){
			return next(new AppErr('incorrect credentials', 401));
		}

		if(user.user) {
			console.log(user.user);
		}

		// 3. if all the conditions goes fine send token to the client
		const token = signToken(user._id, user.firstName, user.lastName, user.role);

		res.status(200).json({
			status: 'success',
			token
		});
	 
	});
}
		

exports.protect = (User) => {

	return catchAsync( async (req, res, next) => {
		// 1. getting the token and check whether it is there or not
		let token;
		if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
			token = req.headers.authorization.split(' ')[1];
		}

		if (!token) {
			return next(new AppErr('You are not logged in!!! please log in  first', 401));
		}
		// 2. verify the token
		const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

		// 3. check if user still exist
		const currentUser = await User.findById(decodedToken.id);
		if(!currentUser){
			return next(new AppErr('sorry user does not exist', 401));
		}

		// 4. check if user changed password after jwt is issued
		req.user = currentUser;
		console.log(req.user);
		next();
	});
}


exports.restrictTo = (arr) => {
	return (req, res, next) => {
		if(!arr.includes(req.user.role)) {
			return next( new AppErr('You do not have permission to do this activity', 403));
		}
		next();
	}
}
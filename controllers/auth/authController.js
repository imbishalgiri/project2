const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppErr = require('./../../utils/appErrors');
const Student = require('./../../models/studentModel');
const PreTeacher = require('./../../models/auth/PreTeacherModel');
const User = require('./../../models/userModel');
const Teacher = require('./../../models/teacherModel');
const Admin = require('./../../models/adminModel');
const CodeSender = require('./../../models/auth/codeSenderModel');
const catchAsync = require('./../../utils/catchAsync');
const getRandCode = require('./../../utils/getRandCode');
const mailSender = require('./../../utils/email');

const signToken = (...args) => {
  return jwt.sign(
    { id: args[0], firstName: args[1], lastName: args[2], role: args[3] || null },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.JWT_EXPIRY
    }
  );
};

exports.sendCode = async (req, res, next) => {
  const verCode = getRandCode();

  if (!(await User.findOne({ email: req.body.email }))) {
    return next(new AppErr('Sorry you can not have access.'), 400);
  }

  if (await Student.findOne({ email: req.body.email })) {
    return next(new AppErr('You are already Student.'), 400);
  }

  if (await Teacher.findOne({ email: req.body.email })) {
    return next(new AppErr('You are already Teacher.'));
  }

  try {
    await mailSender({
      email: req.body.email,
      verCode,
      sub: 'verification mail',
      msg: `please use this code to verify your email for our app. <br><strong> ${verCode}</strong>`
    });
    let userToBeVerified;
    const isUserAlreadyInThere = await CodeSender.findOne({ email: req.body.email });
    if (isUserAlreadyInThere) {
      isUserAlreadyInThere.overwrite({ email: req.body.email, verificationCode: verCode });
      await isUserAlreadyInThere.save();
    } else {
      userToBeVerified = await CodeSender.create({
        email: req.body.email,
        verificationCode: verCode
      });
    }

    res.status(201).json({
      status: 'success',
      data: userToBeVerified || isUserAlreadyInThere
    });
  } catch (err) {
    console.log(err);
    return next(new AppErr(`there was an error sending the mail`, 500));
  }
};

exports.sendCodeTeacher = async (req, res, next) => {
  const verCode = getRandCode();

  if (!(await PreTeacher.findOne({ email: req.body.email }))) {
    return next(new AppErr('sorry you are not eligible'), 400);
  }

  try {
    await mailSender({
      email: req.body.email,
      verCode,
      sub: 'verification mail',
      msg: `please use this code to verify your email for our app. <br><strong> ${verCode}</strong>`
    });
    let userToBeVerified;
    const isUserAlreadyInThere = await CodeSender.findOne({ email: req.body.email });
    if (isUserAlreadyInThere) {
      isUserAlreadyInThere.overwrite({ email: req.body.email, verificationCode: verCode });
      await isUserAlreadyInThere.save();
    } else {
      userToBeVerified = await CodeSender.create({
        email: req.body.email,
        verificationCode: verCode
      });
    }

    res.status(201).json({
      status: 'success',
      data: userToBeVerified || isUserAlreadyInThere
    });
  } catch (err) {
    console.log(err);
    return next(new AppErr(`there was an error sending the mail`, 500));
  }
};

exports.teacherSignup = catchAsync(async (req, res, next) => {
  // figure out whether the person trying to sign up is teacher.student
  // and get their id
  // for student get it from Users for teacher Get it from PreTeacher
  console.log(req.body);
  const preTeacher = await PreTeacher.findOne({ email: req.body.email });
  if (!preTeacher) {
    return next(new AppErr('you do not have access ', 401));
  }

  // 2. check whether the email and code in CodeSender model is matched
  const userTryinnaSignup = await CodeSender.findOne({ email: req.body.email });
  console.log(userTryinnaSignup);
  console.log(req.body.verificationCode);
  console.log(
    await userTryinnaSignup.correctCode(
      req.body.verificationCode,
      userTryinnaSignup.verificationCode
    )
  );
  if (
    !userTryinnaSignup ||
    !(await userTryinnaSignup.correctCode(
      req.body.verificationCode,
      userTryinnaSignup.verificationCode
    ))
  ) {
    return next(new AppErr('incorrect credentials', 401));
  }

  const userData = Object.keys(req.body)
    .filter((key) => key !== 'verificationCode')
    .reduce((obj, key) => {
      obj[key] = req.body[key];
      return obj;
    }, {});
  console.log('user data');
  console.log(userData);
  userData.user = preTeacher._id;
  const newUser = await Teacher.create(userData);

  const token = signToken(newUser._id, newUser.firstName, newUser.lastName, newUser.role);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
});

// signup function here
exports.signup = catchAsync(async (req, res, next) => {
  // figure out whether the person trying to sign up is teacher.student
  // and get their id
  // for student get it from Users for teacher Get it from PreTeacher

  student = await User.findOne({ email: req.body.email });
  if (!student) {
    return next(new AppErr('have no access', 401));
  }
  req.body.user = student._id;

  // 2. check whether the email and code in CodeSender model is matched
  const userTryinnaSignup = await CodeSender.findOne({ email: req.body.email });
  console.log(userTryinnaSignup);
  console.log(req.body.verificationCode);
  console.log(
    await userTryinnaSignup.correctCode(
      req.body.verificationCode,
      userTryinnaSignup.verificationCode
    )
  );
  if (
    !userTryinnaSignup ||
    !(await userTryinnaSignup.correctCode(
      req.body.verificationCode,
      userTryinnaSignup.verificationCode
    ))
  ) {
    return next(new AppErr('incorrect credentials', 401));
  }

  const userData = Object.keys(req.body)
    .filter((key) => key !== 'verificationCode')
    .reduce((obj, key) => {
      obj[key] = req.body[key];
      return obj;
    }, {});
  console.log('user data');
  console.log(userData);
  const newUser = await Student.create(userData);

  const token = signToken(newUser._id, newUser.firstName, newUser.lastName, newUser.role);

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser
    }
  });
});

// login function here
exports.login = (User) => {
  return catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // 1. check email and password exists

    if (!email || !password) {
      return next(new AppErr('please provide email and password'), 400);
    }

    // 2. check if user exists ans password is correct
    const user = await User.findOne({ email: email });

    if (!user || !(await user.correctPassword(password, user.password))) {
      return next(new AppErr('incorrect credentials', 401));
    }

    // 3. Sending token to the user
    if (user.role === 'admin' || 'teacher') {
      const token = signToken(user._id, user.firstName, user.lastName, user.role);
      res.status(200).json({
        status: 'success',
        token
      });
    }
    console.log(user);

    // 4. if all the conditions goes fine send token to the client
    const token = signToken(user._id, user.firstName, user.lastName, user.user.role);
    res.status(200).json({
      status: 'success',
      token
    });
  });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1. getting the token and check whether it is there or not
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppErr('You are not logged in!!! please log in  first', 401));
  }
  // 2. verify the token
  const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

  // console.log(decodedToken);

  // 3. check if user still exist
  const Users = {
    teacher: Teacher,
    student: Student
  };
  const User = Users[decodedToken.role] || Admin;
  const currentUser = await User.findById(decodedToken.id);
  if (!currentUser) {
    return next(new AppErr('sorry user does not exist', 401));
  }
  // console.log(currentUser);
  // 4. check if user changed password after jwt is issued
  currentUser.user.role = currentUser.user.role || 'admin';
  req.user = currentUser;
  next();
});

exports.restrictTo = (arr) => {
  return (req, res, next) => {
    if (!arr.includes(req.user.user.role)) {
      return next(new AppErr('You do not have permission to do this activity', 403));
    }
    next();
  };
};

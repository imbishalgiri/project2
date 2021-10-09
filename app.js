const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');

const appError = require('./utils/appErrors');

const studentRouter = require('./routes/studentRouter');
const teacherRouter = require('./routes/teacherRouter');
const subjectRouter = require('./routes/subjectRouter');
const adminRouter = require('./routes/adminRouter');
const userRouter = require('./routes/userRouter');
const routineRouter = require('./routes/routineRouter');
const publishedAssignmentRouter = require('./routes/publishedAssignmentRouter');
const submittedAssignmentRouter = require('./routes/submittedAssignmentRouter');
const sendCodeRouter = require('./routes/auth/sendCodeRouter');
const noticeRouter = require('./routes/noticeRouter');
const postRouter = require('./routes/postRouter');
// const noticeRouter = require('./routes/noticeRouter');
// const assignmentRouter = require('./routes/assignmentRouter');

const app = express();


if(process.env.NODE_ENV === 'development'){
	app.use(morgan('dev'));
}
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(compression());

// serving static files thru express
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

/*

	@ROUTES Handler
	this is a section to control all the routes

*/

app.use('/api/v1/students', studentRouter);
app.use('/api/v1/teachers', teacherRouter);
app.use('/api/v1/subjects', subjectRouter);
app.use('/api/v1/admins', adminRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/routines', routineRouter);
app.use('/api/v1/publishedAssignment', publishedAssignmentRouter);
app.use('/api/v1/submittedAssignment', submittedAssignmentRouter);
app.use('/api/v1/sendCode', sendCodeRouter);
app.use('/api/v1/notice', noticeRouter);
app.use('/api/v1/posts', postRouter);

app.all('*', (req, res, next) => {
	const err = new appError(`can't find ${req.originalUrl} route on this server`, 404);
	next(err);
});

/*
	
	@ERROR MIDDLEWARE
	this middleware(error first) tells the express
	that this is an error middleware

*/ 

app.use((err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';


	res.status(err.statusCode).json({
		status: err.status,
		message: err.message
	});
});






module.exports = app;


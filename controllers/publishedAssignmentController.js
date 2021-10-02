const multer = require('multer');

const PublishedAssignment = require('./../models/publishedAssignmentModel');
const SubmittedAssignment = require('./../models/submittedAssignmentModel');
const Student = require('./../models/studentModel');

const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');


// Multer configuration
const multerStorage = multer.diskStorage({
	destination: function (req, file, cb) {
    cb(null, 'public/assignments/published');
  },
  filename: function (req, file, cb) {
  	// user-id-timestamp.extension
  	// const extension = file.mimetype.split('/')[1];
    cb(null, `assignment-${Date.now()}-${file.originalname}`);
  }
});


const upload = multer({ storage: multerStorage });

exports.publishAssignment = upload.single('myFile');


// adding assignment to the assignment collection
exports.createPublishedAssignment = catchAsync( async (req, res) => {
	console.log(req.file);
	console.log(req.body);
	req.body.file = req.file.filename;
	const newAssignment = await PublishedAssignment.create(req.body);

	res.status(201).json({
		status: "success",
		data: {
			assignment: newAssignment
		}
	});
});

// // getting all the datas from asssignment collection
// exports.getAllPublishedAssignments = catchAsync(async (req, res) => {

// 		const publishedAssignments = await PublishedAssignment.find({});

// 		res.status(201).json({
// 			status: 'success',
// 			results: assignments.length,
// 			data: {
// 				assignments
// 			}
// 		});
// });

exports.getPublishedAssignments = catchAsync(async (req, res) => {

	// const studentID = req.body.id;
	const student = await Student.findById(req.params.id);
	const { faculty, semester, shift } = student.user;
	const assignments = await PublishedAssignment.find({faculty, semester, shift});
	const newAssignments = [];

	for(let i = 0; i <assignments.length; i++){
		newAssignments[i] = Object.assign({}, assignments[i]);
		const submittedAssignment = await SubmittedAssignment.findOne({assignment: {_id: assignments[i]._id}});
		if(submittedAssignment) {
			newAssignments[i]._doc.status = submittedAssignment.remarks;
		}

	}
	console.log(newAssignments);
	res.status(201).json({
		status: 'success',
		data: {
			assignments: newAssignments
		}
	});



});
const Student = require('./../models/studentModel');

const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// adding student to the database
exports.createStudent = catchAsync( async (req, res) => {

	const user = await User.findOne({email: req.email});
	req.body.user = user._id;
	console.log(req.body);
	const newStudent = await Student.create(req.body);

	res.status(201).json({
		status: "success",
		data: {
			student: newStudent
		}
	});
});

// getting all the datas from student collection
exports.getAllStudents = catchAsync(async (req, res) => {
		const students = await Student.find({});

		res.status(201).json({
			status: 'success',
			results: students.length,
			data: {
				students
			}
		});
});

// Getting student when ID is provided
exports.getStudentById = catchAsync(async (req, res, next) => {
		const student = await Student.findById(req.params.id);
		console.log(student);
		if(!student) {
			return next(new appErr('sorry the student does not exist', 404));
		}

		res.status(201).json({
			status: 'success',
			data: {
				student
			}
		});
});
 
// updating students whilst their Id is provided
exports.updateStudentById = catchAsync(async(req, res) => {

		const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		if(!updatedStudent) {
			return next(new appErr('cannot find student for this ID', 404));
		}

		res.status(201).json({
			status: "success",
			data: {
				updatedStudent
			}
		});

});




const SubmittedAssignment = require('./../models/submittedAssignmentModel');
const Teacher = require('./../models/teacherModel');
const PreTeacher = require('./../models/auth/PreTeacherModel');

const catchAsync = require('./../utils/catchAsync');
const appErr = require('./../utils/appErrors');

/// adding teacher to the database
exports.createTeacher = catchAsync(async (req, res) => {
		const newTeacher = await Teacher.create(req.body);

	    res.status(201).json({
			status: "success",
			data: {
				teacher: newTeacher
			}
		});
});

// getting all the datas from teachers collection
exports.getAllTeachers = catchAsync(async (req, res) => {

		const teachers = await Teacher.find({});

		res.status(201).json({
			status: 'success',
			results: teachers.length,
			data: {
				teachers
			}
		});
});

// Getting Student when ID is provided
exports.getTeacherById = catchAsync(async (req, res, next) => {
		const teacher = await Teacher.findById(req.params.id);

		if(!teacher) {
			return next(new appErr('cannot find teacher for this ID', 404));
		}

		res.status(201).json({
			status: 'success',
			data: {
				teacher
			}
		});
});

// updating teacher whilst their Id is provided
exports.updateTeacherById = catchAsync(async(req, res) => {

		const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});

		res.status(201).json({
			status: "success",
			data: {
				updatedTeacher
			}
		});

});

// adding teacher to provide them signup privillege
exports.addToPreTeacher = catchAsync(async (req, res) => {
		const newPreTeacher= await PreTeacher.create(req.body);

	    res.status(201).json({
			status: "success",
			data: {
				preTeacher: newPreTeacher
			}
		});
});


// viewing the assignments uploaded by the students
exports.showSubmittedAssignments = catchAsync(async (req, res) => {
	const { teachername, faculty, semester, shift } = req.params;
	// console.log(req.body);
	// const assignment = await SubmittedAssignment.find({$and: [
	// 	{faculty: facultyName},
	// 	{semester: sem},
	// 	{shift: shift},
	// 	{teacherName: teacherName}
	// ]});
	// console.log(teacherName);
	// console.log(facultyName);
	// console.log(semester);
	// console.log(shift);

	const assignment = await SubmittedAssignment.find({
		faculty: faculty,
		semester: semester,
		shift: shift,
		teacherName: teachername
	});

	console.log(assignment);
	res.status(201).json({
		status: "success",
		data: {
			assignment
		}
	});

});


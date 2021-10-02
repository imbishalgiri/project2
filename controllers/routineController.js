const Routine = require('./../models/routineModel');
const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// adding routine to the collection
exports.createRoutine = catchAsync( async (req, res) => {
	const newRoutine = await Routine.create(req.body);

	res.status(201).json({
		status: "success",
		data: {
			routine: newRoutine
		}
	});
});

// getting all the datas from routines collection
exports.getAllRoutines = catchAsync(async (req, res) => {

		const routines = await Routine.find({});

		res.status(201).json({
			status: 'success',
			results: routines.length,
			data: {
				routines
			}
		});
});
const multer = require('multer');
const SubmittedAssignment = require('./../models/submittedAssignmentModel');
const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// Multer configuration
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assignments/submitted');
  },
  filename: function (req, file, cb) {
    // user-id-timestamp.extension
    // const extension = file.mimetype.split('/')[1];
    cb(null, `assignment-${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: multerStorage });

exports.submittedAssignment = upload.single('myFile');

// adding assignment to the assignment collection
exports.createSubmittedAssignment = catchAsync(async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  req.body.file = req.file.filename;
  const newAssignment = await SubmittedAssignment.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      assignment: newAssignment
    }
  });
});

// getting all the datas from asssignment collection
exports.getAllSubmittedAssignments = catchAsync(async (req, res) => {
  const assignments = await SubmittedAssignment.find({});

  res.status(201).json({
    status: 'success',
    results: assignments.length,
    data: {
      assignments
    }
  });
});

// updating submitted assignment whilst their Id is provided
exports.updateSubmittedAssignment = catchAsync(async (req, res, next) => {
  const updatedAssignment = await SubmittedAssignment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    useFindAndModify: false,
    runValidators: true
  });

  if (!updatedAssignment) {
    return next(new appErr('cannot find assignment for this ID', 404));
  }

  res.status(201).json({
    status: 'success',
    data: {
      updatedAssignment
    }
  });
});

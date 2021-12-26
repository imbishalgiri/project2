const Subject = require('./../models/subjectModel');
const catchAsync = require('./../utils/catchAsync');
const appErr = require('./../utils/appErrors');

/// adding subject to the database
exports.createSubject = catchAsync(async (req, res, next) => {
  if (await Subject.findOne(req.body)) {
    return next(new appErr('this element is already present', 406));
  }

  const newSubject = await Subject.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      subject: newSubject
    }
  });
});

// getting all the datas from subjects collection
exports.getAllSubjects = catchAsync(async (req, res) => {
  const subjects = await Subject.find({});

  res.status(201).json({
    status: 'success',
    results: subjects.length,
    data: {
      subjects
    }
  });
});

// Getting SUBJECT when ID is provided
exports.getSubjectById = catchAsync(async (req, res, next) => {
  const subject = await Subject.findById(req.params.id);

  if (!subject) {
    return next(new appErr('cannot find subject for this ID', 404));
  }

  res.status(201).json({
    status: 'success',
    data: {
      subject
    }
  });
});

// updating subject whilst their Id is provided
exports.updateSubjectById = catchAsync(async (req, res) => {
  const updatedSubject = await Subject.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(201).json({
    status: 'success',
    data: {
      updatedSubject
    }
  });
});

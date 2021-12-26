const Notice = require('./../models/noticeModel');
const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// adding student to the database
exports.createNotice = catchAsync(async (req, res) => {
  const newNotice = await Notice.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      notice: newNotice
    }
  });
});

exports.getNotice = catchAsync(async (req, res) => {
  const allNotices = await Notice.find({});

  res.status(201).json({
    status: 'success',
    data: {
      notices: allNotices
    }
  });
});

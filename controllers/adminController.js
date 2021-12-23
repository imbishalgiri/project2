const Admin = require('./../models/adminModel');
const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// adding student to the database
exports.createAdmin = catchAsync(async (req, res) => {
  const newAdmin = await Admin.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      admin: newAdmin
    }
  });
});

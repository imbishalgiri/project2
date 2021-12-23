const AppErr = require('./appErrors');

const catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => next(new AppErr(err, 400)));
  };
};

module.exports = catchAsync;

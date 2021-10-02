const appErr = require('./appErrors');

const catchAsync = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch( err => next(new appErr(err, 400)) );	
	}
}

module.exports = catchAsync;
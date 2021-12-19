const AppError = require('./../../utils/appErrors');
const handleCastError = (error) => {
    const newMessage = `Invalid ${error.message.path}: ${error.message.value}`
    return new AppError(newMessage, 400);
}

const sendErrorDev = (err, res) => {
        res.status(err.statusCode).json({
            error: err.message,
            status: err.status,
            stack: err.stack,
            name: err.name,
            err
        });
}


const sendErrorProd  = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
}


module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

    if(process.env.NODE_ENV === 'development'){
        sendErrorDev(err, res);
    }

    if(process.env.NODE_ENV === 'production'){
        let newError;
        if(err.message.name === 'CastError'){
            newError = handleCastError(err);
            sendErrorProd(newError, res);
        }
        sendErrorProd(err, res);
        
    }

}
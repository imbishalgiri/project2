const express = require('express');

const { createRoutine, getAllRoutines } = require('./../controllers/routineController');

const routineRouter = express.Router();

routineRouter.route('/').get(getAllRoutines).post(createRoutine);

module.exports = routineRouter;

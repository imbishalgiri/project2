const express = require('express');
const Admin = require('./../models/adminModel');

const { createAdmin } = require('./../controllers/adminController');

const { login, protect, restrictTo, signup } = require('./../controllers/auth/authController');

const adminRouter = express.Router();

/*
@ROUTE: /api/v1/admins
*/

adminRouter.route('/').post(createAdmin);

adminRouter.route('/login').post(login(Admin));

module.exports = adminRouter;

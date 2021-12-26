const express = require('express');
const {
  getAllSubjects,
  createSubject,
  getSubjectById,
  updateSubjectById
} = require('./../controllers/subjectController');

const subjectRouter = express.Router();

subjectRouter.route('/').get(getAllSubjects).post(createSubject);

subjectRouter.route('/:id').get(getSubjectById).patch(updateSubjectById);

module.exports = subjectRouter;

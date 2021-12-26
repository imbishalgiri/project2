const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const noticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A notice gotta have a title']
  },

  description: {
    type: String,
    required: [true, 'A notice gotta have a description']
  }
});

const Notice = mongoose.model('Notice', noticeSchema);
module.exports = Notice;

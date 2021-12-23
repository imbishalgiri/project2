const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema({
  faculty: {
    type: String,
    required: [true, 'routine gotta have faculty name'],
    enum: ['BESE', 'BEIT', 'BECE', 'BEELX', 'BECIVIL', 'BCA', 'BBA']
  },

  semester: {
    type: Number,
    required: [true, 'routine gotta have a sem']
  },

  shift: {
    type: String,
    required: [true, 'there must be shift of a routine '],
    trim: true,
    enum: ['day', 'morning']
  },

  day: {
    sunday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    monday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    tuesday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    wednesday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    thursday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    friday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }],
    saturday: [{ type: mongoose.Schema.ObjectId, ref: 'Subject' }]
  }
});

routineSchema.index(
  {
    faculty: 1,
    semester: 1,
    day: { sunday: 1, monday: 1, tuesday: 1, wednesday: 1, thursday: 1, friday: 1 }
  },
  { unique: true }
);

// populating the day path from subject model
routineSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'day',
    populate: {
      path: 'sunday monday tuesday wednesday thursday friday saturday'
    }
  });
  next();
});

const Routine = mongoose.model('Routine', routineSchema);
module.exports = Routine;

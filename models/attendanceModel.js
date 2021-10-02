const mongoose = required('mongoose');

const attendanceSchema = new mongoose.Schema({

	 studentId: {
	 	type: Schema.Types.ObjectId,
	 	ref: 'students'
	 },

	  subjectId: {
	  	type: Schema.Types.ObjectId,
	  	ref: 'subjects'
	  }

});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
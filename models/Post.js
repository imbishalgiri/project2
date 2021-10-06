const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  comments: [
  {
    user: {
      type: String,
    },
    des: {
      type: String
    }
  }
  ]
});

// PostSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: "sudent"
//   });
//   next();
// });

module.exports = Post = mongoose.model('post', PostSchema);



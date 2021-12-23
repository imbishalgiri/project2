const Post = require('./../models/Post');
const catchAsync = require('./../utils/catchAsync');

const appErr = require('./../utils/appErrors');

// adding Post to the database
exports.createPost = catchAsync(async (req, res) => {
  const newPost = await Post.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      post: newPost
    }
  });
});

// getting all the posts
exports.getAllPosts = catchAsync(async (req, res) => {
  const allPosts = await Post.find({});

  res.status(201).json({
    status: 'success',
    data: {
      posts: allPosts
    }
  });
});

// adding comment to the post
exports.addComment = catchAsync(async (req, res) => {
  const { id, comment } = req.body;
  const post = await Post.update({ _id: id }, { $push: { comments: comment } });

  res.status(201).json({
    status: 'success',
    data: {
      post
    }
  });
});

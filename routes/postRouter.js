const express = require('express');

const { 
		createPost,
		getAllPosts,
		addComment
	} = require('./../controllers/postController');

const postRouter = express.Router();


postRouter
	.route('/')
	.get(getAllPosts)
	.post(createPost)
	.patch(addComment);


module.exports = postRouter;

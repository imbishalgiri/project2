import React from 'react';

const PostComment = ({ comment }) => {
  const comments = comment.map((comment, index) => {
    console.log('commentsssssss');
    console.log(comment);
    return (
      <div className="comment mb-5" key={index}>
        <p className="text-left">
          <h6>{comment.user}</h6>
        </p>
        <p className="lead">
          <em>{comment.des}</em>
        </p>
      </div>
    );
  });

  return <div>{comments}</div>;
};

export default PostComment;

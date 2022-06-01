import React from 'react';

const CommentList = ({ comments }) => {
    console.log(comments)
    return (
      <div className="text-center p-6">
        {comments &&
          comments.map((comment) => (
            <p className="pill mb-3 text-black" key={comment._id}>
              {comment.commentBody} {"// "}
              {comment.username} on {comment.createdAt}
            </p>
          ))}
      </div>
    );
}

export default CommentList;
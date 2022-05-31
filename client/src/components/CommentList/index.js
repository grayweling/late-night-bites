import React from 'react';

const CommentList = ({ comments }) => {
    console.log(comments)
    return (
      <div className="text-center p-6">
        <h3 className="description text-[#BE95FA] mb-4">
          Map comment list here
        </h3>
        {comments &&
          comments.map((comment) => (
            <p className="pill mb-3 text-black" key={comment._id}>
              {comment.commentBody} {"// "}
              {comment.username} on {comment.createdAt} {comment._id}
            </p>
          ))}
      </div>
    );
}

export default CommentList;
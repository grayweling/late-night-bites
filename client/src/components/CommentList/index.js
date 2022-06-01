import React from "react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    <article className="m-4 testimonial text-center">
      {comments &&
        comments.map((comment) => (
          <div className="flex justify-center">
            <div className="mas-w-3xl">
              <div className="block p-6 rounded-lg shadow-lg bg-white m-4">
                <div className="md:flex md:flex-row">
                  <div className="md:ml-6">
                    <p
                      className="username font-semibold text-xl mb-2 text-gray-800"
                      key={comment.id}
                    >
                      {comment.username} on {comment.createdAt}
                    </p>

                    <p
                      className="userComments text-gray-500 font-light mb-6"
                      key={comment.id}
                    >
                      {comment.commentBody}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </article>
  );
};

export default CommentList;
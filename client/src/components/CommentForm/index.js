import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../../utils/mutations";

const CommentForm = ({ restaurantId }) => {
  console.log(restaurantId);
  const [commentBody, setText] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentBody, restaurantId },
      });

      setText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="text-center">
      <form onSubmit={handleFormSubmit}>
        <textarea
          className="rounded text-center w-full mb-4 text-black mt-4"
          name="description"
          rows="4"
          cols="50"
          autoFocus={true}
          type="submit"
          value={commentBody}
          onChange={handleChange}
          required=""
          placeholder="Enter comment or feedback here!"
        />
        <button
          type="submit"
          className="inline-block px-6 py-2.5 bg-[#BE95FA] text-white font-medium text-lg leading-tight uppercase rounded-full shadow-md hover:bg-[#16AC97] hover:shadow-lg focus:bg-[#16AC97] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#16AC97] active:shadow-lg transition duration-150 ease-in-out"
        >
          <i className="fa-brands fa-creative-commons-share fa-lg"></i>
          <h3 className="text-center">Click to Share</h3>
        </button>
      </form>
    </section>
  );
};

export default CommentForm;
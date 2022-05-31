import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../../utils/mutations';

const ThoughtForm = () => {
    const [commentBody, setText] = useState('');
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
                variables: { commentBody }
            });

            setText('');

        } catch (e) {
            console.error(e);
        }
    }

  return (
    <div>
      {/* <p className="text-[#BE95FA]">Character Count: 0/280</p> */}
      <form className="flex flex-col m-2" onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Add a new comment!"
          className="form-input text-[#BE95FA]"
        ></textarea>
        <button className="btn text-[#BE95FA]" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
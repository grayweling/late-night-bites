import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_RESTAURANT } from '../../utils/mutations';

const DeleteRestaurant = ({restaurantId}) => {
    const [deleteRestaurant, { error }] = useMutation(DELETE_RESTAURANT);
    console.log(restaurantId)

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await deleteRestaurant({
                variables: {restaurantId}
            })

            window.location.assign("/");

        } catch (e) {
            console.error(e);
        }
    }
    return (
      <div className="text-center">
        <button
          className="text-black hover:text-[#BE95FA]"
          onClick={handleClick}
        >
          Delete Restaurant
        </button>
      </div>
    );

};

export default DeleteRestaurant;
import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_RESTAURANT } from '../../utils/mutations';
import { useParams } from 'react-router-dom';
// import Auth from '../utils/auth';

const DeleteRestaurant = ({restaurantId}) => {
    const [deleteRestaurant, { error }] = useMutation(DELETE_RESTAURANT);
    console.log(restaurantId)

    const handleClick = async (event) => {
        event.preventDefault();
        try {
            await deleteRestaurant({
                variables: {restaurantId}
            })
        } catch (e) {
            console.error(e);
        }
    }
    return (
        <button className="text-black" onClick={handleClick}>Delete</button>
    )

};

export default DeleteRestaurant;
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateformat');

const restaurantSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            //I'm not super sure how to implement an image here yet
        },
        comments: [
            //unsure what we will be putting here yet
        ]
    },
    {
        toJSON: {
            getters: true,
        }
    }
) 

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
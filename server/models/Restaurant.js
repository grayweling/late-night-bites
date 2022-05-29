const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
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
        foodType: {
            type: String
        },
        image: {
            //I'm not super sure how to implement an image here yet
        },
        rating: {
            type: Number,
            required: false
        },
        comments: [commentSchema],
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

restaurantSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Restaurant = model('Restaurant', restaurantSchema);

module.exports = Restaurant;
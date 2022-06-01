const { User, Restaurant } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { Types } = require('mongoose');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("restaurants");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("restaurants");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("restaurants");
    },
    restaurant: async (parent, { _id }) => {
      return Restaurant.findOne({ _id });
    },
    restaurants: async (parent, { username }) => {
      //optional search by username
      const params = username ? { username } : {};

      //sort in descending order by createdAt
      return Restaurant.find(params).sort({ createdAt: -1 });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect login credentials");
      }

      const correctPW = await user.isCorrectPassword(password); //TODO: add method in User model
      if (!correctPW) {
        throw new AuthenticationError("Incorrect login credentials");

      }

      const token = signToken(user);
      return { token, user };
    },
    addRestaurant: async (parent, { content }, context) => {
      //check if user is logged in
      if (context.user) {
       content.userId= context.user._id;
        console.log("new:", content);
        const restaurant = await Restaurant.create(content);
        console.log(context.user._id);
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { restaurants: restaurant._id } },
          { new: true }
        );

        return restaurant;
      }

      throw new AuthenticationError("You need to be logged in!")
    },
    addComment: async (parent, { restaurantId, commentBody }, context) => {
      //check if user is logged in
      if (context.user) {
        const updatedRestaurant = await Restaurant.findOneAndUpdate(
          { _id: restaurantId },
          {
            $push: {
              comments: { commentBody, username: context.user.username }
            }
          },
          { new: true, runValidator: true }
        )
        return updatedRestaurant;
      }

      throw new AuthenticationError("You need to be logged in");
    },
    deleteRestaurants: async () => {
      return Restaurant.deleteMany({})
    },
    deleteRestaurant: async (parent, {restId}, context) => {
      if (context.user) {
        console.log("Rest2:", restId);
        return Restaurant.findByIdAndRemove(
          {_id: restId}
        )
      }
      throw new AuthenticationError("You cannot delete a comment that is not yours");
    }
  },
};

module.exports = resolvers;
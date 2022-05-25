const { User, Restaurant } = require("../models");
//TODO: uncomment when authorization is set up
// const { AuthenticationError } = require("apollo-server-express");
// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //TODO: uncomment when authentication is set up
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     const userData = await User.findOne({ _id: context.user._id })
    //       .select("-__v -password")
    //       .populate("restaurants");

    //     return userData;
    //   }

    //   throw new AuthenticationError("Not logged in");
    // },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("restaurants");
    },
    users: async () => {
        return User.find()
            .select("-__v -password")
            .populate("restaurants");
    },
    restaurant: async (parent, { _id }) => {
        return Restaurant.findOne({ _id });
    },
    restaurants: async (parent, {username }) => {
        //optional search by username
        const params = username ? { username } : {};

        //sort in descending order by createdAt
        return Restaurant.find(params).sort({ createdAt: -1 });
    }
  },
};

module.exports = resolvers;

const { User, Restaurant } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
//TODO: uncomment when authorization is set up
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
    },
  },
  Mutation: {
    addUser: async (parent, {args}) => {
      const user = await User.create(args);
      //TODO: uncomment when authentication is set up
      // const token = signToken(user);

      return { user };
      //TODO: uncomment below and delete above when authentication is set up
      // return { token, user };
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

        // const token = signToken(user);
        // return {token, user};
        return {user};
    }
  },
};

module.exports = resolvers;

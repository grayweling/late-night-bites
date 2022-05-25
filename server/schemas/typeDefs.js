const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    restaurants: [Restaurant]
  }
  type Restaurant {
    _id: ID
    restaurantText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
  type Query {
      users: [User]
      user(username: String!): User
      restaurants(username: String): [Restaurant]
      restaurant(_id: ID!): Restaurant
  }
  type Mutation {
      login(email: String!, password: String!): User
      addUser(username: String!, email: String!, password: String!): User
      addRestaurant(restaurantText: String!): Restaurant
      addComment(restaurantId: ID!, commentBody: String): Restaurant
  }
`;

module.exports = typeDefs;

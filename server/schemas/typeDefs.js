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
  type Auth {
      token: ID!
      user: User
  }
  type Query {
      me: User
      users: [User]
      user(username: String!): User
      restaurants(username: String): [Restaurant]
      restaurant(_id: ID!): Restaurant
  }
  type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addRestaurant(restaurantText: String!): Restaurant
      addComment(restaurantId: ID!, commentBody: String): Restaurant
  }
`;

module.exports = typeDefs;

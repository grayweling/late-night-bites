const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    restaurants: [Restaurant]
  }
  type Restaurant {
    _id: ID
    name: String
    address: String
    description: String
    foodType: String
    rating: Int
    commentCount: Int
    comments: [Comment]
    createdAt: String
    userId: String
  }

  type Comment {
    _id: ID
    commentBody: String
    username: String
    createdAt: String
  }
  type Auth {
      token: ID!
      user: User
  }

  input RestaurantInput {
    name: String
    address: String
    description: String
    foodType: String
    userId: String
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
      addRestaurant(content: RestaurantInput): Restaurant
      addComment(restaurantId: ID!, commentBody: String): Restaurant
      deleteRestaurants: Restaurant
      deleteRestaurant(restaurantId: ID!): Restaurant
  }
`;

module.exports = typeDefs;
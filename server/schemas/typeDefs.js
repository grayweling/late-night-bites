const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type File {
        filename: String!
        mimetype: String!
        encoding: String!
      }

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
    image: String
    rating: Int
    comments: [Comment]
    createdAt: String
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
    image: String
  }

  type Query {
      me: User
      users: [User]
      user(username: String!): User
      restaurants(username: String): [Restaurant]
      restaurant(_id: ID!): Restaurant
  }
  type Mutation {
      uploadFile(file: Upload!): File!
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      addRestaurant(content: RestaurantInput): Restaurant
      addComment(restaurantId: ID!, commentBody: String): Restaurant
      deleteRestaurants: Restaurant
  }
`;

module.exports = typeDefs;
import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RESTAURANT = gql`
  mutation addRestaurant($content: RestaurantInput!) {
    addRestaurant(content: $content) {
        _id
        name
        address
        description
        foodType
        comments {
            commentBody
            username
        }
    }
  }
`;

export const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload) {
    uploadFile(file: $file) {
        url
        }
    }
`;
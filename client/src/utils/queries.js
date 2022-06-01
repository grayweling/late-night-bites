import { gql } from '@apollo/client';

export const RESTAURANTS = gql`  
{
  restaurants {
    _id
    name
    address
    description
    foodType
    userId
    rating
    comments {
        _id
        commentBody
        username
    }
  }
}
`;

export const GET_RESTAURANT = gql`  
query restaurant($id: ID!) {
  restaurant(_id: $id) {
      _id
      name
      address
      description
      foodType
      userId
      comments {
          commentBody
          username
      }
  }
}
`;

export const GET_ME = gql`  
{
  me {
      _id
      username
      email
      restaurants {
        _id
      }
}
}
`;
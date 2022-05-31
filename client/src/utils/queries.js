import { gql } from '@apollo/client';

export const RESTAURANTS = gql`  
{
  restaurants {
    _id
    name
    address
    description
    foodType
    image
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
      comments {
          commentBody
          username
      }
  }
}
`;
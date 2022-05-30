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
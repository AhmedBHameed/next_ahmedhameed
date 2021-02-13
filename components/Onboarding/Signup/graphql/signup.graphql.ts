import {gql} from '@apollo/client';

const SIGNUP_QUERY = gql`
  mutation Signup($userData: Signup!) {
    signup(userData: $userData) {
      message
    }
  }
`;

export default SIGNUP_QUERY;

import {gql} from '@apollo/client';

const LOGIN_QUERY = gql`
  query Login($userData: LoginDataInput!) {
    login(userData: $userData) {
      accessToken
      refreshToken
      userRole
    }
  }
`;

export default LOGIN_QUERY;

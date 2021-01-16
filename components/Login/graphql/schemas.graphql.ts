import {gql} from '@apollo/client';

const LOGIN_QUERY = gql`
  query GenerateTokens($userData: LoginDataInput!) {
    generateTokens(userData: $userData) {
      accessToken
      refreshToken
      userRole
    }
  }
`;

export default LOGIN_QUERY;

import {gql} from '@apollo/client';

const RESET_PASSWORD = gql`
  mutation ResetPassword($userData: ResetPasswordInput!) {
    resetPassword(userData: $userData) {
      message
    }
  }
`;

export default RESET_PASSWORD;

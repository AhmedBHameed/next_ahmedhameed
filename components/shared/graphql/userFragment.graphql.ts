import {gql} from '@apollo/client';

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    name {
      first
      last
    }
    email
    status
    verificationId
    gender
    avatar
    role
  }
`;

export default USER_FRAGMENT;

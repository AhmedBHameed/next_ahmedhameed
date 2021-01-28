import {gql} from '@apollo/client';

const PROFILE_QUERY = gql`
  query Profile {
    profile {
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
  }
`;

export default PROFILE_QUERY;

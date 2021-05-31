import {gql} from '@apollo/client';

const PROFILE_QUERY = gql`
  query Profile {
    profile {
      id
      email
      gender
      name {
        first
        last
      }
    }
  }
`;

export default PROFILE_QUERY;

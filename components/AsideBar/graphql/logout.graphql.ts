import {gql} from '@apollo/client';

const LOGOUT_QUERY = gql`
  query Logout {
    logout {
      message
    }
  }
`;

export default LOGOUT_QUERY;

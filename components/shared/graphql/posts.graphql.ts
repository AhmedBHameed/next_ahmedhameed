import {gql} from '@apollo/client';
import POST_FRAGMENT from './postFragment.graphql';

const POST_QUERY = gql`
  ${POST_FRAGMENT}
  query Posts {
    posts {
      ...PostFragment
    }
  }
`;

export default POST_QUERY;

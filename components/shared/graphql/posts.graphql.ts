import {gql} from '@apollo/client';
import POST_FRAGMENT from './postFragment.graphql';

const POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query Posts {
    posts {
      ...PostFragment
    }
  }
`;

export default POSTS_QUERY;

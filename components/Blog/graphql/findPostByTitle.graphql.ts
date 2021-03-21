import {gql} from '@apollo/client';
import POST_FRAGMENT from '../../shared/graphql/postFragment.graphql';

const FIND_POST_BY_TITLE_QUERY = gql`
  ${POST_FRAGMENT}
  query FindPostByTitle($title: String!) {
    findPostByTitle(title: $title) {
      ...PostFragment
    }
  }
`;

export default FIND_POST_BY_TITLE_QUERY;

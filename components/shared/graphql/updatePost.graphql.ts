import {gql} from '@apollo/client';
import POST_FRAGMENT from './postFragment.graphql';

const UPDATE_POST = gql`
  ${POST_FRAGMENT}
  mutation UpdatePost($post: PostInput!) {
    updatePost(post: $post) {
      ...PostFragment
    }
  }
`;

export default UPDATE_POST;

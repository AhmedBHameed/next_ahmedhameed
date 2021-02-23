import {gql} from '@apollo/client';
import POST_FRAGMENT from './postFragment.graphql';

const CREATE_POST = gql`
  ${POST_FRAGMENT}
  mutation CreatePost($post: PostInput!) {
    createPost(post: $post) {
      ...PostFragment
    }
  }
`;

export default CREATE_POST;

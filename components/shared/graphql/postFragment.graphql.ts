import {gql} from '@apollo/client';
import USER_FRAGMENT from './userFragment.graphql';
import CATEGORY_FRAGMENT from './categoryFragment.graphql';

const POST_FRAGMENT = gql`
  ${USER_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  fragment PostFragment on Post {
    id
    banner
    status
    postCategoryIds
    postCategoryTags {
      ...CategoryFragment
    }
    arTitle
    arBody
    arReadingTime
    enTitle
    enBody
    enReadingTime
    authorId
    author {
      ...UserFragment
    }
    createdAt
    updatedAt
  }
`;

export default POST_FRAGMENT;

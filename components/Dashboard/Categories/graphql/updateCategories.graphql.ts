import {gql} from '@apollo/client';
import CATEGORY_FRAGMENT from '../../../shared/graphql/categoryFragment.graphql';

const UPDATE_CATEGORY = gql`
  ${CATEGORY_FRAGMENT}
  mutation UpdateCategory($categoryData: CategoryInput!) {
    updateCategory(categoryData: $categoryData) {
      ...CategoryFragment
    }
  }
`;

export default UPDATE_CATEGORY;

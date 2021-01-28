import {gql} from '@apollo/client';

const UPDATE_CATEGORY = gql`
  mutation UpdateCategory($updateCategoryInput: UpdateCategoryInput!) {
    updateCategory(updateCategoryInput: $updateCategoryInput) {
      id
      imgSrc
      name
      enDescription
      arDescription
      status
      createdAt
      updatedAt
    }
  }
`;

export default UPDATE_CATEGORY;

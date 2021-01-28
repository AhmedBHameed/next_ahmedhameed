import {gql} from '@apollo/client';

const UPDATE_CATEGORY = gql`
  mutation AddCategory($addCategoryInput: AddCategoryInput!) {
    addCategory(addCategoryInput: $addCategoryInput) {
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

import {gql} from '@apollo/client';

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
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

export default CATEGORIES_QUERY;

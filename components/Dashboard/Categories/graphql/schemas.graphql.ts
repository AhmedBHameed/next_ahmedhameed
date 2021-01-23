import {gql} from '@apollo/client';

const LOGIN_QUERY = gql`
  query Categories {
    category {
      id
      imgSrc
      name
      enDescription
      arDescription
      status
    }
  }
`;

export default LOGIN_QUERY;

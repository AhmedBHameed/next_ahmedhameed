import {gql} from '@apollo/client';

const CATEGORY_FRAGMENT = gql`
  fragment CategoryFragment on Category {
    id
    imgSrc
    name
    enDescription
    arDescription
    status
    createdAt
    updatedAt
  }
`;

export default CATEGORY_FRAGMENT;

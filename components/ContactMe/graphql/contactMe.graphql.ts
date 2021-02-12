import {gql} from '@apollo/client';

const CONTACT_MUTATION = gql`
  mutation ContactMe($contact: ContactInput!) {
    contactMe(contact: $contact) {
      message
    }
  }
`;

export default CONTACT_MUTATION;

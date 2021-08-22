import {gql} from '@apollo/client';

const POST_QUERY = gql`
  query GhostPost($title: String!) {
    ghostPost(title: {eq: $title}) {
      uuid
      title
      excerpt
      html
      plaintext
      codeinjection_head
      codeinjection_styles
      meta_description
      feature_image
      reading_time
      created_at
      tags {
        name
      }
      authors {
        name
        profile_image
        url
      }
      og_description
      og_image
      og_title
      twitter_description
      twitter_image
      twitter_title
    }
  }
`;

export default POST_QUERY;

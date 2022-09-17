import { gql } from "@apollo/client";

export const GQL_PLACES = gql`
  {
    listAllPlaces {
      description
      location
      image
      url_image
      created_at
      userName {
        name
        url_avatar_image
      }
    }
  }
`;

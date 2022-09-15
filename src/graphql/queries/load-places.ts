import { gql } from "@apollo/client";

export const GQL_PLACES = gql`
  {
    listAllPlaces {
      description
      location
      image
      userName {
        name
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GQL_CREATE_POST = gql`
  mutation createPlace($input: CreatePlaceInput!) {
    createPlace(createPlaceInput: $input) {
      description
      location
      user {
        id
      }
    }
  }
`;

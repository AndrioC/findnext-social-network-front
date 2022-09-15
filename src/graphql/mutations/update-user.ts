import { gql } from "@apollo/client";

export const GQL_UPDATE_USER = gql`
  mutation updateUser($id: Float!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      name
      email
      avatar_image
      background_image
    }
  }
`;

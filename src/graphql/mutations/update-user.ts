import { gql } from "@apollo/client";

export const GQL_UPDATE_USER = gql`
  mutation updateUser($id: Float!, $data: UpdateUserInput!) {
    updateUser(id: $id, data: $data) {
      name
      email
      url_avatar_image
      url_background_image
    }
  }
`;

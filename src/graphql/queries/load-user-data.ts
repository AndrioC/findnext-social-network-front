import { gql } from "@apollo/client";

export const GQL_LOAD_USER_DATA = gql`
  query listUserData($id: Float!) {
    listUserData(id: $id) {
      name
      email
      url_avatar_image
      url_background_image
    }
  }
`;

import { gql } from "@apollo/client";

export const GQL_LOAD_USER_DATA = gql`
  query listUserData($id: Float!) {
    listUserData(id: $id) {
      name
      email
    }
  }
`;

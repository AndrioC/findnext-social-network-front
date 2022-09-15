import { gql } from "@apollo/client";

export const GQL_LOAD_USER_DATA = gql`
  {
    listUserData {
      name
      email
    }
  }
`;

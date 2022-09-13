import { gql } from "@apollo/client";

export const GQL_LOGIN = gql`
  mutation signin($input: SignInUserInput!) {
    signin(signInUserInput: $input) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

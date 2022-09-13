import { gql } from "@apollo/client";

export const GQL_SIGNUP = gql`
  mutation signup($input: SignUpUserInput!) {
    signup(signUpUserInput: $input) {
      email
      name
      id
    }
  }
`;

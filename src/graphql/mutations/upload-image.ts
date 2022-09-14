import { gql } from "@apollo/client";

export const GQL_UPLOAD_IMAGE = gql`
  mutation uploadImage($image: Upload!) {
    uploadImage(image: $image)
  }
`;

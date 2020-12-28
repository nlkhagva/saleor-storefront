import gql from "graphql-tag";
import { TypedMutation } from "@temp/core/mutations";
import {
  ProductCreate,
  ProductCreateVariables,
} from "./gqlTypes/ProductCreate";
import {
  ProductUpdateMetadata,
  ProductUpdateMetadataVariables,
} from "./gqlTypes/ProductUpdateMetadata";

export const createSimpleProduct = gql`
  mutation ProductCreate($input: ProductCreateInput!) {
    productCreate(input: $input) {
      errors: productErrors {
        code
        field
        __typename
      }
      product {
        id
        variants {
          id
        }
        __typename
      }
      __typename
    }
  }
`;

export const updateMetadata = gql`
  mutation ProductUpdateMetadata($id: ID!, $input: [MetadataInput!]!) {
    updateMetadata(id: $id, input: $input) {
      errors: metadataErrors {
        code
        field
        __typename
      }
      item {
        metadata {
          key
          value
        }
      }
      __typename
    }
  }
`;

export const TypedCreateSimpleProduct = TypedMutation<
  ProductCreate,
  ProductCreateVariables
>(createSimpleProduct);

export const TypedUpdateMetadata = TypedMutation<
  ProductUpdateMetadata,
  ProductUpdateMetadataVariables
>(updateMetadata);

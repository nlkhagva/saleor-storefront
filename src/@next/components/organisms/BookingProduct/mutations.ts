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
  mutation ProductCreate(
    $attributes: [AttributeValueInput]
    $publicationDate: Date
    $category: ID!
    $chargeTaxes: Boolean!
    $collections: [ID]
    $descriptionJson: JSONString
    $isPublished: Boolean!
    $name: String!
    $basePrice: Decimal
    $productType: ID!
    $sku: String
    $seo: SeoInput
    $stocks: [StockInput!]!
    $trackInventory: Boolean!
    $ushop: ID!
  ) {
    productCreate(
      input: {
        attributes: $attributes
        publicationDate: $publicationDate
        category: $category
        chargeTaxes: $chargeTaxes
        collections: $collections
        descriptionJson: $descriptionJson
        isPublished: $isPublished
        name: $name
        basePrice: $basePrice
        productType: $productType
        sku: $sku
        seo: $seo
        stocks: $stocks
        trackInventory: $trackInventory
        ushop: $ushop
      }
    ) {
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
      metadataErrors {
        field
        code
      }
      item {
        metadata {
          key
          value
        }
      }
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

import gql from 'graphql-tag';

import { productSimple } from '../fragments/products';

export const createSimpleProduct = gql`
  ${productSimple}
  mutation ProductCreate($attributes: [AttributeValueInput], $publicationDate: Date, $category: ID!, $chargeTaxes: Boolean!, $collections: [ID], $descriptionJson: JSONString, $isPublished: Boolean!, $name: String!, $basePrice: Decimal, $productType: ID!, $sku: String, $seo: SeoInput, $stocks: [StockInput!]!, $trackInventory: Boolean!, $ushop: ID!) {
    productCreate(input: {attributes: $attributes, publicationDate: $publicationDate, category: $category, chargeTaxes: $chargeTaxes, collections: $collections, descriptionJson: $descriptionJson, isPublished: $isPublished, name: $name, basePrice: $basePrice, productType: $productType, sku: $sku, seo: $seo, stocks: $stocks, trackInventory: $trackInventory, ushop: $ushop}) {
      errors: productErrors {
        ...ProductErrorFragment
        __typename
      }
      product {
        ...Product
        __typename
      }
      __typename
    }
  }
  
`;
export const productUpdateMetadata = gql`
  mutation ProductUpdateMetadata($id: ID!, $input: [MetadataInput!]!){
    updateMetadata(
      id: $id,
      input: $input
    ) {
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
`
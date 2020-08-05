import gql from "graphql-tag";

import { TypedQuery } from "@temp/core/queries";
import {
  ProductVariants,
  ProductVariantsVariables,
} from "./gqlTypes/ProductVariants";

export const productVariants = gql`
  query ProductVariants($ids: [ID]) {
    productVariants(ids: $ids, first: 100) {
      edges {
        node {
          id
          product {
            id
            name
            productType {
              id
              name
            }
            ushop {
              id
              name
              shippingProduct {
                name
                productType {
                  id
                  name
                }
                variants {
                  id
                  name
                  pricing {
                    price {
                      gross {
                        amount
                        currency
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedProductVariants = TypedQuery<
  ProductVariants,
  ProductVariantsVariables
>(productVariants);

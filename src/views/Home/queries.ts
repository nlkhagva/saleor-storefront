import gql from "graphql-tag";

import { TypedQuery } from "../../core/queries";
import { ProductsList } from "./gqlTypes/ProductsList";
import {
  LatestProducts,
  LatestProductsVariables,
} from "./gqlTypes/LatestProducts";
import {
  basicProductFragment,
  productPricingFragment,
} from "../Product/queries";

export const homePageQuery = gql`
  query ProductsList {
    shop {
      description
      name
      homepageCollection {
        id
        backgroundImage {
          url
        }
        name
      }
    }
    categories(level: 0, first: 1, filter: { search: "facebook" }) {
      edges {
        node {
          id
          name
          backgroundImage {
            url
          }
        }
      }
    }
  }
`;

export const TypedHomePageQuery = TypedQuery<ProductsList, {}>(homePageQuery);

export const latestProductsQuery = gql`
  ${basicProductFragment}
  ${productPricingFragment}
  query LatestProducts($after: String, $pageSize: Int) {
    products(
      after: $after
      first: $pageSize
      sortBy: { direction: DESC, field: DATE }
    ) {
      totalCount
      edges {
        node {
          ...BasicProductFields
          ...ProductPricingField
          category {
            id
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
`;

export const TypedLatestProductsQuery = TypedQuery<
  LatestProducts,
  LatestProductsVariables
>(latestProductsQuery);

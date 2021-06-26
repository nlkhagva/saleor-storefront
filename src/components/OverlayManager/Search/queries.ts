import gql from "graphql-tag";

import { TypedQuery } from "../../../core/queries";
import {
  SearchResults,
  SearchResultsVariables,
} from "./gqlTypes/SearchResults";
import {
  SearchBySKUResults,
  SearchBySKUResultsVariables,
} from "./gqlTypes/SearchBySKUResults";

const searchResultsQuery = gql`
  query SearchResults($query: String!) {
    products(filter: { search: $query }, first: 20) {
      edges {
        node {
          id
          name
          metadata {
            key
            value
          }
          thumbnail {
            url
            alt
          }
          thumbnail2x: thumbnail(size: 510) {
            url
          }
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

export const TypedSearchResults = TypedQuery<
  SearchResults,
  SearchResultsVariables
>(searchResultsQuery);

const searchBySKUResultsQuery = gql`
  query SearchBySKUResults($sku: String!) {
    productVariant(sku: $sku) {
      id
      name
      sku
      product {
        id
        name
        metadata {
          key
          value
        }
        thumbnail {
          url
          alt
        }
        thumbnail2x: thumbnail(size: 510) {
          url
        }
        category {
          id
          name
        }
      }
    }
  }
`;

export const TypedSearchBySKUResults = TypedQuery<
  SearchBySKUResults,
  SearchBySKUResultsVariables
>(searchBySKUResultsQuery);

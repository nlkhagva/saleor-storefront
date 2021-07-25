import { TypedQuery } from "@temp/core/queries";
import gql from "graphql-tag";

import { OrdersByUser, OrdersByUserVariables } from "./gqlTypes/OrdersByUser";

export const ordersByUser = gql`
  query OrdersByUser($perPage: Int!, $after: String) {
    me {
      id
      orders(first: $perPage, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          node {
            id
            token
            number
            statusDisplay
            created
            total {
              gross {
                amount
                currency
              }
              net {
                amount
                currency
              }
            }
            lines {
              id
              productName
              thumbnail {
                alt
                url
              }
              thumbnail2x: thumbnail(size: 510) {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const TypedOrdersByUser = TypedQuery<
  OrdersByUser,
  OrdersByUserVariables
>(ordersByUser);

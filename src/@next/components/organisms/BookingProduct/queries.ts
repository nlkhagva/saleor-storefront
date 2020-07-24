import gql from "graphql-tag";

import { TypedQuery } from "@temp/core/queries";

import { UshopByLink, UshopByLinkVariables } from "./gqlTypes/UshopByLink";

export const ushopByLink = gql`
  query UshopByLink($link: String!) {
    ushopByLink(link: $link) {
      id
      name
      logoImage {
        url
        alt
      }
    }
  }
`;

export const TypedUshopByLinkQuery = TypedQuery<
  UshopByLink,
  UshopByLinkVariables
>(ushopByLink);

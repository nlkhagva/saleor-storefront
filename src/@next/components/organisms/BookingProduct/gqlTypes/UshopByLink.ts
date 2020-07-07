/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UshopByLink
// ====================================================

export interface UshopByLink_ushopByLink_logoImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface UshopByLink_ushopByLink {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: UshopByLink_ushopByLink_logoImage | null;
}

export interface UshopByLink {
  ushopByLink: UshopByLink_ushopByLink | null;
}

export interface UshopByLinkVariables {
  link: string;
}

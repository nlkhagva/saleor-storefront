/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MetadataInput, MetadataErrorCode } from "./../../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductUpdateMetadata
// ====================================================

export interface ProductUpdateMetadata_updateMetadata_metadataErrors {
  __typename: "MetadataError";
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error code.
   */
  code: MetadataErrorCode;
}

export interface ProductUpdateMetadata_updateMetadata_item_metadata {
  __typename: "MetadataItem";
  /**
   * Key of a metadata item.
   */
  key: string;
  /**
   * Value of a metadata item.
   */
  value: string;
}

export interface ProductUpdateMetadata_updateMetadata_item {
  __typename: "User" | "Checkout" | "ProductVariant" | "Product" | "ProductType" | "Attribute" | "Category" | "Collection" | "DigitalContent" | "Order" | "Fulfillment" | "Invoice" | "ServiceAccount" | "App";
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductUpdateMetadata_updateMetadata_item_metadata | null)[];
}

export interface ProductUpdateMetadata_updateMetadata {
  __typename: "UpdateMetadata";
  metadataErrors: ProductUpdateMetadata_updateMetadata_metadataErrors[];
  item: ProductUpdateMetadata_updateMetadata_item | null;
}

export interface ProductUpdateMetadata {
  /**
   * Updates metadata of an object.
   */
  updateMetadata: ProductUpdateMetadata_updateMetadata | null;
}

export interface ProductUpdateMetadataVariables {
  id: string;
  input: MetadataInput[];
}

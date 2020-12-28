/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { MetadataInput, MetadataErrorCode } from "./../../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: ProductUpdateMetadata
// ====================================================

export interface ProductUpdateMetadata_updateMetadata_errors {
  __typename: "MetadataError";
  /**
   * The error code.
   */
  code: MetadataErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
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
  __typename: "Product" | "ProductType" | "Attribute" | "Category" | "ProductVariant" | "DigitalContent" | "Collection" | "User" | "Checkout" | "Order" | "Fulfillment" | "Invoice" | "ServiceAccount" | "App";
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (ProductUpdateMetadata_updateMetadata_item_metadata | null)[];
}

export interface ProductUpdateMetadata_updateMetadata {
  __typename: "UpdateMetadata";
  errors: ProductUpdateMetadata_updateMetadata_errors[];
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

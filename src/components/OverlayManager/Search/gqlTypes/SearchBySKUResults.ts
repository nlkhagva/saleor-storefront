/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchBySKUResults
// ====================================================

export interface SearchBySKUResults_productVariant_product_metadata {
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

export interface SearchBySKUResults_productVariant_product_thumbnail {
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

export interface SearchBySKUResults_productVariant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface SearchBySKUResults_productVariant_product_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface SearchBySKUResults_productVariant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (SearchBySKUResults_productVariant_product_metadata | null)[];
  /**
   * The main thumbnail for a product.
   */
  thumbnail: SearchBySKUResults_productVariant_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: SearchBySKUResults_productVariant_product_thumbnail2x | null;
  category: SearchBySKUResults_productVariant_product_category | null;
}

export interface SearchBySKUResults_productVariant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  product: SearchBySKUResults_productVariant_product;
}

export interface SearchBySKUResults {
  /**
   * Look up a product variant by ID or SKU.
   */
  productVariant: SearchBySKUResults_productVariant | null;
}

export interface SearchBySKUResultsVariables {
  sku: string;
}

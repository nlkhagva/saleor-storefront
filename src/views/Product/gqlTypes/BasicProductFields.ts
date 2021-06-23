/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BasicProductFields
// ====================================================

export interface BasicProductFields_thumbnail {
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

export interface BasicProductFields_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface BasicProductFields_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface BasicProductFields_metadata {
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

export interface BasicProductFields_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
  /**
   * Internal representation of an attribute name.
   */
  slug: string | null;
}

export interface BasicProductFields_attributes_values {
  __typename: "AttributeValue";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of a value displayed in the interface.
   */
  name: string | null;
  /**
   * Name of a value displayed in the interface.
   */
  value: string | null;
}

export interface BasicProductFields_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: BasicProductFields_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (BasicProductFields_attributes_values | null)[];
}

export interface BasicProductFields_ushop_logoImage {
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

export interface BasicProductFields_ushop_shippingProduct_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface BasicProductFields_ushop_shippingProduct_variants_pricing_price_gross {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
}

export interface BasicProductFields_ushop_shippingProduct_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: BasicProductFields_ushop_shippingProduct_variants_pricing_price_gross;
}

export interface BasicProductFields_ushop_shippingProduct_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: BasicProductFields_ushop_shippingProduct_variants_pricing_price | null;
}

export interface BasicProductFields_ushop_shippingProduct_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: BasicProductFields_ushop_shippingProduct_variants_pricing | null;
}

export interface BasicProductFields_ushop_shippingProduct {
  __typename: "Product";
  name: string;
  productType: BasicProductFields_ushop_shippingProduct_productType;
  /**
   * List of variants for the product.
   */
  variants: (BasicProductFields_ushop_shippingProduct_variants | null)[] | null;
}

export interface BasicProductFields_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: BasicProductFields_ushop_logoImage | null;
  shippingProduct: BasicProductFields_ushop_shippingProduct | null;
}

export interface BasicProductFields {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: BasicProductFields_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: BasicProductFields_thumbnail2x | null;
  slug: string;
  seoTitle: string | null;
  seoDescription: string | null;
  productType: BasicProductFields_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (BasicProductFields_metadata | null)[];
  /**
   * List of attributes assigned to this product.
   */
  attributes: BasicProductFields_attributes[];
  ushop: BasicProductFields_ushop | null;
}

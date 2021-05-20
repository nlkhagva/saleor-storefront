/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CountryCode } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: VariantList
// ====================================================

export interface VariantList_productVariants_edges_node_images {
  __typename: "ProductImage";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The URL of the image.
   */
  url: string;
  alt: string;
}

export interface VariantList_productVariants_edges_node_pricing_priceUndiscounted_gross {
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

export interface VariantList_productVariants_edges_node_pricing_priceUndiscounted_net {
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

export interface VariantList_productVariants_edges_node_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: VariantList_productVariants_edges_node_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: VariantList_productVariants_edges_node_pricing_priceUndiscounted_net;
}

export interface VariantList_productVariants_edges_node_pricing_price_gross {
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

export interface VariantList_productVariants_edges_node_pricing_price_net {
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

export interface VariantList_productVariants_edges_node_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: VariantList_productVariants_edges_node_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: VariantList_productVariants_edges_node_pricing_price_net;
}

export interface VariantList_productVariants_edges_node_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: VariantList_productVariants_edges_node_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: VariantList_productVariants_edges_node_pricing_price | null;
}

export interface VariantList_productVariants_edges_node_attributes_attribute {
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

export interface VariantList_productVariants_edges_node_attributes_values {
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

export interface VariantList_productVariants_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: VariantList_productVariants_edges_node_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (VariantList_productVariants_edges_node_attributes_values | null)[];
}

export interface VariantList_productVariants_edges_node_product_thumbnail {
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

export interface VariantList_productVariants_edges_node_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface VariantList_productVariants_edges_node_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface VariantList_productVariants_edges_node_product_metadata {
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

export interface VariantList_productVariants_edges_node_product_ushop_logoImage {
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

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price_gross {
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

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price_gross;
}

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price | null;
}

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing | null;
}

export interface VariantList_productVariants_edges_node_product_ushop_shippingProduct {
  __typename: "Product";
  name: string;
  productType: VariantList_productVariants_edges_node_product_ushop_shippingProduct_productType;
  /**
   * List of variants for the product.
   */
  variants: (VariantList_productVariants_edges_node_product_ushop_shippingProduct_variants | null)[] | null;
}

export interface VariantList_productVariants_edges_node_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: VariantList_productVariants_edges_node_product_ushop_logoImage | null;
  shippingProduct: VariantList_productVariants_edges_node_product_ushop_shippingProduct | null;
}

export interface VariantList_productVariants_edges_node_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: VariantList_productVariants_edges_node_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: VariantList_productVariants_edges_node_product_thumbnail2x | null;
  slug: string;
  seoTitle: string | null;
  seoDescription: string | null;
  productType: VariantList_productVariants_edges_node_product_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (VariantList_productVariants_edges_node_product_metadata | null)[];
  ushop: VariantList_productVariants_edges_node_product_ushop | null;
}

export interface VariantList_productVariants_edges_node {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  sku: string;
  name: string;
  /**
   * Whether the variant is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * List of images for the product variant.
   */
  images: (VariantList_productVariants_edges_node_images | null)[] | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: VariantList_productVariants_edges_node_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: VariantList_productVariants_edges_node_attributes[];
  product: VariantList_productVariants_edges_node_product;
}

export interface VariantList_productVariants_edges {
  __typename: "ProductVariantCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: VariantList_productVariants_edges_node;
}

export interface VariantList_productVariants {
  __typename: "ProductVariantCountableConnection";
  edges: VariantList_productVariants_edges[];
}

export interface VariantList {
  /**
   * List of product variants.
   */
  productVariants: VariantList_productVariants | null;
}

export interface VariantListVariables {
  ids?: string[] | null;
  countryCode?: CountryCode | null;
}

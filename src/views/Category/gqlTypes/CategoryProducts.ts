/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { AttributeInput, ProductOrder } from "./../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: CategoryProducts
// ====================================================

export interface CategoryProducts_products_edges_node_thumbnail {
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

export interface CategoryProducts_products_edges_node_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface CategoryProducts_products_edges_node_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface CategoryProducts_products_edges_node_metadata {
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

export interface CategoryProducts_products_edges_node_attributes_attribute {
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

export interface CategoryProducts_products_edges_node_attributes_values {
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

export interface CategoryProducts_products_edges_node_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: CategoryProducts_products_edges_node_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (CategoryProducts_products_edges_node_attributes_values | null)[];
}

export interface CategoryProducts_products_edges_node_ushop_logoImage {
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

export interface CategoryProducts_products_edges_node_ushop_shippingProduct_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing_price_gross {
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

export interface CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing_price_gross;
}

export interface CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing_price | null;
}

export interface CategoryProducts_products_edges_node_ushop_shippingProduct_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CategoryProducts_products_edges_node_ushop_shippingProduct_variants_pricing | null;
}

export interface CategoryProducts_products_edges_node_ushop_shippingProduct {
  __typename: "Product";
  name: string;
  productType: CategoryProducts_products_edges_node_ushop_shippingProduct_productType;
  /**
   * List of variants for the product.
   */
  variants: (CategoryProducts_products_edges_node_ushop_shippingProduct_variants | null)[] | null;
}

export interface CategoryProducts_products_edges_node_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: CategoryProducts_products_edges_node_ushop_logoImage | null;
  shippingProduct: CategoryProducts_products_edges_node_ushop_shippingProduct | null;
}

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start_gross {
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

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start_net {
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

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start_net;
}

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop_gross {
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

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop_net {
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

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop_net;
}

export interface CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted_stop | null;
}

export interface CategoryProducts_products_edges_node_pricing_priceRange_start_gross {
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

export interface CategoryProducts_products_edges_node_pricing_priceRange_start_net {
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

export interface CategoryProducts_products_edges_node_pricing_priceRange_start {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryProducts_products_edges_node_pricing_priceRange_start_gross;
  /**
   * Amount of money without taxes.
   */
  net: CategoryProducts_products_edges_node_pricing_priceRange_start_net;
}

export interface CategoryProducts_products_edges_node_pricing_priceRange_stop_gross {
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

export interface CategoryProducts_products_edges_node_pricing_priceRange_stop_net {
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

export interface CategoryProducts_products_edges_node_pricing_priceRange_stop {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: CategoryProducts_products_edges_node_pricing_priceRange_stop_gross;
  /**
   * Amount of money without taxes.
   */
  net: CategoryProducts_products_edges_node_pricing_priceRange_stop_net;
}

export interface CategoryProducts_products_edges_node_pricing_priceRange {
  __typename: "TaxedMoneyRange";
  /**
   * Lower bound of a price range.
   */
  start: CategoryProducts_products_edges_node_pricing_priceRange_start | null;
  /**
   * Upper bound of a price range.
   */
  stop: CategoryProducts_products_edges_node_pricing_priceRange_stop | null;
}

export interface CategoryProducts_products_edges_node_pricing {
  __typename: "ProductPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The undiscounted price range of the product variants.
   */
  priceRangeUndiscounted: CategoryProducts_products_edges_node_pricing_priceRangeUndiscounted | null;
  /**
   * The discounted price range of the product variants.
   */
  priceRange: CategoryProducts_products_edges_node_pricing_priceRange | null;
}

export interface CategoryProducts_products_edges_node_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface CategoryProducts_products_edges_node {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: CategoryProducts_products_edges_node_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: CategoryProducts_products_edges_node_thumbnail2x | null;
  slug: string;
  seoTitle: string | null;
  seoDescription: string | null;
  productType: CategoryProducts_products_edges_node_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (CategoryProducts_products_edges_node_metadata | null)[];
  /**
   * List of attributes assigned to this product.
   */
  attributes: CategoryProducts_products_edges_node_attributes[];
  ushop: CategoryProducts_products_edges_node_ushop | null;
  wasPrice: number | null;
  /**
   * Lists the storefront product's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: CategoryProducts_products_edges_node_pricing | null;
  category: CategoryProducts_products_edges_node_category | null;
}

export interface CategoryProducts_products_edges {
  __typename: "ProductCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: CategoryProducts_products_edges_node;
}

export interface CategoryProducts_products_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface CategoryProducts_products {
  __typename: "ProductCountableConnection";
  /**
   * A total count of items in the collection.
   */
  totalCount: number | null;
  edges: CategoryProducts_products_edges[];
  /**
   * Pagination data for this connection.
   */
  pageInfo: CategoryProducts_products_pageInfo;
}

export interface CategoryProducts {
  /**
   * List of the shop's products.
   */
  products: CategoryProducts_products | null;
}

export interface CategoryProductsVariables {
  id: string;
  attributes?: (AttributeInput | null)[] | null;
  after?: string | null;
  pageSize?: number | null;
  sortBy?: ProductOrder | null;
  priceLte?: number | null;
  priceGte?: number | null;
}

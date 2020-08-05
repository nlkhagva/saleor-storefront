/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProductVariants
// ====================================================

export interface ProductVariants_productVariants_edges_node_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price_gross {
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

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price_gross;
}

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing {
  __typename: "VariantPricingInfo";
  /**
   * The price, with any discount subtracted.
   */
  price: ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing_price | null;
}

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants_pricing | null;
}

export interface ProductVariants_productVariants_edges_node_product_ushop_shippingProduct {
  __typename: "Product";
  name: string;
  productType: ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_productType;
  /**
   * List of variants for the product.
   */
  variants: (ProductVariants_productVariants_edges_node_product_ushop_shippingProduct_variants | null)[] | null;
}

export interface ProductVariants_productVariants_edges_node_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  shippingProduct: ProductVariants_productVariants_edges_node_product_ushop_shippingProduct | null;
}

export interface ProductVariants_productVariants_edges_node_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  productType: ProductVariants_productVariants_edges_node_product_productType;
  ushop: ProductVariants_productVariants_edges_node_product_ushop | null;
}

export interface ProductVariants_productVariants_edges_node {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  product: ProductVariants_productVariants_edges_node_product;
}

export interface ProductVariants_productVariants_edges {
  __typename: "ProductVariantCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: ProductVariants_productVariants_edges_node;
}

export interface ProductVariants_productVariants {
  __typename: "ProductVariantCountableConnection";
  edges: ProductVariants_productVariants_edges[];
}

export interface ProductVariants {
  /**
   * List of product variants.
   */
  productVariants: ProductVariants_productVariants | null;
}

export interface ProductVariantsVariables {
  ids?: (string | null)[] | null;
}

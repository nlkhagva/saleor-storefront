/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: OrderLineFragment
// ====================================================

export interface OrderLineFragment_variant_product_thumbnail {
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

export interface OrderLineFragment_variant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderLineFragment_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface OrderLineFragment_variant_product_metadata {
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

export interface OrderLineFragment_variant_product_ushop_logoImage {
  __typename: "Image";
  /**
   * Alt text for an image.
   */
  alt: string | null;
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderLineFragment_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: OrderLineFragment_variant_product_ushop_logoImage | null;
}

export interface OrderLineFragment_variant_product {
  __typename: "Product";
  /**
   * Whether the product is available for purchase.
   */
  isAvailableForPurchase: boolean | null;
  isPublished: boolean;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: OrderLineFragment_variant_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: OrderLineFragment_variant_product_thumbnail2x | null;
  productType: OrderLineFragment_variant_product_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (OrderLineFragment_variant_product_metadata | null)[];
  ushop: OrderLineFragment_variant_product_ushop | null;
}

export interface OrderLineFragment_variant_pricing_priceUndiscounted_gross {
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

export interface OrderLineFragment_variant_pricing_priceUndiscounted_net {
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

export interface OrderLineFragment_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineFragment_variant_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineFragment_variant_pricing_priceUndiscounted_net;
}

export interface OrderLineFragment_variant_pricing_price_gross {
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

export interface OrderLineFragment_variant_pricing_price_net {
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

export interface OrderLineFragment_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineFragment_variant_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineFragment_variant_pricing_price_net;
}

export interface OrderLineFragment_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: OrderLineFragment_variant_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: OrderLineFragment_variant_pricing_price | null;
}

export interface OrderLineFragment_variant_attributes_attribute {
  __typename: "Attribute";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Name of an attribute displayed in the interface.
   */
  name: string | null;
}

export interface OrderLineFragment_variant_attributes_values {
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

export interface OrderLineFragment_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: OrderLineFragment_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (OrderLineFragment_variant_attributes_values | null)[];
}

export interface OrderLineFragment_variant {
  __typename: "ProductVariant";
  product: OrderLineFragment_variant_product;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Whether the variant is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: OrderLineFragment_variant_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: OrderLineFragment_variant_attributes[];
}

export interface OrderLineFragment_unitPrice_gross {
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

export interface OrderLineFragment_unitPrice_net {
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

export interface OrderLineFragment_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineFragment_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineFragment_unitPrice_net;
  /**
   * Currency code.
   */
  currency: string;
}

export interface OrderLineFragment_totalPrice_gross {
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

export interface OrderLineFragment_totalPrice_net {
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

export interface OrderLineFragment_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: OrderLineFragment_totalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: OrderLineFragment_totalPrice_net;
}

export interface OrderLineFragment_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface OrderLineFragment {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: OrderLineFragment_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: OrderLineFragment_unitPrice | null;
  /**
   * Price of the order line.
   */
  totalPrice: OrderLineFragment_totalPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: OrderLineFragment_thumbnail | null;
}

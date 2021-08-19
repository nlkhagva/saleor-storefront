/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PaymentChargeStatusEnum, OrderStatus, FulfillmentStatus, FulfillmentLineUstatus, JobStatusEnum } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL query operation: UserOrderByToken
// ====================================================

export interface UserOrderByToken_orderByToken_payments_capturedAmount {
  __typename: "Money";
  /**
   * Amount of money.
   */
  amount: number;
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Money formatted according to the current locale.
   */
  localized: string;
}

export interface UserOrderByToken_orderByToken_payments {
  __typename: "Payment";
  /**
   * The ID of the object.
   */
  id: string;
  gateway: string;
  /**
   * Internal payment status.
   */
  chargeStatus: PaymentChargeStatusEnum;
  isActive: boolean;
  created: any;
  modified: any;
  /**
   * Total amount captured for this payment.
   */
  capturedAmount: UserOrderByToken_orderByToken_payments_capturedAmount | null;
}

export interface UserOrderByToken_orderByToken_totalBalance {
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

export interface UserOrderByToken_orderByToken_shippingAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface UserOrderByToken_orderByToken_shippingAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: UserOrderByToken_orderByToken_shippingAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_gross {
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

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_net {
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

export interface UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted_net;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price_gross {
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

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price_net {
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

export interface UserOrderByToken_orderByToken_lines_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_lines_variant_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_lines_variant_pricing_price_net;
}

export interface UserOrderByToken_orderByToken_lines_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: UserOrderByToken_orderByToken_lines_variant_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: UserOrderByToken_orderByToken_lines_variant_pricing_price | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_attributes_attribute {
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

export interface UserOrderByToken_orderByToken_lines_variant_attributes_values {
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

export interface UserOrderByToken_orderByToken_lines_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: UserOrderByToken_orderByToken_lines_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (UserOrderByToken_orderByToken_lines_variant_attributes_values | null)[];
}

export interface UserOrderByToken_orderByToken_lines_variant_product_thumbnail {
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

export interface UserOrderByToken_orderByToken_lines_variant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface UserOrderByToken_orderByToken_lines_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface UserOrderByToken_orderByToken_lines_variant_product_metadata {
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

export interface UserOrderByToken_orderByToken_lines_variant_product_ushop_logoImage {
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

export interface UserOrderByToken_orderByToken_lines_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: UserOrderByToken_orderByToken_lines_variant_product_ushop_logoImage | null;
}

export interface UserOrderByToken_orderByToken_lines_variant_product {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: UserOrderByToken_orderByToken_lines_variant_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: UserOrderByToken_orderByToken_lines_variant_product_thumbnail2x | null;
  productType: UserOrderByToken_orderByToken_lines_variant_product_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (UserOrderByToken_orderByToken_lines_variant_product_metadata | null)[];
  ushop: UserOrderByToken_orderByToken_lines_variant_product_ushop | null;
}

export interface UserOrderByToken_orderByToken_lines_variant {
  __typename: "ProductVariant";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  sku: string;
  /**
   * Quantity of a product available for sale in one checkout.
   */
  quantityAvailable: number;
  /**
   * Whether the variant is in stock and visible or not.
   */
  isAvailable: boolean | null;
  /**
   * Lists the storefront variant's pricing, the current price and discounts, only meant for displaying.
   */
  pricing: UserOrderByToken_orderByToken_lines_variant_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: UserOrderByToken_orderByToken_lines_variant_attributes[];
  product: UserOrderByToken_orderByToken_lines_variant_product | null;
}

export interface UserOrderByToken_orderByToken_lines_unitPrice_gross {
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

export interface UserOrderByToken_orderByToken_lines_unitPrice_net {
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

export interface UserOrderByToken_orderByToken_lines_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_lines_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_lines_unitPrice_net;
}

export interface UserOrderByToken_orderByToken_lines_totalPrice_gross {
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

export interface UserOrderByToken_orderByToken_lines_totalPrice_net {
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

export interface UserOrderByToken_orderByToken_lines_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_lines_totalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_lines_totalPrice_net;
}

export interface UserOrderByToken_orderByToken_lines {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  productName: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: UserOrderByToken_orderByToken_lines_variant | null;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: UserOrderByToken_orderByToken_lines_unitPrice | null;
  /**
   * Price of the order line.
   */
  totalPrice: UserOrderByToken_orderByToken_lines_totalPrice | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_thumbnail {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_productType {
  __typename: "ProductType";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_metadata {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_ushop_logoImage {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_ushop {
  __typename: "Ushop";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  logoImage: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_ushop_logoImage | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product {
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
  thumbnail: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_thumbnail2x | null;
  productType: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_productType;
  /**
   * List of public metadata items. Can be accessed without permissions.
   */
  metadata: (UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_metadata | null)[];
  ushop: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product_ushop | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted_gross {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted_net {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted_net;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price_gross {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price_net {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price_net;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing {
  __typename: "VariantPricingInfo";
  /**
   * Whether it is in sale or not.
   */
  onSale: boolean | null;
  /**
   * The price without any discount.
   */
  priceUndiscounted: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_priceUndiscounted | null;
  /**
   * The price, with any discount subtracted.
   */
  price: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing_price | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes_attribute {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes_values {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes {
  __typename: "SelectedAttribute";
  /**
   * Name of an attribute displayed in the interface.
   */
  attribute: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes_attribute;
  /**
   * Values of an attribute.
   */
  values: (UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes_values | null)[];
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant {
  __typename: "ProductVariant";
  product: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_product | null;
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
  pricing: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_pricing | null;
  /**
   * List of attributes assigned to this variant.
   */
  attributes: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant_attributes[];
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice_gross {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice_net {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice_net;
  /**
   * Currency code.
   */
  currency: string;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice_gross {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice_net {
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

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice {
  __typename: "TaxedMoney";
  /**
   * Currency code.
   */
  currency: string;
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice_net;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines_orderLine {
  __typename: "OrderLine";
  /**
   * The ID of the object.
   */
  id: string;
  isShippingRequired: boolean;
  /**
   * A purchased product variant. Note: this field may be null if the variant has been removed from stock at all.
   */
  variant: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_variant | null;
  productName: string;
  productSku: string;
  quantity: number;
  quantityFulfilled: number;
  /**
   * Price of the single item in the order line.
   */
  unitPrice: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_unitPrice | null;
  /**
   * Price of the order line.
   */
  totalPrice: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_totalPrice | null;
  /**
   * The main thumbnail for the ordered product.
   */
  thumbnail: UserOrderByToken_orderByToken_fulfillments_lines_orderLine_thumbnail | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_lines {
  __typename: "FulfillmentLine";
  /**
   * The ID of the object.
   */
  id: string;
  quantity: number;
  orderLine: UserOrderByToken_orderByToken_fulfillments_lines_orderLine | null;
  ustatus: FulfillmentLineUstatus;
  changedDate: any | null;
  soonDate: any | null;
}

export interface UserOrderByToken_orderByToken_fulfillments_warehouse {
  __typename: "Warehouse";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface UserOrderByToken_orderByToken_fulfillments {
  __typename: "Fulfillment";
  /**
   * The ID of the object.
   */
  id: string;
  fulfillmentOrder: number;
  status: FulfillmentStatus;
  trackingNumber: string;
  ukDate: any | null;
  /**
   * List of lines for the fulfillment.
   */
  lines: (UserOrderByToken_orderByToken_fulfillments_lines | null)[] | null;
  /**
   * Warehouse from fulfillment was fulfilled.
   */
  warehouse: UserOrderByToken_orderByToken_fulfillments_warehouse | null;
}

export interface UserOrderByToken_orderByToken_subtotal_gross {
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

export interface UserOrderByToken_orderByToken_subtotal_net {
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

export interface UserOrderByToken_orderByToken_subtotal {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_subtotal_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_subtotal_net;
}

export interface UserOrderByToken_orderByToken_total_gross {
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

export interface UserOrderByToken_orderByToken_total_net {
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

export interface UserOrderByToken_orderByToken_total {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_total_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_total_net;
}

export interface UserOrderByToken_orderByToken_shippingPrice_gross {
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

export interface UserOrderByToken_orderByToken_shippingPrice_net {
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

export interface UserOrderByToken_orderByToken_shippingPrice {
  __typename: "TaxedMoney";
  /**
   * Amount of money including taxes.
   */
  gross: UserOrderByToken_orderByToken_shippingPrice_gross;
  /**
   * Amount of money without taxes.
   */
  net: UserOrderByToken_orderByToken_shippingPrice_net;
}

export interface UserOrderByToken_orderByToken_invoices {
  __typename: "Invoice";
  /**
   * The ID of the object.
   */
  id: string;
  number: string | null;
  /**
   * Created date time of job in ISO 8601 format.
   */
  createdAt: any;
  /**
   * URL to download an invoice.
   */
  url: string | null;
  /**
   * Job status.
   */
  status: JobStatusEnum;
}

export interface UserOrderByToken_orderByToken {
  __typename: "Order";
  /**
   * Email address of the customer.
   */
  userEmail: string | null;
  /**
   * Internal payment status.
   */
  paymentStatus: PaymentChargeStatusEnum | null;
  /**
   * User-friendly payment status.
   */
  paymentStatusDisplay: string | null;
  /**
   * List of payments for the order.
   */
  payments: (UserOrderByToken_orderByToken_payments | null)[] | null;
  status: OrderStatus;
  /**
   * User-friendly order status.
   */
  statusDisplay: string | null;
  /**
   * The ID of the object.
   */
  id: string;
  token: string;
  /**
   * The difference between the paid and the order total amount.
   */
  totalBalance: UserOrderByToken_orderByToken_totalBalance;
  /**
   * User-friendly number of an order.
   */
  number: string | null;
  shippingAddress: UserOrderByToken_orderByToken_shippingAddress | null;
  /**
   * List of order lines.
   */
  lines: (UserOrderByToken_orderByToken_lines | null)[];
  /**
   * List of shipments for the order.
   */
  fulfillments: (UserOrderByToken_orderByToken_fulfillments | null)[];
  /**
   * The sum of line prices not including shipping.
   */
  subtotal: UserOrderByToken_orderByToken_subtotal | null;
  /**
   * Total amount of the order.
   */
  total: UserOrderByToken_orderByToken_total | null;
  /**
   * Total price of shipping.
   */
  shippingPrice: UserOrderByToken_orderByToken_shippingPrice | null;
  /**
   * List of order invoices.
   */
  invoices: (UserOrderByToken_orderByToken_invoices | null)[] | null;
}

export interface UserOrderByToken {
  /**
   * Look up an order by token.
   */
  orderByToken: UserOrderByToken_orderByToken | null;
}

export interface UserOrderByTokenVariables {
  token: any;
}

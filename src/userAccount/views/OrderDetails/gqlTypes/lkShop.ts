/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: lkShop
// ====================================================

export interface lkShop_shop_availablePaymentGateways_config {
  __typename: "GatewayConfigLine";
  /**
   * Gateway config key.
   */
  field: string;
  /**
   * Gateway config value for key.
   */
  value: string | null;
}

export interface lkShop_shop_availablePaymentGateways {
  __typename: "PaymentGateway";
  /**
   * Payment gateway ID.
   */
  id: string;
  /**
   * Payment gateway name.
   */
  name: string;
  /**
   * Payment gateway supported currencies.
   */
  currencies: (string | null)[];
  /**
   * Payment gateway client configuration.
   */
  config: lkShop_shop_availablePaymentGateways_config[];
}

export interface lkShop_shop {
  __typename: "Shop";
  /**
   * Shop's name.
   */
  name: string;
  /**
   * List of available payment gateways.
   */
  availablePaymentGateways: lkShop_shop_availablePaymentGateways[];
}

export interface lkShop {
  /**
   * Return information about the shop.
   */
  shop: lkShop_shop;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: RemainOrder
// ====================================================

export interface RemainOrder_paymentOrderRemain_payment {
  __typename: "Payment";
  /**
   * The ID of the object.
   */
  id: string;
}

export interface RemainOrder_paymentOrderRemain {
  __typename: "OrderRemainingPayment";
  /**
   * Updated payment.
   */
  payment: RemainOrder_paymentOrderRemain_payment | null;
}

export interface RemainOrder {
  /**
   * Captures the order remaining payment amount.
   */
  paymentOrderRemain: RemainOrder_paymentOrderRemain | null;
}

export interface RemainOrderVariables {
  orderId: string;
  input: PaymentInput;
}

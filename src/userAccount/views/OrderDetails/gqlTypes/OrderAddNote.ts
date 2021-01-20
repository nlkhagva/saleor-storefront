/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { OrderAddNoteInput, OrderEventsEmailsEnum, OrderEventsEnum } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL mutation operation: OrderAddNote
// ====================================================

export interface OrderAddNote_orderAddChat_event_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  email: string;
}

export interface OrderAddNote_orderAddChat_event {
  __typename: "OrderEvent";
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Amount of money.
   */
  amount: number | null;
  /**
   * Date when event happened at in ISO 8601 format.
   */
  date: any | null;
  /**
   * Email of the customer.
   */
  email: string | null;
  /**
   * Type of an email sent to the customer.
   */
  emailType: OrderEventsEmailsEnum | null;
  /**
   * Number of an invoice related to the order.
   */
  invoiceNumber: string | null;
  /**
   * Content of the event.
   */
  message: string | null;
  /**
   * Number of items.
   */
  quantity: number | null;
  /**
   * Order event type.
   */
  type: OrderEventsEnum | null;
  /**
   * User who performed the action.
   */
  user: OrderAddNote_orderAddChat_event_user | null;
}

export interface OrderAddNote_orderAddChat {
  __typename: "OrderAddChat";
  /**
   * Order note created.
   */
  event: OrderAddNote_orderAddChat_event | null;
}

export interface OrderAddNote {
  /**
   * Adds note to the order.
   */
  orderAddChat: OrderAddNote_orderAddChat | null;
}

export interface OrderAddNoteVariables {
  order: string;
  input: OrderAddNoteInput;
}

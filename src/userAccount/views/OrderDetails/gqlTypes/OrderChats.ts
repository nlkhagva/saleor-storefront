/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OrderChats
// ====================================================

export interface OrderChats_orderChats_user {
  __typename: "User";
  /**
   * The ID of the object.
   */
  id: string;
  lastName: string;
  email: string;
  isStaff: boolean;
}

export interface OrderChats_orderChats {
  __typename: "OrderChat";
  /**
   * message
   */
  message: string | null;
  /**
   * Date when event happened at in ISO 8601 format.
   */
  date: any | null;
  /**
   * User who performed the action.
   */
  user: OrderChats_orderChats_user | null;
}

export interface OrderChats {
  orderChats: (OrderChats_orderChats | null)[] | null;
}

export interface OrderChatsVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { OrderErrorCode } from "./../../../../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: OrderErrorFragment
// ====================================================

export interface OrderErrorFragment {
  __typename: "OrderError";
  /**
   * The error code.
   */
  code: OrderErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
}

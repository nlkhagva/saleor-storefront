import gql from "graphql-tag";

import { TypedQuery } from "@temp/core/queries";
import { TypedMutation } from "@temp/core/mutations";
import { lkShop } from "./gqlTypes/lkShop";
import { RemainOrder, RemainOrderVariables } from "./gqlTypes/RemainOrder";
import { OrderAddNote, OrderAddNoteVariables } from "./gqlTypes/OrderAddNote";
import { OrderChats, OrderChatsVariables } from "./gqlTypes/OrderChats";
import { orderDetailFragment, invoiceFragment } from "./fragment/index";

import {
  UserOrderByToken,
  UserOrderByTokenVariables,
} from "./gqlTypes/UserOrderByToken";

export const shopQuery = gql`
  query lkShop {
    shop {
      name
      availablePaymentGateways {
        id
        name
        currencies
        config {
          field
          value
        }
      }
    }
  }
`;

export const TypedLkShopQuery = TypedQuery<lkShop, null>(shopQuery);

export const PaymentOrderRemain = gql`
  mutation RemainOrder($orderId: ID!, $input: PaymentInput!) {
    paymentOrderRemain(orderId: $orderId, input: $input) {
      payment {
        id
      }
    }
  }
`;

export const TypedPaymentOrderRemain = TypedMutation<
  RemainOrder,
  RemainOrderVariables
>(PaymentOrderRemain);

/** order note fragment */
export const orderErrorFragment = gql`
  fragment OrderErrorFragment on OrderError {
    code
    field
  }
`;
export const fragmentOrderEvent = gql`
  fragment OrderEventFragment on OrderEvent {
    id
    amount
    date
    email
    emailType
    invoiceNumber
    message
    quantity
    type
    user {
      id
      email
    }
  }
`;

export const orderAddNoteMutation = gql`
  ${fragmentOrderEvent}
  mutation OrderAddNote($order: ID!, $input: OrderAddNoteInput!) {
    orderAddChat(order: $order, input: $input) {
      event {
        ...OrderEventFragment
      }
    }
  }
`;
export const TypedOrderAddNoteMutation = TypedMutation<
  OrderAddNote,
  OrderAddNoteVariables
>(orderAddNoteMutation);

export const orderChats = gql`
  query OrderChats($id: ID!) {
    orderChats(id: $id) {
      message
      date
      user {
        id
        lastName
        email
        isStaff
      }
    }
  }
`;
export const TypedOrderChatsQuery = TypedQuery<OrderChats, OrderChatsVariables>(
  orderChats
);

export const userOrderDetailsByTokenQuery = gql`
  ${orderDetailFragment}
  ${invoiceFragment}
  query UserOrderByToken($token: UUID!) {
    orderByToken(token: $token) {
      ...OrderDetail
      invoices {
        ...InvoiceFragment
      }
    }
  }
`;

export const TypedUserOrderByToken = TypedQuery<
  UserOrderByToken,
  UserOrderByTokenVariables
>(userOrderDetailsByTokenQuery);

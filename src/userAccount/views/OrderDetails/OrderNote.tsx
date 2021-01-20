import React from "react";

import { OrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/OrderByToken";
import { UserOrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/UserOrderByToken";

import { TypedOrderAddNoteMutation, TypedOrderChatsQuery } from "./query";
import { OrderChats } from "./OrderChats";

export interface NoteProps {
  order: OrderByToken_orderByToken | UserOrderByToken_orderByToken;
}

export const OrderNote: React.FC<NoteProps> = (props: NoteProps) => {
  const { order } = props;

  return (
    <TypedOrderChatsQuery variables={{ id: order.id }}>
      {({ data, refetch }) => {
        const onCompletedNote = () => {
          refetch();
        };
        return (
          <TypedOrderAddNoteMutation onCompleted={onCompletedNote}>
            {orderAddNote => {
              return (
                <OrderChats
                  addMessage={orderAddNote}
                  chats={data.orderChats}
                  order={order}
                />
              );
            }}
          </TypedOrderAddNoteMutation>
        );
      }}
    </TypedOrderChatsQuery>
  );
};

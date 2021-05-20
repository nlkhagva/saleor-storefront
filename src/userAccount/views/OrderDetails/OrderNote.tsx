import React from "react";

import { TypedOrderAddNoteMutation, TypedOrderChatsQuery } from "./query";
import { OrderChats } from "./OrderChats";

export interface NoteProps {
  orderId: string;
  userEmail: string;
}

export const OrderNote: React.FC<NoteProps> = (props: NoteProps) => {
  const { orderId, userEmail } = props;

  return (
    <TypedOrderChatsQuery variables={{ id: orderId }}>
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
                  orderId={orderId}
                  userEmail={userEmail}
                />
              );
            }}
          </TypedOrderAddNoteMutation>
        );
      }}
    </TypedOrderChatsQuery>
  );
};

import "./scss/index.scss";

import React from "react";
import Moment from "react-moment";
import { Formik } from "formik";
import ReactSVG from "react-svg";

import { OrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/OrderByToken";
import { UserOrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/UserOrderByToken";
import { TextField } from "@components/molecules";
import SendIcon from "images/send.svg";

import { OrderChats_orderChats } from "./gqlTypes/OrderChats";

export interface ChatProps {
  addMessage: any;
  chats: OrderChats_orderChats[];
  order: OrderByToken_orderByToken | UserOrderByToken_orderByToken;
}
interface ChatFormValues {
  message: string;
}

export const OrderChats: React.FC<ChatProps> = props => {
  const { addMessage, chats, order } = props;
  const initialValues: ChatFormValues = { message: "" };

  return (
    <div className="chat-container">
      <h4 style={{ marginBottom: "1.5rem" }}>Захиалгын хүсэлт</h4>

      <ul className="chat-body">
        {chats.map((chat, index) => (
          <li
            className={order.userEmail === chat.user.email ? "is-me" : ""}
            key={index}
          >
            {/* <span className="user" /> */}
            <span className="chat-message">{chat.message}</span>
            <br className="clearfix" />
            <span className="chat-date">
              <Moment fromNow locale="mn">
                {chat.date}
              </Moment>
            </span>
          </li>
        ))}
      </ul>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          addMessage({
            variables: {
              order: order.id,
              input: {
                message: values.message,
              },
            },
          });
          resetForm();
        }}
      >
        {({ handleChange, values, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="chatinput">
                <div className="cht">
                  <TextField
                    name="message"
                    label="Хүсэлтээ энд бичнэ үү"
                    value={values!.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="cht-btn">
                  <ReactSVG path={SendIcon} />
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

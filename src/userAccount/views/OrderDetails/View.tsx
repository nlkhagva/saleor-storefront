import "./scss/index.scss";

import * as React from "react";
import { RouteComponentProps } from "react-router";

import { Loader } from "@components/atoms";
import { useAuth } from "@saleor/sdk";
import { TypedUserOrderByToken } from "./query";

import Page from "./Page";

const View: React.FC<RouteComponentProps<{ token?: string }>> = ({
  match: {
    params: { token },
  },
}) => {
  const { user } = useAuth();

  return (
    <TypedUserOrderByToken variables={{ token }}>
      {({ loading, data, refetch }) => {
        const order = data.orderByToken;
        const guest = !user;

        const handleDownloadInvoice = () => {
          if (order && "invoices" in order && order.invoices?.length > 0) {
            // Always download latest invoice
            const invoice = order.invoices.reduce((a, b) => {
              return new Date(a.createdAt) > new Date(b.createdAt) ? a : b;
            });

            if (invoice) {
              window.open(invoice.url, "_blank");
            }
          }
        };

        if (loading) {
          return <Loader />;
        }
        return (
          <div className="order-details container">
            <Page
              guest={guest}
              order={order}
              refetchOrder={refetch}
              downloadInvoice={handleDownloadInvoice}
            />
          </div>
        );
      }}
    </TypedUserOrderByToken>
  );
};

// const { data: order, loading, refetch } = useOrderDetails(
//   { token },
//   { fetchPolicy: "cache-and-network" }
// );
// );

export default View;

import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { DropdownMenu, IconButton } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
// import { OrderDetail_lines } from "@saleor/sdk/lib/fragments/gqlTypes/OrderDetail";
import { OrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/OrderByToken";
import { UserOrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/UserOrderByToken";
import {
  checkoutMessages,
  translateOrderStatus,
  translatePaymentStatus,
} from "@temp/intl";

import { orderHistoryUrl } from "../../../app/routes";
import { AddressSummary, NotFound } from "../../../components";
// import { AddressSummary, CartTable, NotFound } from "../../../components";
// import { ILine } from "../../../components/CartTable/ProductRow";
import ProductList from "../../../components/OverlayManager/Cart/ProductList";

// const extractOrderLines = (lines: any[]): any[] => {
//   return lines
//     .map(line => ({
//       quantity: line.quantity,
//       totalPrice: line.totalPrice,
//       ...line.variant,
//       name: line.productName,
//     }))
//     .sort((a, b) =>
//       b.variant.id.toLowerCase().localeCompare(a.variant.id.toLowerCase())
//     );
// };

const Page: React.FC<{
  guest: boolean;
  order: OrderByToken_orderByToken | UserOrderByToken_orderByToken;
  downloadInvoice: () => void;
}> = ({ guest, order, downloadInvoice }) => {
  const intl = useIntl();
  return order ? (
    <>
      {!guest && (
        <Link className="order-details__link" to={orderHistoryUrl}>
          <FormattedMessage defaultMessage="Захиалгын түүх руу очих" />
        </Link>
      )}
      <div className="order-details__header">
        <div className="">
          <h3>
            <FormattedMessage
              defaultMessage="Захиалгын дугаар: {orderNum}"
              values={{ orderNum: order.number }}
            />
          </h3>
          <p className="order-details__status">
            {translatePaymentStatus(order.paymentStatusDisplay, intl)} /{" "}
            {translateOrderStatus(order.statusDisplay, intl)}
          </p>
        </div>
        {"invoices" in order && order.invoices?.length > 0 && (
          <div className="order-details__header-menu">
            <DropdownMenu
              type="clickable"
              header={
                <IconButton
                  testingContext="expandButton"
                  name="expand"
                  size={28}
                />
              }
              items={[
                {
                  onClick: downloadInvoice,
                  content: (
                    <span>
                      <FormattedMessage
                        defaultMessage="Download invoice"
                        description="action in popup menu in order view"
                      />
                    </span>
                  ),
                },
              ]}
            />
          </div>
        )}
      </div>
      <div className="order-details__body">
        <ProductList lines={order.lines} />
      </div>
      {/* <CartTable
        lines={extractOrderLines(order.lines)}
        totalCost={<TaxedMoney taxedMoney={order.total} />}
        deliveryCost={<TaxedMoney taxedMoney={order.shippingPrice} />}
        subtotal={}
      /> */}

      <table className="ushop-price-table" style={{ fontSize: "1rem" }}>
        <tbody>
          <tr>
            <td>Барааны нийт</td>
            <td>
              <TaxedMoney taxedMoney={order.subtotal} />
            </td>
          </tr>
          {order.shippingPrice && (
            <tr>
              <td>Хүргэлт</td>
              <td>
                <TaxedMoney taxedMoney={order.shippingPrice} />
              </td>
            </tr>
          )}
          {order.total && (
            <tr>
              <td>Захиалгын нийт</td>
              <td>
                <TaxedMoney taxedMoney={order.total} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="order-details__summary">
        <div>
          <h4>
            <FormattedMessage {...checkoutMessages.shippingAddress} />
          </h4>
          <AddressSummary
            address={order.shippingAddress}
            email={order.userEmail}
            paragraphRef={this.shippingAddressRef}
          />
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
};
export default Page;

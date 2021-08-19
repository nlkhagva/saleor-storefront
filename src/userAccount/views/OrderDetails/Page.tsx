import * as React from "react";
import { useAlert } from "react-alert";
import Media from "react-responsive";
import { FormattedDate, FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";

import { DropdownMenu, IconButton } from "@components/atoms";
import { TaxedMoney } from "@components/containers";
// import { OrderDetail_lines } from "unurshop-sdk/lib/fragments/gqlTypes/OrderDetail";
// import { OrderByToken_orderByToken } from "unurshop-sdk/lib/queries/gqlTypes/OrderByToken";
// import { UserOrderByToken_orderByToken } from "unurshop-sdk/lib/queries/gqlTypes/UserOrderByToken";
import {
  checkoutMessages,
  translateOrderStatus,
  translatePaymentStatus,
} from "@temp/intl";
import { maybe } from "@temp/misc";
import { mediumScreen } from "@styles/constants";

// import { ILine } from "../../../components/CartTable/ProductRow";
// import { PRODUCT_TYPE_SHIPPING } from "@app/custom/constants";
// import ProductList from "../../../components/OverlayManager/Cart/ProductList";
import { OrderPayment } from "./OrderPayment";
import { OrderNote } from "./OrderNote";
import { TypedPaymentOrderRemain } from "./query";
import { UserOrderByToken_orderByToken } from "./gqlTypes/UserOrderByToken";

import { orderHistoryUrl } from "../../../app/routes";
import {
  AddressSummary,
  CartTable,
  CartTableMobile,
  NotFound,
  CartTableUnfulfilled,
  CartTableUnfulfilledMobile,
} from "../../../components";

// const extractOrderLines = (lines: any[]): any[] => {
//   console.log(lines);
//   return lines.map((line) => ({
//     quantity: line.quantity,
//     totalPrice: line.totalPrice,
//     ...line.variant,
//     name: line.productName,
//   }));
//   // .sort((a, b) =>
//   //   b.variant.id.toLowerCase().localeCompare(a.variant.id.toLowerCase())
//   // );
// };

const Page: React.FC<{
  guest: boolean;
  order: UserOrderByToken_orderByToken;
  refetchOrder: any;
  downloadInvoice: () => void;
}> = props => {
  const { guest, order, refetchOrder, downloadInvoice } = props;
  const intl = useIntl();
  const alert = useAlert();

  const onCompletedPayment = () => {
    // console.log("complete payment");
    alert.show({ title: "Төлбөр амжилттай төлөгдлөө" }, { type: "success" });
    refetchOrder();
  };

  const unfulfilled = maybe(() => order.lines, []).filter(
    line => line.quantityFulfilled < line.quantity
  );
  return order ? (
    <>
      {!guest && (
        <Link className="order-details__link" to={orderHistoryUrl}>
          <FormattedMessage defaultMessage="Захиалгын түүх руу очих" />
        </Link>
      )}
      <div className="order-details__header">
        <div className="">
          <h4>
            <FormattedMessage
              defaultMessage="Захиалгын дугаар: #{orderNum}"
              values={{ orderNum: order.number }}
            />
          </h4>
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
      <div className="">
        <table style={{ margin: "2rem 0" }}>
          {order?.payments && (
            <tr>
              <th colSpan={2} style={{ fontWeight: "bold" }}>
                Төлбөрийн түүх
              </th>
            </tr>
          )}
          {order?.payments
            .filter(payment => payment.chargeStatus === "FULLY_CHARGED")
            .map(payment => (
              <tr key={payment.id}>
                <td>
                  {payment.gateway === "mirumee.payments.stripe"
                    ? "Stripe-р төлсөн"
                    : payment.gateway}
                  <span style={{ fontSize: 12 }}>
                    &nbsp; [<FormattedDate value={payment.modified} />]
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  {payment.capturedAmount.localized}
                </td>
              </tr>
            ))}
        </table>
        {Math.abs(order.totalBalance.amount) > 0 && (
          <TypedPaymentOrderRemain onCompleted={onCompletedPayment}>
            {paymentOrderRemain => (
              <OrderPayment order={order} mutation={paymentOrderRemain} />
            )}
          </TypedPaymentOrderRemain>
        )}
      </div>
      {/* <div className="order-details__body">
        <ProductList lines={order.lines} />
      </div> */}

      {unfulfilled.length > 0 && (
        <>
          <Media minWidth={mediumScreen}>
            <CartTableUnfulfilled lines={unfulfilled} />
          </Media>
          <Media maxWidth={mediumScreen}>
            <CartTableUnfulfilledMobile lines={unfulfilled} />
          </Media>
        </>
      )}

      {order.fulfillments && (
        <>
          <Media minWidth={mediumScreen}>
            <CartTable fulfillments={order.fulfillments} />
          </Media>
          <Media maxWidth={mediumScreen}>
            <CartTableMobile fulfillments={order.fulfillments} />
          </Media>
        </>
      )}

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
            // paragraphRef={this.shippingAddressRef}
          />
        </div>
      </div>
      {!guest && (
        <div>
          <OrderNote orderId={order.id} userEmail={order.userEmail} />
        </div>
      )}
    </>
  ) : (
    <NotFound />
  );
};
export default Page;

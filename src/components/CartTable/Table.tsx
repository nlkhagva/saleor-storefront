import * as React from "react";
import { FormattedMessage } from "react-intl";
// import { FormattedMessage, useIntl } from "react-intl";
import Media from "react-media";
import { commonMessages } from "@temp/intl";
import { maybe } from "@temp/misc";
import { PRODUCT_TYPE_SHIPPING } from "@temp/constants";
import { FulfillmentStatus } from "@temp/components/types/globalTypes";

// import CostRow from "./CostRow";
import ProductRow, { EditableProductRowProps, ILine } from "./ProductRow";
import ShopRow from "./ShopRow";
import ShopFooterRow from "./ShopFooterRow";

import { smallScreen } from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

export interface IShopLogo {
  alt: string;
  url: string;
}

export interface IShopLine {
  id?: string;
  name: string;
  logoImage: IShopLogo;
  lines: ILine[];
  shippingVariant?: any;
}

interface TableProps extends EditableProductRowProps {
  fulfillment: any;
  isHeader: boolean;
}

const Table: React.FC<TableProps> = ({
  fulfillment,
  isHeader,
  ...rowProps
}) => {
  const lines = maybe(
    () =>
      fulfillment.lines.filter(
        (l) =>
          l.orderLine.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING
      ),
    []
  );
  const shippingUk = maybe(() =>
    fulfillment.lines.find(
      (l) =>
        l.orderLine.variant.product.productType.id === PRODUCT_TYPE_SHIPPING
    )
  );

  const ushop = maybe(() => lines[0].orderLine.variant.product.ushop);
  return (
    <Media query={{ minWidth: smallScreen }}>
      {(mediumScreen) => (
        <table className="cart-table">
          {isHeader && (
            <thead>
              <tr>
                <th>
                  <FormattedMessage {...commonMessages.products} />
                </th>
                <th>
                  <FormattedMessage {...commonMessages.status} />
                </th>
                {mediumScreen && (
                  <th className="text-right">
                    <FormattedMessage {...commonMessages.price} />
                  </th>
                )}
                <th>
                  <FormattedMessage {...commonMessages.variant} />
                </th>
                <th className="cart-table__quantity-header text-right">
                  <FormattedMessage {...commonMessages.qty} />
                </th>
                <th className="text-right">
                  {mediumScreen ? (
                    <FormattedMessage {...commonMessages.totalPrice} />
                  ) : (
                    <FormattedMessage {...commonMessages.price} />
                  )}
                </th>
              </tr>
            </thead>
          )}
          {lines && (
            <tbody>
              <ShopRow
                key={ushop.id}
                line={ushop}
                mediumScreen={mediumScreen}
              />
              {lines.map((line) => (
                <ProductRow
                  key={`${ushop.id}-${line.id}`}
                  line={line}
                  mediumScreen={mediumScreen}
                  {...rowProps}
                />
              ))}
              <ShopFooterRow
                key={`footer${ushop.id}`}
                mediumScreen={mediumScreen}
                heading="Англи дотоод хүргэлт"
                cost={shippingUk ? shippingUk.orderLine.unitPrice.gross : null}
              />
            </tbody>
          )}
        </table>
      )}
    </Media>
  );
};

export default Table;

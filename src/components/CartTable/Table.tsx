import * as React from "react";
import { FormattedMessage } from "react-intl";
// import { FormattedMessage, useIntl } from "react-intl";
import Media from "react-media";
import { commonMessages } from "@temp/intl";

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
  lines: IShopLine[];
  subtotal: React.ReactNode;
  deliveryCost?: React.ReactNode;
  totalCost?: React.ReactNode;
  discount?: React.ReactNode;
  discountName?: string;
}

const Table: React.FC<TableProps> = ({
  subtotal,
  deliveryCost,
  totalCost,
  discount,
  discountName,
  lines,
  ...rowProps
}) => {
  // const intl = useIntl();
  return (
    <Media query={{ minWidth: smallScreen }}>
      {mediumScreen => (
        <table className="cart-table">
          <thead>
            <tr>
              <th>
                <FormattedMessage {...commonMessages.products} />
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
          {lines.map(shop => (
            <tbody>
              <ShopRow key={shop.id} line={shop} mediumScreen={mediumScreen} />
              {shop.lines.map(line => (
                <ProductRow
                  key={`${shop.id}-${line.id}`}
                  line={line}
                  mediumScreen={mediumScreen}
                  {...rowProps}
                />
              ))}
              <ShopFooterRow
                key={`footer${shop.id}`}
                mediumScreen={mediumScreen}
                heading="Англи дотоод хүргэлт"
                cost={
                  shop.shippingVariant
                    ? shop.shippingVariant.pricing.price.gross
                    : null
                }
              />
            </tbody>
          ))}
        </table>
      )}
    </Media>
  );
};

export default Table;

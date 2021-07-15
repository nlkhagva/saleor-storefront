import * as React from "react";
import Media from "react-media";
import { PRODUCT_TYPE_SHIPPING } from "@temp/constants";
import { UserOrderByToken_orderByToken_lines } from "../../userAccount/views/OrderDetails/gqlTypes/UserOrderByToken";

import ProductRow, {
  EditableProductRowProps,
  ILine,
} from "./ProductRowUnfulfilled";
import ShopRow from "./ShopRowUnfulfilled";

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
  lines: UserOrderByToken_orderByToken_lines[];
}

const Table: React.FC<TableProps> = ({ lines, ...rowProps }) => {
  const ushops = [];
  const productLines = lines.filter(
    i => i.variant?.product?.productType.id !== PRODUCT_TYPE_SHIPPING
  );
  const shippingUkLines = lines.filter(
    i => i.variant?.product?.productType.id === PRODUCT_TYPE_SHIPPING
  );

  productLines.map(line => {
    const shop = ushops.find(u => u.id === line.variant.product.ushop.id);
    if (!shop) {
      ushops.push({
        ...line.variant.product.ushop,
        lines: [line],
        ukShipping: shippingUkLines.find(
          i => line.variant.product.ushop.id === i.variant.product.ushop.id
        ),
      });
    } else {
      shop.lines.push(line);
    }
  });

  return (
    <Media query={{ minWidth: smallScreen }}>
      {mediumScreen => (
        <table className="cart-table">
          {/* <thead>
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
          </thead> */}
          {ushops &&
            ushops.map((ushop, index) => (
              <tbody key={index}>
                <ShopRow line={ushop} mediumScreen={mediumScreen} />
                {ushop.lines.map((line, lineIndex) => (
                  <ProductRow
                    key={`${ushop.id}-${lineIndex}`}
                    line={line}
                    mediumScreen={mediumScreen}
                    {...rowProps}
                  />
                ))}
              </tbody>
            ))}
        </table>
      )}
    </Media>
  );
};

export default Table;

import * as React from "react";
import { PRODUCT_TYPE_SHIPPING } from "@temp/constants";
import { UserOrderByToken_orderByToken_lines } from "../../userAccount/views/OrderDetails/gqlTypes/UserOrderByToken";

import ProductRow, {
  EditableProductRowProps,
  ILine,
} from "./ProductRowUnfulfilled";
import ShopRow from "./ShopRowUnfulfilled";

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

const TableUnfulfillmentMobile: React.FC<TableProps> = ({
  lines,
  ...rowProps
}) => {
  const ushops = [];
  const productLines = lines.filter(
    i => i.variant.product?.productType.id !== PRODUCT_TYPE_SHIPPING
  );
  const shippingUkLines = lines.filter(
    i => i.variant.product?.productType.id === PRODUCT_TYPE_SHIPPING
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
    <table className="cart-table">
      {ushops &&
        ushops.map((ushop, index) => (
          <tbody key={index}>
            <ShopRow line={ushop} />
            {ushop.lines.map((line, lineIndex) => (
              <ProductRow
                key={`${ushop.id}-${lineIndex}`}
                line={line}
                {...rowProps}
              />
            ))}
          </tbody>
        ))}
    </table>
  );
};

export default TableUnfulfillmentMobile;

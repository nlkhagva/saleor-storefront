import * as React from "react";
import { maybe } from "@temp/misc";
import { PRODUCT_TYPE_SHIPPING } from "@temp/constants";
import ProductRow, { EditableProductRowProps, ILine } from "./ProductRow";
import ShopRow from "./ShopRow";
import ShopFooterRow from "./ShopFooterRow";

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

interface TableBodyProps extends EditableProductRowProps {
  fulfillment: any;
}

const TableBody: React.FC<TableBodyProps> = ({ fulfillment, ...rowProps }) => {
  const lines = maybe(
    () =>
      fulfillment.lines.filter(
        l =>
          l.orderLine.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING
      ),
    []
  );
  const shippingUk = maybe(() =>
    fulfillment.lines.find(
      l => l.orderLine.variant.product.productType.id === PRODUCT_TYPE_SHIPPING
    )
  );

  const ushop = maybe(() => lines[0].orderLine.variant.product.ushop);
  return (
    lines && (
      <tbody>
        <ShopRow key={ushop.id} line={ushop} />
        {lines.map(line => (
          <ProductRow
            key={`${ushop.id}-${line.id}`}
            line={line}
            {...rowProps}
          />
        ))}
        <ShopFooterRow
          key={`footer${ushop.id}`}
          heading="Англи дотоод хүргэлт"
          cost={shippingUk ? shippingUk.orderLine.unitPrice.gross : null}
        />
      </tbody>
    )
  );
};

export default TableBody;

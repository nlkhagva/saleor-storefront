import * as React from "react";

import { EditableProductRowProps, ILine } from "./ProductRow";

import "./scss/index.scss";

import TableBody from "./TableBody";

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
  fulfillments: any[];
}

const Table: React.FC<TableProps> = ({ fulfillments, ...rowProps }) => {
  return (
    fulfillments &&
    fulfillments.length > 0 && (
      <table className="cart-table">
        {fulfillments.map(fulfillment => (
          <React.Fragment key={fulfillment.id}>
            <TableBody fulfillment={fulfillment} {...rowProps} />
          </React.Fragment>
        ))}
      </table>
    )
  );
};

export default Table;

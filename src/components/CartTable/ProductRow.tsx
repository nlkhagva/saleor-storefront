import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { ProductVariant } from "@saleor/sdk/lib/fragments/gqlTypes/ProductVariant";
import { OrderByToken_orderByToken_lines_unitPrice } from "@saleor/sdk/lib/queries/gqlTypes/OrderByToken";

import { maybe } from "@temp/misc";
import { SHIPPING_STATUS } from "@temp/constants";
import { generateProductUrl } from "../../core/utils";

export type ILine = Omit<
  ProductVariant,
  "__typename" | "sku" | "quantityAvailable" | "isAvailable"
> & {
  quantity: number;
  totalPrice: OrderByToken_orderByToken_lines_unitPrice;
  quantityAvailable?: number;
  variant?: any;
};

interface ReadProductRowProps {
  mediumScreen: boolean;
  line: any;
}

export interface EditableProductRowProps {
  processing?: boolean;
}

const ProductRow: React.FC<ReadProductRowProps & EditableProductRowProps> = ({
  mediumScreen,
  processing,
  line,
}) => {
  const productUrl = generateProductUrl(
    line.orderLine.variant.product.id,
    line.orderLine.variant.product.name
  );

  const soonDateStatus = ["shipping"];
  const isSoonDate = line =>
    soonDateStatus.includes(line.ustatus.toLowerCase())
      ? line.changedDate
      : line.soonDate;
  const ushopStatusRender = (line: any) =>
    isSoonDate(line)
      ? `${statusLabel(line.ustatus)} /${isSoonDate(line)}/`
      : `${statusLabel(line.ustatus)}`;

  const statusLabel = (value: string) =>
    SHIPPING_STATUS.filter(l => l.value === value)[0].label;

  return (
    <tr
      className={classNames({
        "cart-table-row--processing": processing,
      })}
    >
      <td className="cart-table__thumbnail ">
        <div>
          {mediumScreen && (
            <Link to={productUrl}>
              <Thumbnail source={line.orderLine.variant.product} />
            </Link>
          )}
          <Link to={productUrl}>{line.orderLine.variant.product.name}</Link>
        </div>
      </td>

      <td>{maybe(() => ushopStatusRender(line)) || ""}</td>

      {mediumScreen && (
        <td className="text-right">
          <TaxedMoney taxedMoney={line.orderLine.variant.pricing.price} />
        </td>
      )}

      <td>
        {line.orderLine.variant.attributes.map(
          ({ attribute, values }, attributeIndex) => (
            <p key={attribute.id}>
              {attribute.name}: {values.map(value => value.name).join(", ")}
            </p>
          )
        )}
      </td>

      <td className="cart-table__quantity-cell text-right">
        <p>{line.orderLine.quantity}</p>
      </td>

      <td className="money text-right">
        <TaxedMoney taxedMoney={line.orderLine.totalPrice} />
      </td>
    </tr>
  );
};

export default ProductRow;

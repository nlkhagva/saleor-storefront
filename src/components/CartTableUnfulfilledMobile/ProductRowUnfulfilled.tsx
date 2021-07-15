import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { ProductVariant } from "unurshop-sdk/lib/fragments/gqlTypes/ProductVariant";
import { OrderByToken_orderByToken_lines_unitPrice } from "unurshop-sdk/lib/queries/gqlTypes/OrderByToken";

// import { maybe } from "@temp/misc";
// import { SHIPPING_STATUS } from "@temp/constants";
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
  line: any;
}

export interface EditableProductRowProps {
  processing?: boolean;
}

const ProductRow: React.FC<ReadProductRowProps & EditableProductRowProps> = ({
  processing,
  line,
}) => {
  const productUrl = generateProductUrl(
    line.variant.product.id,
    line.variant.product.name
  );

  return (
    <>
      <tr
        className={classNames({
          "cart-table-row--processing": processing,
        })}
      >
        <td className="cart-table__thumbnail ">
          <div>
            <Link to={productUrl}>
              <Thumbnail source={line} />
            </Link>
          </div>
        </td>

        <td>
          <Link to={productUrl}>{line.productName}</Link>
          {line.variant?.attributes.map(
            ({ attribute, values }, attributeIndex) => (
              <p key={attribute.id}>
                {attribute.name}: {values.map(value => value.name).join(", ")}
              </p>
            )
          )}
        </td>
        <td className="text-right">
          <TaxedMoney taxedMoney={line.unitPrice} />
        </td>

        <td className="cart-table__quantity-cell text-right">
          <p>{line.quantity}</p>
        </td>

        <td className="money text-right">
          <TaxedMoney taxedMoney={line.totalPrice} />
        </td>
      </tr>
    </>
  );
};

export default ProductRow;

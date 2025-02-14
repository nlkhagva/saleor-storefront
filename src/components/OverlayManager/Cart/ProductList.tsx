import React from "react";
// import { FormattedMessage } from 'react-intl';
import { ICheckoutModelLine } from "unurshop-sdk/lib/helpers";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { PRODUCT_TYPE_SHIPPING } from "@app/custom/constants";
import { Money, TaxedMoney } from "@components/containers";
import { Thumbnail } from "@components/molecules";
import { generateProductUrl } from "../../../core/utils";
import removeImg from "../../../images/garbage.svg";

// import CustomList from "./CustomList";

// import { TypedProductVariants } from "./queries";

const ProductList: React.SFC<{
  lines: ICheckoutModelLine[];
  add?(variantId: string, quantity: number): void;
  remove?(variantId: string): void;
}> = ({ lines, add, remove }) => {
  const ptShippingId = PRODUCT_TYPE_SHIPPING;

  const ushops = [];
  const removeIds = [];

  const variants = lines.map(tmp => tmp.variant);
  const productVariants = variants.filter(
    tmp => tmp.product.productType.id !== ptShippingId
  );
  const shippingVariants = variants.filter(
    tmp => tmp.product.productType.id === ptShippingId
  );

  /** productuudiig delguurt hargalzuulj bga hesge */
  productVariants.map(variant => {
    const shop = ushops.find(el => el.id === variant.product.ushop.id);
    const line = lines.find(el => el.variant.id === variant.id);

    // if (variant.product.metadata) {
    //   line.variant.product["metadata"] = variant.product.metadata;
    // }

    if (!shop) {
      ushops.push({
        ...variant.product.ushop,
        lines: [line],
      });
    } else {
      shop.lines.push(line);
    }
  });
  /** remove hiih shaardlagtai id bwal olj bga  */
  shippingVariants.map(el => {
    const ushop = ushops.find(shop => shop.id === el.product.ushop.id);

    if (ushop) {
      ushop.shippingVariantId = el.id;
    } else {
      removeIds.push(el.id);
    }
  });

  if (add) {
    const addIds = [];

    ushops
      .filter(
        ushop =>
          ushop.shippingVariantId === undefined &&
          ushop.shippingProduct !== null &&
          ushop.shippingProduct.variants.length > 0
      )
      .map(ushop => {
        const max_variant = ushop.shippingProduct.variants.reduce((p, v) =>
          p.pricing.price.gross.amount > v.pricing.price.gross.amount ? p : v
        );
        addIds.push(max_variant.id);
      });
    addIds.map(id => {
      add(id, 1);
    });
  }

  if (remove) {
    removeIds.map(id => {
      remove(id);
    });
  }
  // console.log(ushops);

  return (
    <>
      {ushops.map((_shop, index) => {
        const shopTotal = _shop.lines
          .map(line => line.totalPrice.gross.amount)
          .reduce((a, c) => a + c);

        let priceFormat = null;

        const selectedShipping =
          _shop.shippingProduct !== null
            ? _shop.shippingProduct.variants!.find(
                v => v.id === _shop.shippingVariantId
              )
            : null;

        return (
          <div key={index} className="cart__shop">
            <h5 className="cart__shop__title">
              <span className="cart__shop__name">
                <img
                  className="cart__shop__logo"
                  src={_shop.logoImage.url}
                  alt={_shop.name}
                />
                <span>{_shop.name}</span>
              </span>
              <span className="cart__shop__total">
                <Money money={{ amount: shopTotal, currency: "GBP" }} />
              </span>
            </h5>
            <>
              <ul className="cart__list">
                {_shop.lines.map((line, index) => {
                  const productUrl = generateProductUrl(
                    line.variant.product.id,
                    line.variant.product.name
                  );
                  const key = line.id ? `id-${line.id}` : `idx-${index}`;

                  if (!priceFormat) {
                    priceFormat = line.variant.pricing.price.gross;
                  }

                  return (
                    <li key={key} className="cart__list__item">
                      <Link to={productUrl}>
                        <Thumbnail source={line.variant.product} />
                      </Link>
                      <div className="cart__list__item__details">
                        <p>
                          <TaxedMoney taxedMoney={line.variant.pricing.price} />
                        </p>
                        <Link to={productUrl}>
                          <p>{line.variant.product.name}</p>
                        </Link>
                        <span className="cart__list__item__details__variant">
                          <span>{line.variant.name}</span>
                          <span>{`Тоо: ${line.quantity}`}</span>
                        </span>

                        {remove && (
                          <ReactSVG
                            path={removeImg}
                            className="cart__list__item__details__delete-icon"
                            onClick={() => remove(line.variant.id)}
                          />
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <table className="ushop-price-table">
                <tbody>
                  <tr>
                    <td>Барааны үнэ</td>
                    <td>
                      <b>
                        <Money money={{ ...priceFormat, amount: shopTotal }} />
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>Англи дотоод хүргэлт</td>
                    <td>
                      {selectedShipping ? (
                        <Money money={selectedShipping.pricing.price.gross} />
                      ) : _shop.id === "VXNob3A6MQ==" ? (
                        "Free"
                      ) : (
                        "Тодорхойгүй"
                      )}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>{`Нийт (${_shop.name})`}</td>
                    <td>
                      <Money
                        money={{
                          ...priceFormat,
                          amount:
                            shopTotal +
                            (selectedShipping
                              ? selectedShipping.pricing.price.gross.amount
                              : 0),
                        }}
                      />
                    </td>
                  </tr>
                </tfoot>
              </table>
            </>
            {/* )} */}
          </div>
        );
      })}
    </>
  );
};
export default ProductList;

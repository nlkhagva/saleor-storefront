import React, { useEffect, useState } from "react";
import { IItems } from "@saleor/sdk/lib/api/Cart/types";
import { CartRow } from "@components/organisms";
import { Money, TaxedMoney } from "@components/containers";

import { PRODUCT_TYPE_SHIPPING } from "@app/custom/constants";

interface IProps {
  lines: IItems;
  removeItem: (variantId: string) => any;
  updateItem: (variantId: string, quantity: number) => any;
  addItem: (variantId: string, quantity: number) => any;
}

const GroupUshop: React.FC<IProps> = ({
  lines,
  removeItem,
  updateItem,
  addItem,
}: IProps) => {
  const [_ushops, setUshops] = useState<any[]>([]);

  useEffect(() => {
    const ushops: any[] = [];
    const removeIds: any[] = [];

    const variants = lines?.map(tmp => tmp.variant);
    const productVariants = variants?.filter(
      tmp => tmp?.product?.productType.id !== PRODUCT_TYPE_SHIPPING
    );
    const shippingVariants = variants?.filter(
      tmp => tmp?.product?.productType.id === PRODUCT_TYPE_SHIPPING
    );

    /** productuudiig delguurt hargalzuulj bga hesge */
    productVariants?.map(variant => {
      const shop = ushops.find(el => el.id === variant?.product?.ushop?.id);
      const line = lines?.find(el => el.variant.id === variant.id);

      // if (variant.product.metadata) {
      //   line.variant.product["metadata"] = variant.product.metadata;
      // }

      if (!shop) {
        ushops.push({
          ...variant?.product?.ushop,
          lines: [line],
        });
      } else {
        shop.lines.push(line);
      }
    });
    /** remove hiih shaardlagtai id bwal olj bga  */
    shippingVariants?.map(el => {
      const ushop = ushops.find(shop => shop.id === el?.product?.ushop?.id);

      if (ushop) {
        ushop.shippingVariantId = el.id;
      } else {
        removeIds.push(el.id);
      }
    });

    const addIds: any[] = [];

    ushops
      .filter(
        ushop =>
          ushop.shippingVariantId === undefined &&
          ushop.shippingProduct !== null &&
          ushop.shippingProduct?.variants.length > 0
      )
      .map(ushop => {
        const max_variant = ushop.shippingProduct.variants.reduce(
          (p: any, v: any) =>
            p.pricing.price.gross.amount > v.pricing.price.gross.amount ? p : v
        );
        addIds.push(max_variant.id);
      });
    addIds.map(id => {
      addItem(id, 1);
    });

    removeIds.map(id => {
      removeItem(id);
    });
    setUshops(ushops);
  }, [lines]);
  const changeUkShipping = (addId: string, removeId: string) => {
    addItem(addId, 1);
    removeItem(removeId);
  };

  return (
    <>
      {_ushops.map((_shop, index) => {
        const shopTotal = _shop.lines
          .map((line: any) => line.totalPrice.gross.amount)
          .reduce((a: any, c: any) => a + c);

        let priceFormat: any = null;

        const selectedShipping =
          _shop.shippingProduct !== null
            ? _shop.shippingProduct.variants!.find(
                (v: any) => v.id === _shop.shippingVariantId
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
              <ul className="cart__list" style={{ padding: 0 }}>
                {_shop.lines.map((line: any, index: any) => {
                  const { id, variant, quantity, totalPrice } = line;
                  if (!priceFormat) {
                    priceFormat = line.variant.pricing.price.gross;
                  }

                  return (
                    <CartRow
                      key={id ? `id-${id}` : `idx-${index}`}
                      index={index}
                      id={variant?.product?.id || ""}
                      name={variant?.product?.name || ""}
                      maxQuantity={variant.quantityAvailable || quantity}
                      quantity={quantity}
                      onRemove={() => removeItem(variant.id)}
                      onQuantityChange={quantity =>
                        updateItem(variant.id, quantity)
                      }
                      thumbnail={{
                        ...variant?.product?.thumbnail,
                        alt: variant?.product?.thumbnail?.alt || "",
                      }}
                      line={line}
                      totalPrice={<TaxedMoney taxedMoney={totalPrice} />}
                      unitPrice={
                        <TaxedMoney taxedMoney={variant?.pricing?.price} />
                      }
                      sku={variant.sku}
                      attributes={variant.attributes?.map((attribute: any) => {
                        return {
                          attribute: {
                            id: attribute.attribute.id,
                            name: attribute.attribute.name || "",
                          },
                          values: attribute.values.map((value: any) => {
                            return {
                              id: value?.id,
                              name: value?.name || "",
                              value: value?.value,
                            };
                          }),
                        };
                      })}
                    />
                  );
                })}
              </ul>
              <table
                className="ushop-price-table"
                style={{ margin: 0, width: "100%", fontSize: "1rem" }}
              >
                <tbody>
                  <tr>
                    <td>Барааны үнэ</td>
                    <td style={{ width: 120 }}>
                      <b>
                        <Money money={{ ...priceFormat, amount: shopTotal }} />
                      </b>
                    </td>
                  </tr>
                  <tr>
                    <td>Англи дотоод хүргэлт</td>
                    {/* <td>{`Англи дотоод хүргэлт (${_shop.name})`}</td> */}
                    <td>
                      {selectedShipping ? (
                        <select
                          style={{ fontSize: "1rem", padding: 5 }}
                          onChange={el => {
                            changeUkShipping(
                              el.target.value,
                              selectedShipping.id
                            );
                          }}
                        >
                          {_shop.shippingProduct.variants.map(
                            (variant: any, index: number) => (
                              <option
                                key={index}
                                value={variant.id}
                                selected={variant.id === selectedShipping.id}
                              >
                                {variant.name}: £
                                {variant.pricing.price.gross.amount}
                              </option>
                            )
                          )}
                        </select>
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
  /*
  return lines?.map((line, index) => {
    const { id, variant, quantity, totalPrice } = line;
    return (
      <CartRow
        key={id ? `id-${id}` : `idx-${index}`}
        index={index}
        id={variant?.product?.id || ""}
        name={variant?.product?.name || ""}
        maxQuantity={variant.quantityAvailable || quantity}
        quantity={quantity}
        onRemove={() => removeItem(variant.id)}
        onQuantityChange={quantity => updateItem(variant.id, quantity)}
        thumbnail={{
          ...variant?.product?.thumbnail,
          alt: variant?.product?.thumbnail?.alt || "",
        }}
        line={line}
        totalPrice={<TaxedMoney taxedMoney={totalPrice} />}
        unitPrice={<TaxedMoney taxedMoney={variant?.pricing?.price} />}
        sku={variant.sku}
        attributes={variant.attributes?.map(attribute => {
          return {
            attribute: {
              id: attribute.attribute.id,
              name: attribute.attribute.name || "",
            },
            values: attribute.values.map(value => {
              return {
                id: value?.id,
                name: value?.name || "",
                value: value?.value,
              };
            }),
          };
        })}
      />
    );
  });
  */
};

export default GroupUshop;

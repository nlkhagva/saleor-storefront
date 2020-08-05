import "./scss/index.scss";

import * as React from "react";
// import { FormattedMessage } from 'react-intl';
import { generatePath, Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { TaxedMoney } from "@components/containers";
import { useAuth, useCart, useCheckout } from "@saleor/sdk";

// import { commonMessages } from '@temp/intl';
import {
  Button,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
} from "../..";
import { cartUrl, checkoutLoginUrl, checkoutUrl } from "../../../app/routes";
import cartImg from "../../../images/cart.svg";
import closeImg from "../../../images/x.svg";
import Loader from "../../Loader";
import Empty from "./Empty";
import ProductList from "./ProductList";

const Cart: React.FC<{ overlay: OverlayContextInterface }> = ({ overlay }) => {
  const { user } = useAuth();
  const { checkout } = useCheckout();
  const {
    items,
    addItem,
    removeItem,
    // subtotalPrice,
    shippingPrice,
    discount,
    totalPrice,
  } = useCart();
  const shippingTaxedPrice =
    checkout?.shippingMethod?.id && shippingPrice
      ? {
          gross: shippingPrice,
          net: shippingPrice,
        }
      : null;
  const promoTaxedPrice = discount && {
    gross: discount,
    net: discount,
  };

  const missingVariants = () => {
    return items.find(item => !item.variant || !item.totalPrice);
  };

  return (
    <Overlay testingContext="cartOverlay" context={overlay}>
      <Online>
        <div className="cart">
          <div className="overlay__header">
            <ReactSVG
              path={closeImg}
              onClick={overlay.hide}
              className="overlay__header__close-icon"
            />
          </div>
          <div className="ushop-title" style={{ marginTop: "-16px" }}>
            <div className="overlay__cart-icon">
              <Link
                to={generatePath(cartUrl, {
                  token: null,
                })}
              >
                <ReactSVG path={cartImg} className="overlay__cart-icon__svg" />
                <span className="overlay__cart-icon__quantity">
                  {items?.reduce(
                    (prevVal, currVal) => prevVal + currVal.quantity,
                    0
                  ) || 0}{" "}
                </span>
              </Link>
            </div>

            <h4>Таны сагсан дахь</h4>
            <h3>Барааны жагсаалт</h3>
          </div>

          {items?.length ? (
            <>
              {missingVariants() ? (
                <Loader full />
              ) : (
                <>
                  <ProductList
                    lines={items}
                    add={addItem}
                    remove={removeItem}
                  />
                  <div className="cart__footer">
                    {/* <div className="cart__footer__price">
                      <span>Subtotal</span>
                      <span>
                        <TaxedMoney
                          data-test="subtotalPrice"
                          taxedMoney={subtotalPrice}
                        />
                      </span>
                    </div> */}

                    {shippingTaxedPrice &&
                      shippingTaxedPrice.gross.amount !== 0 && (
                        <div className="cart__footer__price">
                          <span>Shipping</span>
                          <span>
                            <TaxedMoney
                              data-test="shippingPrice"
                              taxedMoney={shippingTaxedPrice}
                            />
                          </span>
                        </div>
                      )}

                    {promoTaxedPrice && promoTaxedPrice.gross.amount !== 0 && (
                      <div className="cart__footer__price">
                        <span>Promo code</span>
                        <span>
                          <TaxedMoney
                            data-test="promoCodePrice"
                            taxedMoney={promoTaxedPrice}
                          />
                        </span>
                      </div>
                    )}

                    <div className="cart__footer__price">
                      <span>Одоогийн нийт</span>
                      <span>
                        <TaxedMoney
                          data-test="totalPrice"
                          taxedMoney={totalPrice}
                        />
                      </span>
                    </div>

                    <div className="cart__footer__button">
                      <Link
                        to={generatePath(cartUrl, {
                          token: null,
                        })}
                      >
                        <Button testingContext="gotoBagViewButton" secondary>
                          Сагс руу очих
                        </Button>
                      </Link>
                    </div>
                    <div className="cart__footer__button">
                      <Link to={user ? checkoutUrl : checkoutLoginUrl}>
                        <Button testingContext="gotoCheckoutButton">
                          Захиалга хийх
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <Empty overlayHide={overlay.hide} />
          )}
        </div>
      </Online>
      <Offline>
        <div className="cart">
          <OfflinePlaceholder />
        </div>
      </Offline>
    </Overlay>
  );
};

export default Cart;

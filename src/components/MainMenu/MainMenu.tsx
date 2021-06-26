import "./scss/index.scss";

import React from "react";
import Media from "react-media";
import { PRODUCT_TYPE_SHIPPING } from "@app/custom/constants";

import { useAuth, useCart } from "unurshop-sdk";

import { OverlayContext } from "..";
import { mediumScreen } from "../../globalStyles/scss/variables.scss";
import WebMainMenu from "./WebMainmenu";
import MobileMainMenu from "./MobileMainmenu";

const MainMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const { items } = useCart();

  const handleSignOut = () => {
    signOut();
  };

  const cartItemsQuantity =
    (items &&
      items
        .filter(item => {
          if (item.variant.product) {
            return (
              item.variant.product.productType.id !== PRODUCT_TYPE_SHIPPING
            );
          }
          return true;
        })
        .reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;

  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <div style={{ borderBottom: "1px solid #ebebeb" }}>
          <nav className="main-menu" id="header">
            <Media
              query={{ minWidth: mediumScreen }}
              render={() => (
                <WebMainMenu
                  overlayContext={overlayContext}
                  handleSignOut={handleSignOut}
                  cartItemsQuantity={cartItemsQuantity}
                  user={user}
                />
              )}
            />
            <Media
              query={{ maxWidth: mediumScreen }}
              render={() => (
                <MobileMainMenu
                  overlayContext={overlayContext}
                  handleSignOut={handleSignOut}
                  cartItemsQuantity={cartItemsQuantity}
                  user={user}
                />
              )}
            />
          </nav>
        </div>
      )}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;

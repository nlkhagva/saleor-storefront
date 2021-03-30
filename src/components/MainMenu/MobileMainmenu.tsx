import "./scss/index.scss";

import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { commonMessages } from "@temp/intl";

import { MenuDropdown, Offline, Online, OverlayTheme, OverlayType } from "..";
import * as appPaths from "../../app/routes";
import { maybe } from "../../core/utils";
import cartImg from "../../images/cart.svg";

import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";
import { TypedMainMenuQuery } from "./queries";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";

interface MobileProps {
  overlayContext: any;
  user: any;
  handleSignOut: any;
  cartItemsQuantity: any;
}

const MobileMainMenu: React.FC<MobileProps> = props => {
  const { overlayContext, user, handleSignOut, cartItemsQuantity } = props;

  return (
    <>
      <div className="main-menu__left">
        <TypedMainMenuQuery renderOnError displayLoader={false}>
          {({ data }) => {
            const items = maybe(() => data.shop.navigation.main.items, []);

            return (
              <ul>
                <li
                  data-test="toggleSideMenuLink"
                  className="main-menu__hamburger"
                  onClick={() =>
                    overlayContext.show(
                      OverlayType.sideNav,
                      OverlayTheme.left,
                      { data: items }
                    )
                  }
                >
                  <ReactSVG
                    path={hamburgerImg}
                    className="main-menu__hamburger--icon"
                  />
                  <ReactSVG
                    path={hamburgerHoverImg}
                    className="main-menu__hamburger--hover"
                  />
                </li>
              </ul>
            );
          }}
        </TypedMainMenuQuery>
      </div>
      <div className="main-menu__center">
        <div className="ushop__searchbox">
          <div className="ushop-search-input">
            <button
              onClick={() =>
                overlayContext.show(OverlayType.search, OverlayTheme.right)
              }
            >
              Хайх & Бараа захиалах
              <span>
                <ReactSVG path={searchImg} />
              </span>
            </button>
            {/* <input type="text" /> */}
          </div>
        </div>
      </div>

      <div className="main-menu__right">
        <ul>
          <Online>
            {/* <>
              {user ? (
                <MenuDropdown
                  head={
                    <li className="main-menu__icon main-menu__user--active">
                      <ReactSVG path={userImg} />
                    </li>
                  }
                  content={
                    <ul className="main-menu__dropdown">
                      <li data-test="desktopMenuMyAccountLink">
                        <Link to={appPaths.accountUrl}>
                          <FormattedMessage {...commonMessages.myAccount} />
                        </Link>
                      </li>
                      <li data-test="desktopMenuOrderHistoryLink">
                        <Link to={appPaths.orderHistoryUrl}>
                          <FormattedMessage {...commonMessages.orderHistory} />
                        </Link>
                      </li>
                      <li data-test="desktopMenuAddressBookLink">
                        <Link to={appPaths.addressBookUrl}>
                          <FormattedMessage {...commonMessages.addressBook} />
                        </Link>
                      </li>
                      <li
                        onClick={handleSignOut}
                        data-test="desktopMenuLogoutLink"
                      >
                        <FormattedMessage {...commonMessages.logOut} />
                      </li>
                    </ul>
                  }
                />
              ) : (
                <li
                  data-test="desktopMenuLoginOverlayLink"
                  className="main-menu__icon"
                  onClick={() =>
                    overlayContext.show(OverlayType.login, OverlayTheme.right)
                  }
                >
                  <ReactSVG path={userImg} />
                </li>
              )}
            </> */}
            <li
              data-test="menuCartOverlayLink"
              className="main-menu__icon main-menu__cart"
              onClick={() => {
                overlayContext.show(OverlayType.cart, OverlayTheme.right);
              }}
            >
              <ReactSVG path={cartImg} />
              {cartItemsQuantity > 0 ? (
                <span className="main-menu__cart__quantity">
                  {cartItemsQuantity}
                </span>
              ) : null}
            </li>
          </Online>
          <Offline>
            <li className="main-menu__offline">&nbsp;</li>
          </Offline>
          {/* <li
            data-test="menuSearchOverlayLink"
            className="main-menu__search"
            onClick={() =>
              overlayContext.show(OverlayType.search, OverlayTheme.right)
            }
          >
            <ReactSVG path={searchImg} />
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default MobileMainMenu;

import "./scss/index.scss";

import React from "react";
import { FormattedMessage } from "react-intl";
import { NavLink as Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { commonMessages } from "@temp/intl";

import { MenuDropdown, Offline, Online, OverlayTheme, OverlayType } from "..";
import * as appPaths from "../../app/routes";
import cartImg from "../../images/cart.svg";
import logoImg from "../../images/unurshop/logo-without-border.svg";
// import logoPNG from "../../images/unurshop/logo-without-border.png";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";
import { TypedMainMenuQuery } from "./queries";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import { maybe } from "../../core/utils";

interface WebProps {
  overlayContext: any;
  user: any;
  handleSignOut: any;
  cartItemsQuantity: any;
}

const WebMainMenu: React.FC<WebProps> = props => {
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
                <li className="main-menu__unurshop-logo">
                  <Link to={appPaths.baseUrl}>
                    <ReactSVG path={logoImg} />
                    {/* <img src={logoPNG} alt="UNURSHOP" /> */}
                  </Link>
                </li>
              </ul>
            );
          }}
        </TypedMainMenuQuery>

        {/* <ul className="webmenu">
          <li>
            <Link to={appPaths.baseWomenUrl} activeClassName="active">
              <span>Эмэгтэй</span>
            </Link>
          </li>
          <li>
            <Link to={appPaths.baseMenUrl}>
              <span>Эрэгтэй</span>
            </Link>
          </li>
          <li>
            <Link to={appPaths.baseKidsUrl}>
              <span>Хүүхэд</span>
            </Link>
          </li>
        </ul> */}
      </div>
      <div className="main-menu__center">
        <div className="ushop__searchbox">
          <button className="ushop_all">Бүгд</button>
          <div className="ushop-search-input">
            <button
              onClick={() =>
                overlayContext.show(OverlayType.search, OverlayTheme.right)
              }
            >
              Үгээр хайх & Бараа захиалах
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
            <>
              {user ? (
                <MenuDropdown
                  head={
                    <li className="main-menu__icon main-menu__user--active">
                      <ReactSVG path={userImg} />
                      <span style={{ paddingLeft: "1rem" }}>
                        {user.firstName ? user.firstName : user.email}
                      </span>
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
                  className="main-menu__icon user-icon"
                  onClick={() =>
                    overlayContext.show(OverlayType.login, OverlayTheme.right)
                  }
                >
                  <ReactSVG path={userImg} />
                  <span>Нэвтрэх</span>
                </li>
              )}
            </>

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
            <li className="main-menu__offline">
              <span>
                <FormattedMessage defaultMessage="Offline" />
              </span>
            </li>
          </Offline>
          {/* <li
            data-test="menuSearchOverlayLink"
            className="main-menu__search"
            onClick={() =>
              overlayContext.show(OverlayType.search, OverlayTheme.right)
            }
          >
            <span>
              <FormattedMessage {...commonMessages.search} />
            </span>
            <ReactSVG path={searchImg} />
          </li> */}
        </ul>
      </div>
      {/* <div className="main-menu__searchbar">
        <ul>
          <li
            data-test="menuSearchOverlayLink"
            className="main-menu__search"
            onClick={() =>
              overlayContext.show(OverlayType.search, OverlayTheme.right)
            }
          >
            <ReactSVG path={searchImg} />
            <span className="search-text">
              <FormattedMessage {...commonMessages.search} />
            </span>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default WebMainMenu;

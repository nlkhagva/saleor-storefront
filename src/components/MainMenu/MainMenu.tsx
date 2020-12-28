import "./scss/index.scss";
import { PRODUCT_TYPE_SHIPPING } from "@app/custom/constants";

import React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { useCart } from "@saleor/sdk";

// import { useCart, useSignOut, useUserDetails } from '@saleor/sdk';
import { Offline, Online, OverlayContext, OverlayTheme, OverlayType } from "..";
// import { MenuDropdown, Offline, Online, OverlayContext, OverlayTheme, OverlayType } from '../';
import * as appPaths from "../../app/routes";
import { maybe } from "../../core/utils";
// import { mediumScreen, smallScreen } from '../../globalStyles/scss/variables.scss';
import { mediumScreen } from "../../globalStyles/scss/variables.scss";
import cartImg from "../../images/cart.svg";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import logoImg from "../../images/logo.svg";
import searchImg from "../../images/search.svg";
// import userImg from '../../images/user.svg';
// import NavDropdown from './NavDropdown';
import { TypedMainMenuQuery } from "./queries";

const MainMenu: React.FC = () => {
  // const { data: user } = useUserDetails();
  // const [signOut] = useSignOut();
  const { items } = useCart();

  // const handleSignOut = () => {
  //   signOut();
  // };

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
        <nav className="main-menu" id="header">
          <div className="main-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <ul>
                    <li
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
                    {/* <Media
                      query={{ maxWidth: mediumScreen }}
                      render={() => (
                        
                      )}
                    /> */}
                    {/* <Media
                      query={{ minWidth: mediumScreen }}
                      render={() =>
                        items.map(item => (
                          <li
                            data-test="mainMenuItem"
                            className="main-menu__item"
                            key={item.id}
                          >
                            <NavDropdown overlay={overlayContext} {...item} />
                          </li>
                        ))
                      }
                    /> */}
                    {/* <Online>
                      <Media
                        query={{ maxWidth: smallScreen }}
                        render={() => (
                          <>
                            {user ? (
                              <MenuDropdown
                                suffixClass={'__rightdown'}
                                head={
                                  <li className="main-menu__icon main-menu__user--active">
                                    <ReactSVG path={userImg} />
                                  </li>
                                }
                                content={
                                  <ul className="main-menu__dropdown">
                                    <li data-testid="my_account__link">
                                      <Link to={appPaths.accountUrl}>My Account</Link>
                                    </li>
                                    <li data-testid="order_history__link">
                                      <Link to={appPaths.orderHistoryUrl}>
                                        Order history
                                </Link>
                                    </li>
                                    <li data-testid="address_book__link">
                                      <Link to={appPaths.addressBookUrl}>
                                        Address book
                                </Link>
                                    </li>
                                    <li
                                      onClick={handleSignOut}
                                      data-testid="logout-link"
                                    >
                                      Log Out
                              </li>
                                  </ul>
                                }
                              />
                            ) : (
                                <li
                                  data-testid="login-btn"
                                  className="main-menu__icon"
                                  onClick={() =>
                                    overlayContext.show(
                                      OverlayType.login,
                                      OverlayTheme.left
                                    )
                                  }
                                >
                                  <ReactSVG path={userImg} />
                                </li>
                              )}
                          </>
                        )}
                      />
                    </Online> */}
                  </ul>
                );
              }}
            </TypedMainMenuQuery>
          </div>

          <div className="main-menu__center">
            <Media
              query={{ minWidth: mediumScreen }}
              render={() => (
                <ul className="large-menu">
                  <li>
                    <Link to={appPaths.baseUrl}>Захиалга</Link>
                  </li>
                  <li>
                    <Link to={appPaths.baseUrl}>Машин & Сэлбэг</Link>
                  </li>
                  <li>
                    <Link to={appPaths.baseUrl}>
                      <img src={logoImg} alt="Unurshop.mn" />
                    </Link>
                  </li>
                  <li>
                    <Link to={appPaths.baseUrl}>Өөрөө авах</Link>
                  </li>
                  <li className="cargo">
                    <Link to={appPaths.baseUrl}>Карго</Link>
                  </li>
                </ul>
              )}
            />
            <Media
              query={{ maxWidth: mediumScreen }}
              render={() => (
                <ul>
                  <li
                    className="main-menu__search"
                    onClick={() =>
                      overlayContext.show(
                        OverlayType.search,
                        OverlayTheme.right
                      )
                    }
                  >
                    <Media
                      query={{ minWidth: mediumScreen }}
                      render={() => <span>Search</span>}
                    />
                    <span>
                      <ReactSVG path={searchImg} className="search-icon" />
                      Үгээр хайх & Бараа захиалах
                    </span>
                  </li>
                  {/* <li
                    className="main-menu__order-button"
                    onClick={() =>
                      overlayContext.show(
                        OverlayType.orderProduct,
                        OverlayTheme.top
                      )
                    }>
                    <b>+</b> Бараа захиалах
                  </li> */}
                </ul>
              )}
            />
          </div>

          <div className="main-menu__right">
            <ul>
              <Media
                query={{ minWidth: mediumScreen }}
                render={() => (
                  <li
                    className="main-menu__order-button"
                    onClick={
                      () => false
                      // overlayContext.show(
                      //   OverlayType.orderProduct,
                      //   OverlayTheme.top
                      // )
                    }
                  >
                    <b>+</b> Бараа захиалах
                  </li>
                )}
              />
              <Online>
                {/* <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <>
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
                                  <FormattedMessage
                                    {...commonMessages.myAccount}
                                  />
                                </Link>
                              </li>
                              <li data-test="desktopMenuOrderHistoryLink">
                                <Link to={appPaths.orderHistoryUrl}>
                                  <FormattedMessage
                                    {...commonMessages.orderHistory}
                                  />
                                </Link>
                              </li>
                              <li data-test="desktopMenuAddressBookLink">
                                <Link to={appPaths.addressBookUrl}>
                                  <FormattedMessage
                                    {...commonMessages.addressBook}
                                  />
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
                            data-testid="login-btn"
                            className="main-menu__icon"
                            onClick={() =>
                              overlayContext.show(
                                OverlayType.login,
                                OverlayTheme.right
                              )
                            }
                          >
                            <ReactSVG path={userImg} />
                          </li>
                        )}
                    </>
                  )}
                /> */}
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
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => (
                      <span>
                        Offline
                        {/* <FormattedMessage defaultMessage="Offline" /> */}
                      </span>
                    )}
                  />
                </li>
              </Offline>
              {/* <li
                data-test="menuSearchOverlayLink"
                className="main-menu__search"
                onClick={() =>
                  overlayContext.show(OverlayType.search, OverlayTheme.right)
                }
              >
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => (
                    <span>
                      <FormattedMessage {...commonMessages.search} />
                    </span>
                  )}
                />
                <ReactSVG path={searchImg} />
              </li> */}
            </ul>
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;

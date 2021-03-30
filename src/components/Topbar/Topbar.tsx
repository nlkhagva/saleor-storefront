import "./scss/index.scss";

import * as React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";
import { FormattedMessage } from "react-intl";
import { commonMessages } from "@temp/intl";

import { useAuth } from "@saleor/sdk";

// import { useSignOut, useUserDetails } from '@sdk/react';
// import { OverlayContext } from "..";
import { OverlayContext, OverlayTheme, OverlayType, MenuDropdown } from "..";
import * as appPaths from "../../app/routes";
// import iconUk from "../../images/unurshop/icons/flag.svg";
import { mediumScreen } from "../../globalStyles/scss/variables.scss";
// import iconMn from "../../images/unurshop/icons/mn.svg";
import iconPhone from "../../images/unurshop/icons/phone.svg";
// import iconPound from "../../images/unurshop/icons/pound.svg";
// import iconTugrug from "../../images/unurshop/icons/tugrug.svg";
import iconUser from "../../images/unurshop/icons/user.svg";

// import {
//   accountUrl,
//   addressBookUrl,
//   baseUrl,
//   orderHistoryUrl,
//   paymentOptionsUrl
// } from "../../routes";

const Topbar: React.FC = () => {
  // const { user } = useAuth();
  const { user, signOut } = useAuth();

  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <Media
            query={{ minWidth: mediumScreen }}
            render={() => (
              <div className="topbar">
                <div className="topbar-container">
                  <ul className="unurshop-type-menu">
                    <li className="active">
                      <Link to={appPaths.baseUrl}>Бараа захиалга</Link>
                    </li>
                    <li>
                      <Link to={appPaths.baseUrl}>Машин & Сэлбэг</Link>
                    </li>
                    <li>
                      <Link to={appPaths.baseUrl}>Карго</Link>
                    </li>
                  </ul>
                  <ul className="contact-menu">
                    <li className="phone">
                      <a href="tel:+97670000509" className="with-icon">
                        <ReactSVG
                          path={iconPhone}
                          className="svg-icon"
                          style={{ marginRight: "0.6rem" }}
                        />
                        7000-0509
                      </a>
                    </li>
                    {/* <li>
                      <span className="with-icon">
                        <ReactSVG path={iconTugrug} className="svg-icon hide" />
                        <ReactSVG path={iconPound} className="svg-icon " />
                        <em className="label-icon">Төгрөг</em>
                      </span>
                    </li>
                    <li>
                      <span className="with-icon">
                        <ReactSVG path={iconUk} className="svg-icon" />
                        <ReactSVG path={iconMn} className="svg-icon hide" />
                        <em className="label-icon">Eng</em>
                      </span>
                    </li> */}

                    {/* <>
                      {user ? (
                        <>
                          <li>
                            <Link
                              to={appPaths.orderHistoryUrl}
                              className="with-icon"
                            >
                              <ReactSVG path={iconUser} className="svg-icon" />
                              <span className="label-icon">Захиалгууд</span>
                            </Link>
                          </li>
                          <li>
                            <span
                              className="with-icon"
                              onClick={signOut}
                              data-testid="logout-link"
                            >
                              Гарах
                            </span>
                          </li>
                        </>
                      ) : (
                        <li
                          data-testid="login-btn"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.right
                            )
                          }
                        >
                          <span className="with-icon">
                            <ReactSVG path={iconUser} className="svg-icon" />
                            <span className="label-icon">Нэвтрэх</span>
                          </span>
                        </li>
                      )}
                    </> */}
                  </ul>
                </div>
              </div>
            )}
          />

          <Media
            query={{ maxWidth: mediumScreen }}
            render={() => (
              <div className="topbar">
                <div style={{ backgroundColor: "#f1f3f4" }}>
                  <ul className="contact-menu">
                    {/* <li>
                      <span className="with-icon">
                        <ReactSVG path={iconTugrug} className="svg-icon hide" />
                        <ReactSVG path={iconPound} className="svg-icon " />
                        <em className="label-icon">Төгрөг</em>
                      </span>
                    </li>
                    <li>
                      <span className="with-icon">
                        <ReactSVG path={iconUk} className="svg-icon" />
                        <ReactSVG path={iconMn} className="svg-icon hide" />
                        <em className="label-icon">Eng</em>
                      </span>
                    </li> */}

                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li
                              className="main-menu__icon main-menu__user--active"
                              style={{ display: "flex" }}
                            >
                              <ReactSVG path={iconUser} />
                              <span style={{ paddingLeft: "1rem" }}>
                                {user.firstName ? user.firstName : user.email}
                              </span>
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
                                onClick={() => signOut()}
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
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.right
                            )
                          }
                        >
                          <ReactSVG path={iconUser} />
                          <span>Нэвтрэх</span>
                        </li>
                      )}
                    </>
                    <li className="phone">
                      <a href="tel:+97670000509" className="with-icon">
                        <ReactSVG
                          path={iconPhone}
                          className="svg-icon"
                          style={{ marginRight: "0.6rem" }}
                        />
                        7000-0509
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
        </>
      )}
    </OverlayContext.Consumer>
  );
};

export default Topbar;

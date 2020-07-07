import './scss/index.scss';

import * as React from 'react';
// import Media from 'react-media';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

import { useUserDetails } from '@sdk/react';

// import { useSignOut, useUserDetails } from '@sdk/react';
import { OverlayContext, OverlayTheme, OverlayType } from '../';
import * as appPaths from '../../app/routes';
import iconUk from '../../images/unurshop/icons/flag.svg';
// import { mediumScreen } from '../../globalStyles/scss/variables.scss';
import iconMn from '../../images/unurshop/icons/mn.svg';
import iconPhone from '../../images/unurshop/icons/phone.svg';
import iconPound from '../../images/unurshop/icons/pound.svg';
import iconTugrug from '../../images/unurshop/icons/tugrug.svg';
import iconUser from '../../images/unurshop/icons/user.svg';

// import {
//   accountUrl,
//   addressBookUrl,
//   baseUrl,
//   orderHistoryUrl,
//   paymentOptionsUrl
// } from "../../routes";


const Topbar: React.FC = () => {
  const { data: user } = useUserDetails();
  // const [signOut] = useSignOut();

  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <>
          <div className="topbar">
            <ul>
              <li className="phone">
                <a href="tel:+97670000509" className="with-icon" >
                  <ReactSVG path={iconPhone} className="svg-icon" style={{ marginRight: "0.6rem" }} />
                  7000-0509
                </a>
              </li>
              <li>
                <a className="with-icon">
                  <ReactSVG path={iconTugrug} className="svg-icon hide" />
                  <ReactSVG path={iconPound} className="svg-icon " />
                  <span className="label-icon">Төгрөг</span>
                </a>
              </li>
              <li>
                <a className="with-icon">
                  <ReactSVG path={iconUk} className="svg-icon" />
                  <ReactSVG path={iconMn} className="svg-icon hide" />
                  <span className="label-icon">Eng</span>
                </a>
              </li>

              <>
                {user ? (
                  <>
                    <li>
                      <Link to={appPaths.accountUrl} className="with-icon">
                        <ReactSVG path={iconUser} className="svg-icon" />
                        <span className="label-icon">Хувийн тохиргоо</span>
                      </Link>
                    </li>
                    {/* <li>
                      <a onClick={signOut} data-testid="logout-link">
                        Гарах
                      </a>
                    </li> */}
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
                      <a className="with-icon">
                        <ReactSVG path={iconUser} className="svg-icon" />
                        <span className="label-icon">Нэвтрэх</span>
                      </a>
                    </li>
                  )}
              </>
            </ul>
          </div>
          {/* <Media
            query={{ maxWidth: mediumScreen }}
            render={() => (
              <div className="mobile-menu">
                <ul>
                  <li><a className="active" href="javascript:void(0)">Захиалга</a></li>
                  <li><a href="javascript:void(0)">Машин & Сэлбэг</a></li>
                  <li><a href="javascript:void(0)">Өөрөө авах</a></li>
                  <li className="cargo"><a href="javascript:void(0)">Карго</a></li>
                </ul>
              </div>
            )}
          /> */}
        </>
      )}
    </OverlayContext.Consumer>
  );
};

export default Topbar;


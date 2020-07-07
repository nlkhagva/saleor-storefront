import './scss/index.scss';

import * as React from 'react';
import Media from 'react-media';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';

// import userImg from '../../images/user.svg';
import * as appPaths from '../../app/routes';
// import { Trans } from '@lingui/react';
// import { maybe } from '../../core/utils';
import { mediumScreen } from '../../globalStyles/scss/variables.scss';
import svgCargo from '../../images/unurshop/icons/cargo.svg';
import svgOrdershop from '../../images/unurshop/icons/ordershop.svg';
import svgPart from '../../images/unurshop/icons/part.svg';
import svgRedLogo from '../../images/unurshop/icons/red-logo.svg';
import svgUuruu from '../../images/unurshop/icons/uuruu.svg';

// import NavDropdown from './NavDropdown';

const FooterMainMenu: React.FC = () => {

  return (
    <Media
      query={{ maxWidth: mediumScreen }}
      render={() => (
        <div className="footer-mainmenu">
          <div className="fmenu-left">
            <ul>
              <li>
                <Link to={appPaths.baseUrl}>
                  <ReactSVG path={svgOrdershop} className="uicon" />
                  <span>Захиалга</span>
                </Link>
              </li>
              <li>
                <Link to={appPaths.baseUrl}>
                  <ReactSVG path={svgPart} className="uicon" />
                  <span>Сэлбэг</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="fmenu-center">
            <Link to={appPaths.baseUrl} className="mobile-ulogo">
              <ReactSVG path={svgRedLogo} className="icon-symbol" />
            </Link>
          </div>
          <div className="fmenu-right">
            <ul>
              <li>
                <Link to={appPaths.baseUrl}>
                  <ReactSVG path={svgUuruu} className="uicon" />
                  <span>Өөрөө авах</span>
                </Link>
              </li>
              <li>
                <Link to={appPaths.baseUrl}>
                  <ReactSVG path={svgCargo} className="uicon" />
                  <span>Карго</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    />

  );
};

export default FooterMainMenu;

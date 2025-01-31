import "./scss/index.scss";

import * as React from "react";
// import { FormattedMessage } from "react-intl";
import ReactSVG from "react-svg";

import loginSymbol from "images/unurshop/loginSymbol.svg";
import logoImg from "images/unurshop/logo-without-border.svg";

import {
  LoginForm,
  Offline,
  OfflinePlaceholder,
  Online,
  Overlay,
  OverlayContextInterface,
  OverlayTheme,
  OverlayType,
} from "../..";
import RegisterForm from "./RegisterForm";

import closeImg from "../../../images/x.svg";
import ForgottenPassword from "./ForgottenPassword";

class Login extends React.Component<
  { overlay: OverlayContextInterface; active?: "login" | "register" },
  { active: "login" | "register" }
> {
  static defaultProps = {
    active: "login",
  };

  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  changeActiveTab = (active: "login" | "register") => {
    this.setState({ active });
  };

  render() {
    const { overlay } = this.props;
    const { show, hide } = overlay;

    return (
      <Overlay testingContext="loginOverlay" context={overlay}>
        <div className="login">
          <Online>
            <div className="overlay__header">
              <p className="overlay__header-text">
                {/* <ReactSVG path={logoImg} /> */}
                {/* <FormattedMessage defaultMessage="UNURSHOP" /> */}
              </p>
              <ReactSVG
                path={closeImg}
                onClick={hide}
                className="overlay__header__close-icon"
              />
            </div>
            {/* <div className="login__tabs">
              <span
                data-test="loginTab"
                onClick={() => this.changeActiveTab("login")}
                className={this.state.active === "login" ? "active-tab" : ""}
              >
                <FormattedMessage defaultMessage="Нэвтрэх" />
              </span>
              <span
                data-test="registerTab"
                onClick={() => this.changeActiveTab("register")}
                className={this.state.active === "register" ? "active-tab" : ""}
              >
                <FormattedMessage defaultMessage="Бүртгүүлэх" />
              </span>
            </div> */}
            <div className="login__content">
              {this.state.active === "login" ? (
                <>
                  <div className="login__content__header">
                    <ReactSVG path={logoImg} className="login__content__logo" />
                    <h4>Unurshop руу нэвтрэх </h4>
                  </div>

                  <LoginForm
                    hide={hide}
                    forgottenPassword={
                      <ForgottenPassword
                        onClick={() => {
                          show(OverlayType.password, OverlayTheme.right);
                        }}
                      />
                    }
                  />
                </>
              ) : (
                <>
                  <RegisterForm
                    hide={hide}
                    _email=""
                    _setEmail={v => {}}
                    _setPage={v => {}}
                    loading={false}
                  />
                </>
              )}
              <ReactSVG path={loginSymbol} className="login-symbol" />
            </div>
          </Online>
          <Offline>
            <OfflinePlaceholder />
          </Offline>
        </div>
      </Overlay>
    );
  }
}

export default Login;

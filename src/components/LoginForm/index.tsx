import "./scss/index.scss";

import iconEyeHide from "images/unurshop/eye-hide.svg";
import iconEye from "images/unurshop/eye.svg";
import * as React from "react";
import { useIntl } from "react-intl";
import ReactSVG from "react-svg";
import { useAuth } from "unurshop-sdk";

import { demoMode } from "@temp/constants";
import { commonMessages } from "@temp/intl";

import { Button, Form, TextField } from "@temp/components";
import CheckUserForm from "@temp/components/LoginForm/CheckUserForm";
import { TypedHasUserQuery } from "@temp/components/OverlayManager/Login/queries";
import RegisterForm from "@temp/components/OverlayManager/Login/RegisterForm";

interface ILoginForm {
  hide?: () => void;
  forgottenPassword: any;
}

const LoginForm: React.FC<ILoginForm> = ({ hide, forgottenPassword }) => {
  const { signIn } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(null);
  const [passInputType, setPassInputType] = React.useState("password");
  const [icon, setIcon] = React.useState(iconEye);
  const [_email, _setEmail] = React.useState("");
  const [_page, _setPage] = React.useState("login");

  const togglePassInput = () => {
    if (passInputType === "password") {
      setPassInputType("text");
      setIcon(iconEyeHide);
    } else {
      setPassInputType("password");
      setIcon(iconEye);
    }
  };

  const handleOnSubmit = async (evt, { email, password }) => {
    evt.preventDefault();
    setLoading(true);

    const { data, dataError } = await signIn(
      email.trim().toLowerCase(),
      password
    );
    setLoading(false);
    if (dataError?.error) {
      setErrors(dataError.error);
    } else if (data && hide) {
      setErrors(null);
      hide();
    }
  };

  const intl = useIntl();

  return (
    <TypedHasUserQuery variables={{ email: _email.trim().toLowerCase() }}>
      {({ loading: queryLoading, data }) => {
        const formData = demoMode
          ? {
              email: "admin@example.com",
              password: "admin",
            }
          : {
              email: _email,
            };
        const hasUser = data.checkUser !== null;
        return (
          <div className="login-form">
            {_page === "login" && !hasUser && (
              <CheckUserForm
                loading={loading || queryLoading}
                _email={_email}
                _setEmail={_setEmail}
                _setPage={_setPage}
              />
            )}
            {_page === "login" && hasUser && (
              <Form
                data={formData}
                errors={errors || []}
                onSubmit={handleOnSubmit}
              >
                <TextField
                  name="email"
                  autoComplete="email"
                  label={intl.formatMessage(commonMessages.eMail)}
                  type="email"
                  required
                  readOnly
                />
                <TextField
                  name="password"
                  autoComplete="password"
                  label={intl.formatMessage(commonMessages.password)}
                  type={passInputType}
                  required
                  iconRight={
                    <ReactSVG
                      path={icon}
                      onClick={() => togglePassInput()}
                      style={{ marginRight: 10, marginBottom: -10 }}
                    />
                  }
                />
                {forgottenPassword}
                <div className="login-form__button">
                  <Button
                    testingContext="submit"
                    type="submit"
                    className="full"
                    {...((loading || queryLoading) && { disabled: true })}
                  >
                    {loading || queryLoading
                      ? intl.formatMessage(commonMessages.loading)
                      : intl.formatMessage({ defaultMessage: "Нэвтрэх" })}
                  </Button>
                </div>
              </Form>
            )}

            {_page === "register" && (
              <RegisterForm
                loading={loading || queryLoading}
                hide={hide}
                _email={_email}
                _setEmail={_setEmail}
                _setPage={_setPage}
              />
            )}
          </div>
        );
      }}
    </TypedHasUserQuery>
  );
};

export default LoginForm;

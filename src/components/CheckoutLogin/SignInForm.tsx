import React from "react";
import { FormattedMessage } from "react-intl";
import { LoginForm } from "..";
import ForgottenPassword from "../OverlayManager/Login/ForgottenPassword";

const SignInForm: React.FC<{
  onForgottenPasswordClick: () => void;
}> = ({ onForgottenPasswordClick }) => (
  <>
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Нэвтрэх" />
    </h3>
    <LoginForm
      forgottenPassword={
        <ForgottenPassword onClick={onForgottenPasswordClick} />
      }
    />
  </>
);

export default SignInForm;

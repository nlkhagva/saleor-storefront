import React from "react";
import { FormattedMessage } from "react-intl";

const ForgottenPassword: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => (
  <>
    <div className="login__content__password-reminder">
      <p>
        <FormattedMessage defaultMessage="Та нууц үгээ мартсан уу?" />{" "}
        <span
          className="u-link"
          onClick={onClick}
          data-test="accountOverlayForgottenPasswordLink"
        >
          <FormattedMessage defaultMessage="Энд дар" />
        </span>
      </p>
    </div>
  </>
);

export default ForgottenPassword;

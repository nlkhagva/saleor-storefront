import React from "react";
import { useIntl } from "react-intl";

import { Button, Form, TextField } from "@temp/components";
import { commonMessages } from "@temp/intl";

interface Props {
  loading: boolean;
  _email: any;
  _setEmail: any;
  _setPage: any;
}

const CheckUserForm: React.FC<Props> = ({
  loading,
  _email,
  _setEmail,
  _setPage,
}) => {
  const intl = useIntl();
  const [errors, setErrors] = React.useState([]);

  const handleCheckUser = async (evt, { email }) => {
    evt.preventDefault();
    _setEmail(email);
  };
  React.useEffect(() => {
    if (_email) setErrors([{ field: "email", message: "Бүртгэл олдсонгүй" }]);
  }, [_email]);
  // const errors = firstTime
  //   ? []
  //   : ;

  return (
    <>
      <Form data={{ email: _email }} errors={errors} onSubmit={handleCheckUser}>
        <TextField
          name="email"
          autoComplete="email"
          label={intl.formatMessage(commonMessages.eMail)}
          type="email"
          onChange={e => {
            e.preventDefault();
            setErrors([]);
          }}
          required
        />
        <div className="login-form__button">
          <Button
            testingContext="submit"
            type="submit"
            className="full"
            {...(loading && { disabled: true })}
          >
            {loading
              ? intl.formatMessage(commonMessages.loading)
              : intl.formatMessage({ defaultMessage: "Үргэлжлүүлэх" })}
          </Button>
        </div>
      </Form>

      {_email && (
        <Button
          style={{ marginTop: "4em", fontSize: 10 }}
          testingContext="registerButton"
          secondary
          className="full small"
          onClick={() => _setPage("register")}
        >
          Шинээр бүртгүүлэх
        </Button>
      )}
    </>
  );
};

export default CheckUserForm;

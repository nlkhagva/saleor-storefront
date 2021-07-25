import "./scss/index.scss";

import * as React from "react";

import iconEyeHide from "images/unurshop/eye-hide.svg";
import iconEye from "images/unurshop/eye.svg";
import ReactSVG from "react-svg";

import { AlertManager, useAlert } from "react-alert";
import { useIntl, IntlShape } from "react-intl";
import { commonMessages } from "@temp/intl";
import * as S from "@components/organisms/CheckoutAddress/styles";
import { accountConfirmUrl } from "../../../app/routes";

import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { RegisterAccount } from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

const RegisterForm: React.FC<{
  hide: () => void;
  loading: boolean;
  _email: string;
  _setEmail: any;
  _setPage: any;
}> = ({ hide, _email, _setEmail, _setPage, loading: pageLoading }) => {
  const alert = useAlert();
  const intl = useIntl();
  const [showInfo, setShowInfo] = React.useState(false);
  const [icon, setIcon] = React.useState(iconEye);
  const [passInputType, setPassInputType] = React.useState("password");

  const togglePassInput = () => {
    if (passInputType === "password") {
      setPassInputType("text");
      setIcon(iconEyeHide);
    } else {
      setPassInputType("password");
      setIcon(iconEye);
    }
  };

  const showSuccessNotification = (
    data: RegisterAccount,
    hide: () => void,
    alert: AlertManager,
    intl: IntlShape
  ) => {
    const successful = maybe(() => !data.accountRegister.errors.length);

    if (successful) {
      setShowInfo(true);
      // hide();
      // alert.show(
      //   {
      //     title: data.accountRegister.requiresConfirmation
      //       ? intl.formatMessage({
      //           defaultMessage:
      //             "Та и-мэйл хаягаа шалгалж бүртгэлээ баталгаажуулна уу",
      //         })
      //       : intl.formatMessage({
      //           defaultMessage: "New user has been created",
      //         }),
      //   },
      //   { type: "success", timeout: 5000 }
      // );
    }
  };

  return (
    <TypedAccountRegisterMutation
      onCompleted={data => showSuccessNotification(data, hide, alert, intl)}
    >
      {(registerCustomer, { loading, data }) => {
        return (
          <>
            {!showInfo && (
              <Form
                data={{
                  email: _email,
                  password: "",
                  firstName: "",
                  lastName: "",
                }}
                errors={maybe(() => data.accountRegister.errors, [])}
                onSubmit={(event, { email, password, firstName, lastName }) => {
                  event.preventDefault();
                  const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
                  registerCustomer({
                    variables: {
                      email,
                      password,
                      firstName,
                      lastName,
                      redirectUrl,
                    },
                  });
                }}
              >
                <TextField
                  name="email"
                  autoComplete="email"
                  label={intl.formatMessage(commonMessages.eMail)}
                  type="email"
                  onChange={e => {
                    _setEmail(e.target.value);
                  }}
                  required
                />
                <TextField name="lastName" label="Овог" type="text" required />
                <TextField name="firstName" label="Нэр" type="text" required />
                <TextField
                  name="password"
                  autoComplete="password"
                  label="Шинэ нууц үг"
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
                <div className="login__content__button">
                  <Button
                    className="full"
                    testingContext="submitRegisterFormButton"
                    type="submit"
                    {...((loading || pageLoading) && { disabled: true })}
                  >
                    {loading || pageLoading
                      ? intl.formatMessage(commonMessages.loading)
                      : intl.formatMessage({ defaultMessage: "Бүртгүүлэх" })}
                  </Button>
                </div>
              </Form>
            )}
            {showInfo && (
              <section>
                <S.SuccessContainer>
                  <S.AlertTitle>Амжилттай: </S.AlertTitle>
                  <S.AlertContent>
                    Таны бүртгэл амжилттай хийгдлээ
                  </S.AlertContent>
                </S.SuccessContainer>
                <S.AlertContainer>
                  <S.AlertTitle>Анхааруулга: </S.AlertTitle>
                  <S.AlertContent>
                    Та <b style={{ fontWeight: 600 }}>{_email}</b> хаягаа
                    шалгалж бүртгэлээ баталгаажуулна уу. Junk эсвэл Spam фолдерт
                    орсон байж болзошгүй
                  </S.AlertContent>
                </S.AlertContainer>
              </section>
            )}
            <Button
              style={{ marginTop: "6em" }}
              testingContext="registerButton"
              secondary
              className="full small"
              onClick={() => _setPage("login")}
            >
              Буцах
            </Button>
          </>
        );
      }}
    </TypedAccountRegisterMutation>
  );
};

export default RegisterForm;

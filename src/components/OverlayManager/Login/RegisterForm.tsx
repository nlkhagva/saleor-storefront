import "./scss/index.scss";

import * as React from "react";

import { AlertManager, useAlert } from "react-alert";
import { useIntl, IntlShape } from "react-intl";
import { commonMessages } from "@temp/intl";
import * as S from "@components/organisms/CheckoutAddress/styles";
import { accountConfirmUrl } from "../../../app/routes";

import { Button, Form, TextField } from "../..";
import { maybe } from "../../../core/utils";
import { RegisterAccount } from "./gqlTypes/RegisterAccount";
import { TypedAccountRegisterMutation } from "./queries";

const RegisterForm: React.FC<{ hide: () => void }> = ({ hide }) => {
  const alert = useAlert();
  const intl = useIntl();
  const [showInfo, setShowInfo] = React.useState(false);

  const showSuccessNotification = (
    data: RegisterAccount,
    hide: () => void,
    alert: AlertManager,
    intl: IntlShape
  ) => {
    const successful = maybe(() => !data.accountRegister.errors.length);

    if (successful) {
      setShowInfo(true);
      hide();
      alert.show(
        {
          title: data.accountRegister.requiresConfirmation
            ? intl.formatMessage({
                defaultMessage:
                  "Та и-мэйл хаягаа шалгалж бүртгэлээ баталгаажуулна уу",
              })
            : intl.formatMessage({
                defaultMessage: "New user has been created",
              }),
        },
        { type: "success", timeout: 5000 }
      );
    }
  };

  return (
    <TypedAccountRegisterMutation
      onCompleted={data => showSuccessNotification(data, hide, alert, intl)}
    >
      {(registerCustomer, { loading, data }) => {
        return (
          <>
            <Form
              errors={maybe(() => data.accountRegister.errors, [])}
              onSubmit={(event, { email, password }) => {
                event.preventDefault();
                const redirectUrl = `${window.location.origin}${accountConfirmUrl}`;
                registerCustomer({
                  variables: { email, password, redirectUrl },
                });
              }}
            >
              <TextField
                name="email"
                autoComplete="email"
                label={intl.formatMessage(commonMessages.eMail)}
                type="email"
                required
              />
              <TextField
                name="password"
                autoComplete="password"
                label={intl.formatMessage(commonMessages.password)}
                type="password"
                required
              />
              <div className="login__content__button">
                <Button
                  className="full"
                  testingContext="submitRegisterFormButton"
                  type="submit"
                  {...(loading && { disabled: true })}
                >
                  {loading
                    ? intl.formatMessage(commonMessages.loading)
                    : intl.formatMessage({ defaultMessage: "Бүртгүүлэх" })}
                </Button>
              </div>
            </Form>
            {showInfo && (
              <section>
                <S.AlertContainer>
                  <S.AlertTitle>Санамж: </S.AlertTitle>
                  <S.AlertContent>
                    Та и-мэйл хаягаа шалгалж бүртгэлээ баталгаажуулах линк дээр
                    дарж бүртгээлээ баталгаажуулна уу
                  </S.AlertContent>
                </S.AlertContainer>
              </section>
            )}
          </>
        );
      }}
    </TypedAccountRegisterMutation>
  );
};

export default RegisterForm;

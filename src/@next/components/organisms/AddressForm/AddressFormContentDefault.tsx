import React from "react";
import { useIntl } from "react-intl";

import { TextField } from "@components/molecules";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";

export const AddressFormContentDefault: React.FC<any> = ({
  basicInputProps,
  fieldErrors,
  values,
  includeEmail = false,
}) => {
  const intl = useIntl();

  return (
    <>
      <S.RowWithTwoCells>
        <TextField
          name="firstName"
          label={intl.formatMessage(commonMessages.firstName)}
          value={values!.firstName}
          autoComplete="given-name"
          errors={fieldErrors!.firstName}
          {...basicInputProps()}
        />
        <TextField
          name="lastName"
          label={intl.formatMessage(commonMessages.lastName)}
          value={values!.lastName}
          autoComplete="family-name"
          errors={fieldErrors!.lastName}
          {...basicInputProps()}
        />
      </S.RowWithTwoCells>
      <S.RowWithTwoCells>
        <TextField
          name="companyName"
          label={intl.formatMessage({
            defaultMessage: "Байгууллагын нэр (заавал биш)",
          })}
          value={values!.companyName}
          autoComplete="organization"
          errors={fieldErrors!.companyName}
          {...basicInputProps()}
        />
        <TextField
          name="phone"
          label={intl.formatMessage(commonMessages.phone)}
          value={values!.phone || undefined}
          autoComplete="tel"
          errors={fieldErrors!.phone}
          {...basicInputProps()}
        />
      </S.RowWithTwoCells>
      <S.RowWithOneCell>
        <TextField
          name="streetAddress1"
          label={intl.formatMessage({ defaultMessage: "Хаягын мэдээлэл 1" })}
          value={values!.streetAddress1}
          autoComplete="address-line1"
          errors={fieldErrors!.streetAddress1}
          {...basicInputProps()}
        />
      </S.RowWithOneCell>
      <S.RowWithOneCell>
        <TextField
          name="streetAddress2"
          label={intl.formatMessage({ defaultMessage: "Хаягын мэдээлэл 2" })}
          value={values!.streetAddress2}
          autoComplete="address-line2"
          errors={fieldErrors!.streetAddress2}
          {...basicInputProps()}
        />
      </S.RowWithOneCell>
      <S.RowWithTwoCells>
        <TextField
          name="city"
          label={intl.formatMessage({ defaultMessage: "Хот" })}
          value={values!.city}
          autoComplete="address-level2"
          errors={fieldErrors!.city}
          {...basicInputProps()}
        />
        <TextField
          name="countryArea"
          label={intl.formatMessage({ defaultMessage: "Аймаг" })}
          value={values!.countryArea}
          autoComplete="address-level1"
          errors={fieldErrors!.countryArea}
          {...basicInputProps()}
        />
      </S.RowWithTwoCells>
      <S.RowWithOneCell>
        <TextField
          name="postalCode"
          label={intl.formatMessage({ defaultMessage: "ZIP/Postal Code" })}
          value={values!.postalCode}
          autoComplete="postal-code"
          errors={fieldErrors!.postalCode}
          {...basicInputProps()}
        />
      </S.RowWithOneCell>
      {includeEmail && (
        <S.RowWithTwoCells>
          <TextField
            name="email"
            label={intl.formatMessage(commonMessages.shortEmail)}
            value={values!.email}
            autoComplete="email"
            errors={fieldErrors!.email}
            {...basicInputProps()}
          />
        </S.RowWithTwoCells>
      )}
    </>
  );
};

import React from "react";
import { useIntl } from "react-intl";

import { InputSelect, TextField } from "@components/molecules";
import { commonMessages } from "@temp/intl";

import * as S from "./styles";

export const AddressFormContentMongolia: React.FC<any> = ({
  basicInputProps,
  fieldErrors,
  setFieldValue,
  values,
  includeEmail = false,
}) => {
  const intl = useIntl();
  const citiesOptions = [
    {
      key: "Улаанбаатар",
      value: "Улаанбаатар",
    },
    {
      key: "Дархан",
      value: "Дархан",
    },
  ];
  const districtsOptions = [
    {
      key: "Багануур",
      value: "Багануур",
      city: "Улаанбаатар",
    },
    {
      key: "Багахангай",
      value: "Багахангай",
      city: "Улаанбаатар",
    },
    {
      key: "Баянгол",
      value: "Баянгол",
      city: "Улаанбаатар",
    },
    {
      key: "Баянзүрх",
      value: "Баянзүрх",
      city: "Улаанбаатар",
    },
    {
      key: "Налайх",
      value: "Налайх",
      city: "Улаанбаатар",
    },
    {
      key: "Сонгинохайрхан",
      value: "Сонгинохайрхан",
      city: "Улаанбаатар",
    },
    {
      key: "Сүхбаатар",
      value: "Сүхбаатар",
      city: "Улаанбаатар",
    },
    {
      key: "Хан-Уул",
      value: "Хан-Уул",
      city: "Улаанбаатар",
    },
    {
      key: "Чингэлтэй",
      value: "Чингэлтэй",
      city: "Улаанбаатар",
    },
    {
      key: "Дархан",
      value: "Дархан",
      city: "Дархан",
    },
  ];

  // console.log(values);
  return (
    <>
      <S.RowWithTwoCells>
        <TextField
          name="lastName"
          label={intl.formatMessage(commonMessages.lastName)}
          value={values!.lastName}
          autoComplete="family-name"
          placeholder="Далхсүрэн"
          errors={fieldErrors!.lastName}
          {...basicInputProps()}
        />
        <TextField
          name="firstName"
          label={intl.formatMessage(commonMessages.firstName)}
          value={values!.firstName}
          autoComplete="given-name"
          placeholder="Өнөрцэцэг"
          errors={fieldErrors!.firstName}
          {...basicInputProps()}
        />
      </S.RowWithTwoCells>
      <S.RowWithOneCell>
        <TextField
          name="streetAddress2"
          label={intl.formatMessage({ defaultMessage: "Регистрийн дугаар" })}
          value={values!.streetAddress2}
          autoComplete="address-line2"
          errors={fieldErrors!.streetAddress2}
          {...basicInputProps()}
        />
      </S.RowWithOneCell>
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
      <S.RowWithTwoCells>
        {/* <TextField
          name="city"
          label={intl.formatMessage({ defaultMessage: "Хот / Аймаг" })}
          value={values!.city}
          autoComplete="address-level2"
          errors={fieldErrors!.city}
          {...basicInputProps()}
        /> */}
        <InputSelect
          defaultValue={values!.city}
          label={intl.formatMessage({ defaultMessage: "Хот / Аймаг" })}
          name="city"
          options={citiesOptions}
          value={
            values!.city &&
            citiesOptions &&
            citiesOptions!.find(
              (option: any) =>
                String(option.key).trim().toLowerCase() ===
                String(values!.city).trim().toLowerCase()
            )
          }
          onChange={(value: any, name: any) => setFieldValue(name, value.key)}
          optionLabelKey="value"
          optionValueKey="key"
          errors={fieldErrors!.city}
          autoComplete="country"
        />
        {/* <TextField
          name="countryArea"
          label={intl.formatMessage({ defaultMessage: "Дүүрэг" })}
          value={values!.countryArea}
          autoComplete="address-level1"
          errors={fieldErrors!.countryArea}
          {...basicInputProps()}
        /> */}
        <InputSelect
          defaultValue={values!.countryArea}
          label={intl.formatMessage({ defaultMessage: "Дүүрэг" })}
          name="countryArea"
          options={districtsOptions.filter(
            e =>
              String(e.city).trim().toLowerCase() ===
              String(values!.city).trim().toLowerCase()
          )}
          value={
            values!.countryArea &&
            districtsOptions &&
            districtsOptions!.find(
              (option: any) =>
                String(option.key).trim().toLowerCase() ===
                String(values!.countryArea).trim().toLowerCase()
            )
          }
          onChange={(value: any, name: any) => setFieldValue(name, value.key)}
          optionLabelKey="value"
          optionValueKey="key"
          errors={fieldErrors!.countryArea}
          autoComplete="countryArea"
        />
      </S.RowWithTwoCells>
      <S.RowWithOneCell>
        <TextField
          name="streetAddress1"
          label={intl.formatMessage({ defaultMessage: "Хаяг" })}
          value={values!.streetAddress1}
          autoComplete="address-line1"
          errors={fieldErrors!.streetAddress1}
          {...basicInputProps()}
        />
      </S.RowWithOneCell>
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

import React, { useCallback } from "react";
import { useIntl } from "react-intl";

import { InputSelect } from "@components/molecules";

import * as S from "./styles";
import { PropsWithFormik } from "./types";
import { AddressFormContentDefault } from "./AddressFormContentDefault";
import { AddressFormContentMongolia } from "./AddressFormContentMongolia";

export const AddressFormContent: React.FC<PropsWithFormik> = ({
  formRef,
  handleChange,
  handleBlur,
  formId,
  errors,
  handleSubmit,
  values,
  countriesOptions,
  defaultValue,
  setFieldValue,
  testingContext,
  includeEmail = false,
}) => {
  const basicInputProps = useCallback(
    () => ({ onBlur: handleBlur, onChange: handleChange }),
    [handleChange, handleBlur]
  );
  const intl = useIntl();
  const fieldErrors: any = {};

  if (errors) {
    errors.map(({ field, message }: { field: string; message: string }) => {
      fieldErrors[field] = fieldErrors[field]
        ? [...fieldErrors[field], { message }]
        : [{ message }];
    });
  }
  // console.log(values);

  return (
    <S.AddressForm
      id={formId}
      ref={formRef}
      onSubmit={handleSubmit}
      data-test={testingContext}
    >
      <S.Wrapper>
        <S.RowWithOneCell>
          <InputSelect
            defaultValue={defaultValue}
            label={intl.formatMessage({ defaultMessage: "Улс" })}
            name="country"
            options={countriesOptions}
            value={
              values!.country &&
              countriesOptions &&
              countriesOptions!.find(
                (option: any) => option.code === values!.country!.code
              )
            }
            onChange={(value: any, name: any) => setFieldValue(name, value)}
            optionLabelKey="country"
            optionValueKey="code"
            errors={fieldErrors!.country}
            autoComplete="country"
          />
        </S.RowWithOneCell>

        {values?.country?.code === "MN" ? (
          <AddressFormContentMongolia
            basicInputProps={basicInputProps}
            fieldErrors={fieldErrors}
            setFieldValue={setFieldValue}
            values={values}
            includeEmail={includeEmail}
          />
        ) : (
          <AddressFormContentDefault
            basicInputProps={basicInputProps}
            fieldErrors={fieldErrors}
            values={values}
            includeEmail={includeEmail}
          />
        )}
      </S.Wrapper>
    </S.AddressForm>
  );
};

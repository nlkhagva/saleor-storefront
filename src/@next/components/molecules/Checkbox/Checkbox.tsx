import { Field } from "formik";
import React from "react";

import { ErrorMessage } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

const Checkbox: React.FC<IProps> = ({ errors, helpText, ...rest }: IProps) => {
  return (
    <>
      <S.Checkbox>
        {rest.label}
        <Field {...rest} />
        <span className="checkmark">&nbsp;</span>
        <S.ErrorMessages>
          <ErrorMessage errors={errors} />
          {helpText && <S.HelpText>{helpText}</S.HelpText>}
        </S.ErrorMessages>
      </S.Checkbox>
    </>
  );
};

export { Checkbox };

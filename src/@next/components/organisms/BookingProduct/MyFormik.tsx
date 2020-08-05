import React from "react";

import { Formik } from "formik";
import { MyFormikProps } from "./types";
import { BookingForm } from "./BookingForm";

const MyFormik: React.FC<MyFormikProps> = ({
  productUrl,
  ushopId,
  handleSubmit,
  loading,
}: MyFormikProps) => {
  const fInitialValues = {
    addMore: false,
    code: "",
    color: "",
    description: "",
    isRequired: false,
    name: "",
    price: "",
    quantity: 1,
    shippingType: "",
    size: "",
    url: productUrl,
    ushopId,
  };
  const productTypeOptions = {};

  return (
    <Formik
      initialValues={fInitialValues}
      enableReinitialize
      onSubmit={(values, { setSubmitting, resetForm }) => {
        if (handleSubmit) {
          handleSubmit(values);
        }
        setSubmitting(false);
        resetForm(fInitialValues);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        setFieldValue,
        setFieldTouched,
      }) => (
        <BookingForm
          ushopId={ushopId}
          productTypeOptions={productTypeOptions}
          {...{
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldTouched,
            setFieldValue,
            values,
          }}
        />
      )}
    </Formik>
  );
};

export { MyFormik };

import { Formik } from 'formik';
import React from 'react';

import { BookingForm } from './BookingForm';
import { TypedUshopByLinkQuery } from './queries';
// import { InputSelect, TextField } from '@components/molecules';
// import * as S from './styles';
import { IProps } from './types';

const BookingProduct: React.FC<IProps> = ({
  productUrl,
}: IProps) => {

  const variables = {
    link: productUrl,
  }

  const fInitialValues = {
    "addMore": false,
    "code": "",
    "color": "",
    "description": "",
    "isRequired": false,
    "price": "",
    "quantity": 1,
    "shippingType": "",
    "size": "",
    "url": productUrl,
  }

  const productTypeOptions = {

  }

  const handleSubmit = (values: any) => {
    console.log(values)
    return false
  }

  return (
    <TypedUshopByLinkQuery
      variables={variables}
    >
      {({ loading, data }) => {
        if (loading) {
          return "Loading...";
        }
        console.log("-----------loaded ushoip")
        const ushopId = data?.ushopByLink?.id || null;

        return (
          <Formik
            initialValues={fInitialValues}
            enableReinitialize={true}
            onSubmit={(values, { setSubmitting }) => {
              if (handleSubmit) {
                handleSubmit(values);
              }
              setSubmitting(false);
            }}
          >
            {({
              handleChange,
              handleSubmit,
              handleBlur,
              values,
              setFieldValue,
              setFieldTouched,
            }) => {
              return <BookingForm
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
            }}


          </Formik>
        )
      }}

    </TypedUshopByLinkQuery>
  )
};

export { BookingProduct }
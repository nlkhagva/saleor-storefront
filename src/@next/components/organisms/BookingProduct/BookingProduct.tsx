import { Formik } from "formik";
import UUID from "node-uuid";
import React from "react";

import {
  useCart,
  useCreateSimpleProduct,
  useProductUpdateMetaData,
} from "@saleor/sdk";

import { BookingForm } from "./BookingForm";
import { TypedUshopByLinkQuery } from "./queries";
// import { InputSelect, TextField } from '@components/molecules';
// import * as S from './styles';
import { IProps } from "./types";

const BookingProduct: React.FC<IProps> = ({ productUrl }: IProps) => {
  const [createSimpleProduct] = useCreateSimpleProduct();
  const [updateMetadata] = useProductUpdateMetaData();

  const variables = {
    link: productUrl,
  };

  const productTypeOptions = {};

  const handleSubmit = async (values: any) => {
    const _productType = "UHJvZHVjdFR5cGU6MTU=";
    const _productCategory = "Q2F0ZWdvcnk6MjQ==";
    const _productWarehouse =
      "V2FyZWhvdXNlOmZkMTI1NjNjLTA3ZTgtNDE4ZS05YzllLTgyYzhkNWJhOGJjNg==";

    if (!values.name) {
      alert("Нэр өгнө үү");
      return false;
    }
    if (!values.price) {
      alert("Үнэ бичнэ үү");
      return false;
    }

    const product = await createSimpleProduct({
      attributes: [],
      basePrice: values.price,
      category: _productCategory,
      chargeTaxes: false,
      collections: [],
      descriptionJson: "{}",
      isPublished: true,
      name: values.name,
      productType: _productType,
      publicationDate: null,
      seo: {
        description: "",
        title: "",
      },
      sku: "ushop-" + UUID.v4(),
      stocks: [
        {
          quantity: 100,
          warehouse: _productWarehouse,
        },
      ],
      trackInventory: false,
      ushop: values.ushopId,
    });

    console.log(product);

    if (product?.data.productCreate.product.id) {
      console.log("product ID: " + product?.data.productCreate.product);
      // const productId = product?.data.productCreate.product.id;
      // const variantId = product?.data.productCreate.product.variants[0].id;
      // addItem(variantId, values.quantity)

      // await updateMetadata({
      //   id: productId,
      //   input: [
      //     { key: "code", value: values.code },
      //     { key: "color", value: values.color },
      //     { key: "description", value: values.description },
      //     { key: "isRequired", value: values.isRequired },
      //     { key: "shippingType", value: values.shippingType },
      //     { key: "size", value: values.size },
      //     { key: "url", value: values.url },
      //   ],
      // })
    }

    return false;
  };

  // React.useEffect(() => {
  //   console.log("error")
  //   console.log(createProductError)
  //   if (createdProduct && !createProductError) {
  //     console.log(createdProduct)
  //   }
  // }, [createdProduct, createProductError]);

  return (
    <TypedUshopByLinkQuery variables={variables}>
      {({ loading, data }) => {
        if (loading) {
          return "Loading...";
        }
        const ushopId = data?.ushopByLink?.id || null;

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
          ushopId: ushopId,
        };

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
              return (
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
              );
            }}
          </Formik>
        );
      }}
    </TypedUshopByLinkQuery>
  );
};

export { BookingProduct };

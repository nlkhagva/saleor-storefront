import React, { useState } from "react";

import { useCart } from "@saleor/sdk";
import UUID from "node-uuid";
import { useAlert } from "react-alert";

import { TypedUshopByLinkQuery } from "./queries";
import { MyFormik } from "./MyFormik";
import { IProps } from "./types";
import { TypedCreateSimpleProduct, TypedUpdateMetadata } from "./mutations";
import { ProductCreate } from "./gqlTypes/ProductCreate";

const BookingProduct: React.FC<IProps> = ({ productUrl }: IProps) => {
  const { addItem } = useCart();
  const alert = useAlert();

  const [formValues, setFormValues] = useState({
    code: "",
    color: "",
    description: "",
    isRequired: "",
    shippingType: "",
    size: "",
    url: "",
    quantity: 1,
  });

  const variables = {
    link: productUrl,
  };

  return (
    <TypedUshopByLinkQuery variables={variables}>
      {({ loading, data }) => (
        <TypedUpdateMetadata>
          {(updateMetadata, updateMetadataOpts) => {
            const onCompleted = async (data: ProductCreate) => {
              if (data) {
                const productId = data.productCreate?.product?.id;
                if (productId) {
                  updateMetadata({
                    variables: {
                      id: productId,
                      input: [
                        { key: "code", value: formValues.code },
                        { key: "color", value: formValues.color },
                        { key: "description", value: formValues.description },
                        { key: "isRequired", value: formValues.isRequired },
                        { key: "shippingType", value: formValues.shippingType },
                        { key: "size", value: formValues.size },
                        { key: "url", value: formValues.url },
                      ],
                    },
                  });

                  const variant = data.productCreate?.product?.variants
                    ? data.productCreate?.product?.variants![0]
                    : null;

                  if (variant) {
                    addItem(variant.id, formValues.quantity);

                    alert.show(
                      {
                        title: "Сагсанд бараа нэмэгдлээ",
                      },
                      { type: "success" }
                    );
                  }
                }
              }
            };

            return (
              <TypedCreateSimpleProduct onCompleted={onCompleted}>
                {(productCreate, productCreateOpts) => (
                  <MyFormik
                    handleSubmit={values => {
                      setFormValues(values);
                      productCreate({
                        variables: {
                          attributes: [],
                          basePrice: values.price,
                          category: "Q2F0ZWdvcnk6MjQ==",
                          chargeTaxes: false,
                          collections: [],
                          descriptionJson: "{}",
                          isPublished: true,
                          name: values.name,
                          productType: "UHJvZHVjdFR5cGU6MTU=",
                          publicationDate: null,
                          seo: {
                            description: "",
                            title: "",
                          },
                          sku: `ushop-${UUID.v4()}`,
                          stocks: [
                            {
                              quantity: 100,
                              warehouse:
                                "V2FyZWhvdXNlOmZkMTI1NjNjLTA3ZTgtNDE4ZS05YzllLTgyYzhkNWJhOGJjNg==",
                            },
                          ],
                          trackInventory: false,
                          ushop: values.ushopId,
                        },
                      });
                    }}
                    loading={
                      productCreateOpts.loading ||
                      updateMetadataOpts.loading ||
                      loading
                    }
                    productUrl={productUrl}
                    ushopId={data?.ushopByLink?.id || null}
                  />
                )}
              </TypedCreateSimpleProduct>
            );
          }}
        </TypedUpdateMetadata>
      )}
    </TypedUshopByLinkQuery>
  );
};

export { BookingProduct };

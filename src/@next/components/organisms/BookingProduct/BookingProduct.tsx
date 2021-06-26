import React, { useState } from "react";

import { useCart } from "unurshop-sdk";
import UUID from "node-uuid";
import {
  PRODUCT_CATEGORY_ONLINE_ZAHIALGA,
  PRODUCT_TYPE_ONLINE_ZAHIALGA,
  WAREHOUSE_ASIA,
} from "@app/custom/constants";
import { OverlayContext, OverlayTheme, OverlayType } from "@temp/components";

import { TypedUshopByLinkQuery } from "./queries";
import { MyFormik } from "./MyFormik";
import { IProps } from "./types";
import { TypedCreateSimpleProduct, TypedUpdateMetadata } from "./mutations";
import { ProductCreate } from "./gqlTypes/ProductCreate";

const BookingProduct: React.FC<IProps> = ({ productUrl }: IProps) => {
  const { addItem } = useCart();
  const overlayContext = React.useContext(OverlayContext);

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
                    overlayContext.show(OverlayType.cart, OverlayTheme.right);
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
                          input: {
                            attributes: [],
                            basePrice: values.price,
                            category: PRODUCT_CATEGORY_ONLINE_ZAHIALGA,
                            chargeTaxes: false,
                            collections: [],
                            descriptionJson: "{}",
                            isPublished: true,
                            name: values.name,
                            productType: PRODUCT_TYPE_ONLINE_ZAHIALGA,
                            publicationDate: null,
                            seo: {
                              description: "",
                              title: "",
                            },
                            sku: `ushop-${UUID.v4()}`,
                            stocks: [
                              {
                                quantity: 100,
                                warehouse: WAREHOUSE_ASIA,
                              },
                            ],
                            trackInventory: false,
                            ushop: values.ushopId,
                            visibleInListings: true,
                            weight: 1,
                          },
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

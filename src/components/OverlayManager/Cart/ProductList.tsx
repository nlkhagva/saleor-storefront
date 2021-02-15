import React from "react";
// import { FormattedMessage } from 'react-intl';
import { ICheckoutModelLine } from "@saleor/sdk/lib/helpers";
import CustomList from "./CustomList";

import { TypedProductVariants } from "./queries";

const ProductList: React.SFC<{
  lines: ICheckoutModelLine[];
  add?(variantId: string, quantity: number): void;
  remove?(variantId: string): void;
}> = ({ lines, add, remove }) => {
  const variables = { ids: lines.map(line => line.variant.id) };
  return (
    <TypedProductVariants variables={variables}>
      {({ loading, data }) => {
        if (loading) {
          return <span>Loading...</span>;
        }
        // console.log(data);
        // return <>hello</>;

        return (
          <CustomList lines={lines} add={add} remove={remove} data={data} />
        );
      }}
    </TypedProductVariants>
  );
};
export default ProductList;

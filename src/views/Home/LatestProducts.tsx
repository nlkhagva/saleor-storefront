import React from "react";

import { Loader } from "@components/atoms";
import { ProductList } from "@components/organisms";
import { maybe } from "@temp/core/utils";

import { TypedLatestProductsQuery } from "./queries";

const LatestProducts = ({}) => {
  return (
    <TypedLatestProductsQuery
      variables={{ pageSize: 12 }}
      alwaysRender
      displayLoader={false}
      errorPolicy="all"
    >
      {latestData => {
        const products = maybe(() => latestData.data?.products.edges, []);

        const handleLoadMore = async () => {
          latestData.loadMore(
            (prev, next) => ({
              ...prev,
              products: {
                ...prev.products,
                edges: [...prev.products.edges, ...next.products.edges],
                pageInfo: next.products.pageInfo,
              },
            }),
            {
              after: latestData.data.products.pageInfo.endCursor,
            }
          );
        };

        if (latestData.loading) {
          return <Loader />;
        }

        if (products.length) {
          return (
            <div className="container" style={{ marginTop: "4rem" }}>
              <h4 className="t-c">Өвлийн хямдрал</h4>
              <h3 className="t-c m-b3">Онцлох хямдралууд</h3>

              <ProductList
                products={products.map(edge => edge.node)}
                canLoadMore={latestData.data?.products?.pageInfo.hasNextPage}
                loading={latestData.loading}
                onLoadMore={handleLoadMore}
              />
            </div>
          );
        }
        return null;
      }}
    </TypedLatestProductsQuery>
  );
};

export default LatestProducts;

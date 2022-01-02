import React from "react";
import { ProductList } from "@components/organisms";
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

        const tmp = latestData.data?.products;
        return (
          <div className="container" style={{ marginTop: "4rem" }}>
            <h4 className="t-c">Өвлийн хямдрал</h4>
            <h3 className="t-c m-b3">Онцлох хямдралууд</h3>

            <ProductList
              products={tmp.edges.map(edge => edge.node)}
              canLoadMore={latestData.data?.products?.pageInfo.hasNextPage}
              loading={latestData.loading}
              onLoadMore={handleLoadMore}
            />
          </div>
        );
      }}
    </TypedLatestProductsQuery>
  );
};

export default LatestProducts;

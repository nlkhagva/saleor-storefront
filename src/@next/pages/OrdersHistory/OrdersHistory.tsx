import React from "react";
import { FormattedMessage } from "react-intl";

import { Button, Loader } from "@components/atoms";
import { OrderTabel } from "@components/molecules";

import * as S from "./styles";
import { IProps } from "./types";

import { TypedOrdersByUser } from "./query";

const ORDERS_PER_APICALL = 10;

export const OrdersHistory: React.FC<IProps> = ({ history }: IProps) => {
  const [load, setLoad] = React.useState(false);
  return (
    <TypedOrdersByUser
      variables={{ perPage: ORDERS_PER_APICALL }}
      fetchPolicy="network-only"
    >
      {({ data, loading, loadMore }) => {
        console.log(data);
        if (loading && !data) return <Loader />;

        const orders = data?.me?.orders;
        return (
          <>
            <OrderTabel orders={orders?.edges} history={history} />
            {orders?.pageInfo.hasNextPage && (
              <S.Wrapper>
                <Button
                  testingContext="loadMoreOrdersButton"
                  onClick={() => {
                    setLoad(true);

                    loadMore(
                      (prev, next) => {
                        setLoad(false);
                        return {
                          me: {
                            __typename: "User",
                            id: "dd",
                            orders: {
                              __typename: "OrderCountableConnection",
                              // ...prev.me?.orders,
                              edges: [
                                ...(prev.me?.orders?.edges || []),
                                ...(next.me?.orders?.edges || []),
                              ],
                              pageInfo: next?.me?.orders?.pageInfo || {
                                __typename: "PageInfo",
                                hasNextPage: false,
                                endCursor: null,
                              },
                            },
                          },
                        };
                      },
                      {
                        after: orders?.pageInfo.endCursor,
                      }
                    );
                  }}
                >
                  {load ? (
                    "Loading..."
                  ) : (
                    <FormattedMessage defaultMessage="Load more" />
                  )}
                </Button>
              </S.Wrapper>
            )}
          </>
        );
      }}
    </TypedOrdersByUser>
  );
};

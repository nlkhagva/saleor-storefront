import React, { useRef, useState } from "react";
// import { OrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/OrderByToken";
// import { UserOrderByToken_orderByToken } from "@saleor/sdk/lib/queries/gqlTypes/UserOrderByToken";
import { IFormError } from "@types";
import { Button } from "@components/atoms";
import { Money } from "@components/containers";
import {
  // CartSummary,
  PaymentGatewaysList,
} from "@components/organisms";
import { TypedLkShopQuery } from "./query";
import { UserOrderByToken_orderByToken } from "./gqlTypes/UserOrderByToken";

export interface iProps {
  order: UserOrderByToken_orderByToken;
  mutation: any;
}

export const OrderPayment: React.FC<iProps> = ({ order, mutation }: iProps) => {
  const orderGatewayFormId = "gateway-form";
  const orderGatewayFormRef = useRef<HTMLFormElement>(null);

  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState<
    string | undefined
  >();
  const [loadingPayment, setLoadingPayment] = useState(false);

  const [selectedPaymentGatewayToken] = useState<string | undefined>();

  const [paymentGatewayErrors, setPaymentGatewayErrors] = useState<
    IFormError[]
  >([]);

  const handlePaymentGatewayError = (errors: IFormError[]) => {
    setPaymentGatewayErrors(errors);
  };

  //   useEffect(() => {
  //     setSelectedPaymentGateway(payment?.gateway);
  //   }, [payment?.gateway]);
  //   useEffect(() => {
  //     setSelectedPaymentGatewayToken(payment?.token);
  //   }, [payment?.token]);

  const handleProcessPayment = async (gateway: string, token?: string) => {
    mutation({ variables: { orderId: order.id, input: { gateway, token } } });
  };
  const handleSubmitPayment = async (paymentData?: object) => {
    // console.log(paymentData);
    setLoadingPayment(false);
  };
  const handleSubmitPaymentSuccess = () => {
    // tulbur amjlittai tulugdsunii daraa
  };
  const submitPayment = () => {
    if (selectedPaymentGateway !== undefined) {
      setLoadingPayment(true);
      orderGatewayFormRef.current?.dispatchEvent(
        new Event("submit", { cancelable: true })
      );
    }
  };
  return (
    <TypedLkShopQuery loaderFull>
      {data => {
        const { data: shopData, loading } = data;
        if (loading) {
          return <p>loading...</p>;
        }
        const { availablePaymentGateways } = shopData.shop;
        const paymentGatewaysView = availablePaymentGateways && (
          <PaymentGatewaysList
            paymentGateways={availablePaymentGateways}
            processPayment={handleProcessPayment}
            submitPayment={handleSubmitPayment}
            submitPaymentSuccess={handleSubmitPaymentSuccess}
            formId={orderGatewayFormId}
            formRef={orderGatewayFormRef}
            selectedPaymentGateway={selectedPaymentGateway}
            selectedPaymentGatewayToken={selectedPaymentGatewayToken}
            selectPaymentGateway={setSelectedPaymentGateway}
            onError={handlePaymentGatewayError}
            errors={paymentGatewayErrors}
          />
        );
        return (
          <>
            <p
              style={{
                color: "#8a6d3b",
                backgroundColor: "#fcf8e3",
                borderColor: "#faebcc",
                padding: "1rem",
                margin: "1rem 0",
              }}
            >
              Та доорх төлбөрийн хэрэгсэлээс сонгож үлдэгдэл төлбөрөө төлөөрэй
            </p>
            {paymentGatewaysView}
            <Button
              testingContext="submit"
              type="submit"
              size="sm"
              disabled={loadingPayment && selectedPaymentGateway === undefined}
              // disabled={!selectedPaymentGateway}
              onClick={() => submitPayment()}
              style={{ marginTop: "1rem" }}
            >
              {!loadingPayment && (
                <>
                  Төлөх /
                  <Money
                    money={{
                      amount: Math.abs(order.totalBalance.amount),
                      currency: order.totalBalance.currency,
                    }}
                  />
                  /
                </>
              )}
              {loadingPayment && <>Loading</>}
            </Button>
          </>
        );
      }}
    </TypedLkShopQuery>
  );
};

import React from "react";

import { Loader } from "@components/atoms";

import { Container } from "../Container";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Template for checkout page.
 */
const Checkout: React.FC<IProps> = ({
  loading,
  navigation,
  checkout,
  paymentGateways,
  hidePaymentGateways = false,
  cartSummary,
  button,
}: IProps) => {
  return (
    <Container>
      {loading && (
        <S.Loader>
          <Loader fullScreen />
        </S.Loader>
      )}
      <S.Wrapper>
        <S.Navigation>{navigation}</S.Navigation>
        <S.Checkout>{checkout}</S.Checkout>
        <S.PaymentGateways hide={hidePaymentGateways}>
          {paymentGateways}
          <S.Divider />
          <section>
            <S.AlertContainer>
              <S.AlertTitle>Санамж: </S.AlertTitle>
              <S.AlertContent>
                1кг хүртлэх ачаа: £8
                <br /> 1кг-с дээш ачааг 100 грамм тутамд £0.8 тооцно. Энэ нь
                Монголд ирэх тээврийн зардал ба одоогийн үнэ дээр{" "}
                <b>НЭМЭГДЭХ</b>-г анхаарна уу.
              </S.AlertContent>
            </S.AlertContainer>
          </section>
        </S.PaymentGateways>
        <S.CartSummary>{cartSummary}</S.CartSummary>
        <S.Button>{button}</S.Button>
      </S.Wrapper>
    </Container>
  );
};

export { Checkout };

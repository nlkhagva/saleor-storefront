import React from "react";
import { FormattedMessage } from "react-intl";

import { ErrorMessage } from "@components/atoms";
import { Money } from "@components/containers";
import { AddressSummary } from "@components/molecules";
import { checkoutMessages } from "@temp/intl";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Review order view showed in checkout.
 */
const CheckoutReview: React.FC<IProps> = ({
  shippingAddress,
  billingAddress,
  shippingMethodName,
  paymentMethodName,
  email,
  errors,
  is30,
  totalPrice,
}: IProps) => {
  return (
    <S.Wrapper data-test="sectionTitle">
      <S.Title data-test="checkoutPageSubtitle">
        <FormattedMessage {...checkoutMessages.reviewOrder} />
      </S.Title>
      <S.Grid>
        <section data-test="shippingAddressSection">
          <S.SubTitle>
            <FormattedMessage {...checkoutMessages.shippingAddress} />
          </S.SubTitle>
          <S.Divider />
          <AddressSummary address={shippingAddress} email={email} />
        </section>
        {false && (
          <section data-test="billingAddressSection">
            <S.SubTitle>
              <FormattedMessage defaultMessage="Тооцооны хаяг" />
            </S.SubTitle>
            <S.Divider />
            <AddressSummary address={billingAddress} email={email} />
          </section>
        )}
        {shippingMethodName && (
          <section>
            <S.SubTitle>
              <FormattedMessage defaultMessage="Shipping Method" />
            </S.SubTitle>
            <S.Divider />
            <S.TextSummary data-test="shippingMethodName">
              {shippingMethodName}
            </S.TextSummary>
          </section>
        )}
        <section>
          <S.SubTitle>
            <FormattedMessage defaultMessage="Төлбөрийн нөхцөл" />
          </S.SubTitle>
          <S.Divider />
          <S.TextSummary data-test="paymentMethodName">
            {paymentMethodName} картаар
          </S.TextSummary>
          <S.TextSummary data-test="paymentMethodName">
            {is30 ? (
              <>
                <Money
                  money={{
                    amount: totalPrice?.gross.amount * 0.3,
                    currency: totalPrice?.gross.currency,
                  }}
                />{" "}
                <small style={{ fontSize: 12 }}>буюу урьдчилгаа 30%</small>
              </>
            ) : (
              <>
                <Money money={totalPrice?.gross} />{" "}
                <small style={{ fontSize: 12 }}>барааны бүтэн төлбөр</small>
              </>
            )}
          </S.TextSummary>
        </section>
      </S.Grid>
      <S.ErrorMessages>
        <ErrorMessage errors={errors} />
      </S.ErrorMessages>
    </S.Wrapper>
  );
};

export { CheckoutReview };

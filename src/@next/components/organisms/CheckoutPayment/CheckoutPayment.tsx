import React, { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

import { Checkbox } from "@components/atoms";
import { Money } from "@components/containers";
import { checkoutMessages } from "@temp/intl";

import { DiscountForm } from "../DiscountForm";
import { IDiscountFormData } from "../DiscountForm/types";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Payment options used in checkout.
 */
const CheckoutPayment: React.FC<IProps> = ({
  promoCodeErrors,
  promoCodeDiscountFormId,
  promoCodeDiscountFormRef,
  promoCodeDiscount,
  addPromoCode,
  removeVoucherCode,
  submitUnchangedDiscount,
  is30,
  setIs30,
  totalPrice,
}: IProps) => {
  const [showPromoCodeForm, setShowPromoCodeForm] = useState(
    !!promoCodeDiscount?.voucherCode
  );

  useEffect(() => {
    const isVoucherCode = !!promoCodeDiscount?.voucherCode;
    if (isVoucherCode) {
      setShowPromoCodeForm(isVoucherCode);
    }
  }, [promoCodeDiscount?.voucherCode]);

  const handleChangeShowPromoCodeForm = () => {
    setShowPromoCodeForm(!showPromoCodeForm);
  };

  const handleSubmitPromoCode = (discountForm?: IDiscountFormData) => {
    const newPromoCode = discountForm?.promoCode;
    const savedPromoCode = promoCodeDiscount?.voucherCode;

    if ((!newPromoCode || !showPromoCodeForm) && savedPromoCode) {
      removeVoucherCode(savedPromoCode);
    } else if (newPromoCode && newPromoCode !== savedPromoCode) {
      addPromoCode(newPromoCode);
    } else {
      submitUnchangedDiscount();
    }
  };

  return (
    <S.Wrapper>
      <section>
        <div className="ushop-title" style={{ marginTop: "-16px" }}>
          <h4>Олон улсын картын</h4>
          <h3>Төлбөрийн нөхцөл</h3>
        </div>

        <div>
          <S.TileRow
            checked={!is30}
            key="is30-false"
            data-test="shippingMethodTile"
            data-test-id="is30"
            onClick={() => setIs30(false)}
          >
            <div>
              <h6 data-test="checkoutShippingMethodOptionName">100% ТӨЛӨХ</h6>
              <div>
                <h3>
                  <b>
                    <Money money={totalPrice?.gross} />
                  </b>
                </h3>
              </div>
              <div style={{ marginTop: ".75rem", marginBottom: ".25rem" }}>
                <h6>&nbsp;</h6>
                <h6>&nbsp;</h6>
              </div>
            </div>
          </S.TileRow>

          <S.TileRow
            className="right"
            checked={is30}
            key="is30-true"
            data-test="shippingMethodTile"
            data-test-id="is30-true"
            onClick={() => setIs30(true)}
          >
            <div>
              <h6 data-test="checkoutShippingMethodOptionName2">
                УРЬДЧИЛГАА 30%
              </h6>
              <div>
                <h3>
                  <b>
                    <Money
                      money={{
                        amount: totalPrice?.gross.amount * 0.3,
                        currency: totalPrice?.gross.currency,
                      }}
                    />
                  </b>
                </h3>
              </div>
              <div style={{ marginTop: ".75rem", marginBottom: ".25rem" }}>
                <h6>Үлдэгдэл 70%</h6>
                <h6>
                  <b>
                    <Money
                      money={{
                        amount:
                          totalPrice?.gross.amount -
                          totalPrice?.gross.amount * 0.3,
                        currency: totalPrice?.gross.currency,
                      }}
                    />
                  </b>
                </h6>
              </div>
            </div>
          </S.TileRow>
          <S.Clearbox />
        </div>

        {false && (
          <>
            <S.Title data-test="checkoutPageSubtitle">
              <FormattedMessage {...checkoutMessages.paymentMethod} />
            </S.Title>
            <Checkbox
              data-test="checkoutPaymentPromoCodeCheckbox"
              name="payment-promo-code"
              checked={showPromoCodeForm}
              onChange={handleChangeShowPromoCodeForm}
            >
              <FormattedMessage defaultMessage="Do you have a gift card voucher or discount code?" />
            </Checkbox>
          </>
        )}
        {false && showPromoCodeForm && (
          <S.DiscountField>
            <DiscountForm
              discount={{ promoCode: promoCodeDiscount?.voucherCode }}
              formId={promoCodeDiscountFormId}
              formRef={promoCodeDiscountFormRef}
              handleSubmit={handleSubmitPromoCode}
              errors={promoCodeErrors}
            />
          </S.DiscountField>
        )}
        <S.Divider />
      </section>
    </S.Wrapper>
  );
};

export { CheckoutPayment };

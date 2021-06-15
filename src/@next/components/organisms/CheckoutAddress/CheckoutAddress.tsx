import React from "react";

import { FormattedMessage } from "react-intl";
import { Checkbox } from "@components/atoms";
import { checkoutMessages } from "@temp/intl";
import { filterNotEmptyArrayItems } from "@utils/misc";

import { AddressForm } from "../AddressForm";
import { AddressGridSelector } from "../AddressGridSelector";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Address form used in checkout.
 */
const CheckoutAddress: React.FC<IProps> = ({
  checkoutShippingAddress,
  checkoutBillingAddress,
  billingAsShippingAddress = false,
  email,
  selectedUserShippingAddressId,
  selectedUserBillingAddressId,
  userAddresses,
  countries,
  userId,
  shippingFormId,
  shippingFormRef,
  billingFormId,
  billingFormRef,
  shippingAddressRequired,
  setShippingAddress,
  setBillingAddress,
  setBillingAsShippingAddress,
  shippingErrors,
  billingErrors,
  newAddressFormId,
}: IProps) => {
  return (
    <S.Wrapper>
      {shippingAddressRequired && (
        <>
          <section>
            <div className="ushop-title" style={{ marginTop: "-16px" }}>
              <h4>Хүлээн авах</h4>
              <h3>Хаяг сонгох</h3>
            </div>
            {false && (
              <S.Title data-test="checkoutPageSubtitle">
                <FormattedMessage {...checkoutMessages.shippingAddress} />
              </S.Title>
            )}

            {userAddresses ? (
              <AddressGridSelector
                testingContext="shipping"
                formId={shippingFormId}
                formRef={shippingFormRef}
                addresses={userAddresses}
                selectedAddressId={selectedUserShippingAddressId}
                countriesOptions={countries?.filter(filterNotEmptyArrayItems)}
                userId={userId}
                errors={shippingErrors}
                onSelect={(address, id) =>
                  setShippingAddress(address, undefined, id)
                }
                newAddressFormId={newAddressFormId}
              />
            ) : (
              <AddressForm
                testingContext="shippingAddressForm"
                formId={shippingFormId}
                formRef={shippingFormRef}
                countriesOptions={countries?.filter(filterNotEmptyArrayItems)}
                address={{
                  ...checkoutShippingAddress,
                  email,
                }}
                handleSubmit={address =>
                  setShippingAddress(address, address?.email)
                }
                includeEmail
                errors={shippingErrors}
              />
            )}
          </section>
          <S.Divider />
        </>
      )}
      <section>
        <S.AlertContainer>
          <S.AlertTitle>Санамж: </S.AlertTitle>
          <S.AlertContent>
            1. Нэг төрлийн бараа хоёроос дээш тоогоор
            <br />
            2. Хөдөлмөрийн хөлсний доод хэмжээг 10 нугалсанаас дээш үнийн дүнтэй
            бараа захиалсан тохиолдолд Монгол улсын гаалийн татвар төлөхийг
            анхаарна уу
          </S.AlertContent>
        </S.AlertContainer>
      </section>

      <section style={{ display: "none" }}>
        <S.Title data-test="checkoutPageSubtitle">
          <FormattedMessage {...checkoutMessages.billingAddress} />
        </S.Title>
        {shippingAddressRequired && (
          <Checkbox
            data-test="checkoutAddressBillingAsShippingCheckbox"
            name="billing-same-as-shipping"
            checked={billingAsShippingAddress}
            onChange={() =>
              setBillingAsShippingAddress(!billingAsShippingAddress)
            }
          >
            <FormattedMessage defaultMessage="Хүргэлтийн хаягтай ижил" />
          </Checkbox>
        )}
        {!billingAsShippingAddress && (
          <>
            {shippingAddressRequired && <S.Divider />}
            {userAddresses ? (
              <AddressGridSelector
                testingContext="billing"
                formId={billingFormId}
                formRef={billingFormRef}
                addresses={userAddresses}
                selectedAddressId={selectedUserBillingAddressId}
                countriesOptions={countries?.filter(filterNotEmptyArrayItems)}
                userId={userId}
                errors={billingErrors}
                onSelect={(address, id) =>
                  setBillingAddress(address, undefined, id)
                }
                newAddressFormId={newAddressFormId}
              />
            ) : (
              <AddressForm
                testingContext="billingAddressForm"
                formId={billingFormId}
                formRef={billingFormRef}
                countriesOptions={countries?.filter(filterNotEmptyArrayItems)}
                address={checkoutBillingAddress || undefined}
                handleSubmit={address =>
                  setBillingAddress(address, address?.email)
                }
                includeEmail={!shippingAddressRequired}
                errors={billingErrors}
              />
            )}
          </>
        )}
      </section>
    </S.Wrapper>
  );
};

export { CheckoutAddress };

import { media, styled } from "@styles";

export const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

export const Wrapper = styled.div`
  margin: 45px 0;
  display: grid;

  grid-template-columns: 8fr 4fr;
  grid-template-rows: 85px auto auto;
  grid-column-gap: 30px;
  grid-template-areas:
    "navigation cartSummary"
    "checkout cartSummary"
    "paymentGateways cartSummary"
    "button cartSummary";

  ${media.mediumScreen`
    grid-template-columns: 1fr;
    grid-template-areas:
      "navigation"
      "checkout"
      "paymentGateways"
      "button";
  `}
`;

export const Navigation = styled.div`
  grid-area: navigation;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  padding-bottom: 43px;
  height: 85px;
`;
export const Checkout = styled.div`
  grid-area: checkout;
  padding: 3rem 0 0 0;
`;
export const PaymentGateways = styled.div<{ hide: boolean }>`
  ${props => props.hide && "display: none;"}
  grid-area: paymentGateways;
`;
export const CartSummary = styled.div`
  grid-area: cartSummary;

  ${media.mediumScreen`
    position: fixed;
    z-index: 20;
    bottom: 0;
  `}
`;
export const Button = styled.div`
  grid-area: button;
  margin: 3rem 0 0 0;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid
    ${props => props.theme.colors.baseFontColorTransparent};
  margin: 30px 0;
`;

export const AlertContainer = styled.div`
  background-color: #fff3cd;
  border: 1px solid #ffecb5;
  border-radius: 0.25rem;
  color: #664d03;
  font-size: 12px;
  padding: 1rem;
`;
export const AlertTitle = styled.h6`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const AlertContent = styled.div``;

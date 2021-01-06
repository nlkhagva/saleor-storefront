import ReactSVG from "react-svg";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "@components/atoms";
import { Container } from "@components/templates";
import { checkoutMessages } from "@temp/intl";
import svgOk from "images/unurshop/thankyou-ok.svg";
// import svgBg from "images/unurshop/thankyou-bg.svg";
import pngBg from "images/unurshop/thankyou-bg.png";

import * as S from "./styles";
import { IProps } from "./types";

/**
 * Thank you page after completing the checkout.
 */
const ThankYou: React.FC<IProps> = ({
  orderNumber,
  continueShopping,
  orderDetails,
}: IProps) => {
  return (
    <Container data-test="thankYouView">
      <S.Wrapper>
        <div className="ushop-title">
          <ReactSVG path={svgOk} />
          <br />

          <h4>Төлбөр амжилттай хийгдлээ !</h4>
          <h3>Танд баярлалаа</h3>
        </div>

        <S.ONum>
          <span onClick={orderDetails}>
            <span className="b">
              <span className="t">Таны захиалгын дугаар</span>#{orderNumber}
            </span>
          </span>
        </S.ONum>
        <div>
          <img src={pngBg} alt="thank you bg" style={{ width: "100%" }} />
        </div>

        {/* <S.Paragraph>
          <FormattedMessage defaultMessage="Таны захиалгын дугаар" />{" "}
        </S.Paragraph>
        <S.Paragraph>
          <FormattedMessage defaultMessage="Бид захиалгын баталгаажуулалтыг имэйлээр илгээсэн бөгөөд захиалга монголд ирсэн үед танд мэдэгдэх болно." />
        </S.Paragraph> */}
        <S.Buttons>
          <Button
            testingContext="continueShoppingButton"
            onClick={continueShopping}
            color="secondary"
            fullWidth
          >
            <FormattedMessage {...checkoutMessages.continueShopping} />
          </Button>
          <Button
            testingContext="gotoOrderDetailsButton"
            onClick={orderDetails}
            fullWidth
          >
            <FormattedMessage defaultMessage="Захиалгын дэлгэрэнгүй" />
          </Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  );
};

export { ThankYou };

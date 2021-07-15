import { Button, OverlayTheme, OverlayType } from "..";

import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { OverlayContextInterface } from "../Overlay";
import React from "react";

// import { OverlayTheme, OverlayType } from "..";

const CheckoutAsGuest: React.FC<{
  overlay: OverlayContextInterface;
  checkoutUrl: string;
}> = ({ overlay, checkoutUrl }) => (
  <div className="checkout-login__guest">
    <h3 className="checkout__header">
      <FormattedMessage defaultMessage="Зочны хувиар үргэлжлүүл" />
    </h3>
    <p>
      {/* <FormattedMessage defaultMessage="" /> */}
      Та манай дэлгүүрт бүртгүүлэхгүйгээр захиалга үүсгэж болох ба үүнийг хүсвэл
      <b style={{ fontWeight: "bold" }}> "Зочины хувиар үргэлжлүүл"</b> товчин
      дээр даран цааш захиалгаа үргэлжлүүлнэ үү
    </p>
    <Link to={checkoutUrl}>
      <Button testingContext="continueAsGuestButton">
        <FormattedMessage defaultMessage="Зочны хувиар үргэлжлүүл" />
      </Button>
    </Link>

    <p>
      <FormattedMessage defaultMessage="Эсвэл та " />{" "}
      <span
        data-test="showRegisterOverlay"
        className="u-link"
        onClick={() => overlay.show(OverlayType.register, OverlayTheme.right)}
      >
        {/* <FormattedMessage defaultMessage="create an account" /> */}
        Шинээр бүртгүүлэх бол Энд дарна уу
      </span>
    </p>
  </div>
);

export default CheckoutAsGuest;

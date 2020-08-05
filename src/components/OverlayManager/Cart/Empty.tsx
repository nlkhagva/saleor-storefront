import * as React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "../..";

const Empty: React.FC<{ overlayHide(): void }> = ({ overlayHide }) => (
  <div className="cart__empty" style={{ textAlign: "center" }}>
    <h4>
      <FormattedMessage defaultMessage="Таны сагс хоосон байна" />
    </h4>
    <p>
      <FormattedMessage defaultMessage="Та сагсанд бараа нэмээгүй байна. Бид таныг манай дэлгүүрээс хүссэн бараагаа олно гэдэгт итгэлтэй байна" />
    </p>
    <div className="cart__empty__action">
      <Button
        testingContext="emptyCartHideOverlayButton"
        secondary
        onClick={overlayHide}
      >
        <FormattedMessage defaultMessage="Нүүр рүү очих" />
      </Button>
    </div>
  </div>
);

export default Empty;

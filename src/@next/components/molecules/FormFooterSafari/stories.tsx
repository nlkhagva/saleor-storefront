import { storiesOf } from "@storybook/react";
import React from "react";

import { action } from "@storybook/addon-actions";
import { FormFooterSafari as FormFooter } from ".";

const cancelBtn = {
  action: action("on cancel"),
  testingContext: "footerTestButton",
  text: "Cancel",
};

const DEFAULT_PROPS = {
  submitBtn: {
    action: action("on submit"),
    testingContext: "footerTestButton",
    text: "Save",
  },
};

storiesOf("@components/molecules/FormFooter", module)
  .addParameters({ component: FormFooter })
  .add("with submit button", () => <FormFooter {...DEFAULT_PROPS} />)
  .add("with submit and cancel button", () => {
    const PROPS = {
      ...DEFAULT_PROPS,
      cancelBtn,
    };
    return <FormFooter {...PROPS} />;
  })
  .add("with top divider", () => {
    const PROPS = {
      ...DEFAULT_PROPS,
      divider: true,
    };
    return <FormFooter {...PROPS} />;
  });

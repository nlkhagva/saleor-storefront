import { storiesOf } from "@storybook/react";
import React from "react";

import { Checkbox } from ".";

storiesOf("@components/molecules/Checkbox", module)
.addParameters({ component: Checkbox })
.add("default", () =>
<Checkbox />);
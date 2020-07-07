import { storiesOf } from "@storybook/react";
import React from "react";

import { BookingProduct } from ".";

storiesOf("@components/organisms/BookingProduct", module)
.addParameters({ component: BookingProduct })
.add("default", () =>
<BookingProduct />);
import React from "react";
import { storiesOf } from "@storybook/react";

import Login from "./Display";

const mockCallback = () => {}

storiesOf("Pages/Login", module)
  .addParameters({ component: Login })
  .add("default", () => <Login onSubmit={mockCallback} />)

import React from "react";
import { storiesOf } from "@storybook/react";

import RecoverPage from "./Display";


storiesOf("Pages/Recover", module)
  .addParameters({ component: "Recover" })
  .add("list posts", () => <RecoverPage />);

import React from "react";
import { storiesOf } from "@storybook/react";

import Error from ".";
import Web from "./Web";
import Mobile from "./Mobile";

const exampleStatus: number = 500;
const exampleMessage: string = "Internal server error";

storiesOf("Components/Error", module)
  .addParameters({ component: Error })
  .add("responsive", () => (
    <Error errorStatus={exampleStatus} errorMessage={exampleMessage} />
  ))
  .add("web", () => <Web status={exampleStatus} message={exampleMessage} />)
  .add("mobile", () => (
    <Mobile status={exampleStatus} message={exampleMessage} />
  ));

import React from "react";
import { storiesOf } from "@storybook/react";

import Error from "./";
import Web from "./Web";
import Mobile from "./Mobile";

import { SocialNetworksLabfaz } from "Api/SocialNetworksLabfaz";

const exampleStatus: number = 500;
const exampleMessage: string = "Internal server error";

const data: SocialNetworksLabfaz = {
  email: "test@test.com",
  phone: "619999999",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
  googlePlus: "https://googlePlus.com",
};

storiesOf("Pages/Error", module)
  .addParameters({ component: Error })
  .add("responsive", () => (
    <Error errorStatus={exampleStatus} errorMessage={exampleMessage} />
  ))
  .add("web", () => <Web status={exampleStatus} message={exampleMessage} />)
  .add("mobile", () => (
    <Mobile data={data} status={exampleStatus} message={exampleMessage} />
  ));

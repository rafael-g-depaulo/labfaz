import React from "react";
import { storiesOf } from "@storybook/react";

import ResetEmail from "./Display";
import { RecoverData } from "Api/RecoverPassImage";
import { mockImage } from "Utils/Image";

const image = mockImage({
  url: "https://images.fineartamerica.com/images-medium-large/reflections-of-longs-peak-vertical-image-james-bo-insogna.jpg",
  alternativeText: "string",
  caption: "string",
  width: 640,
  height: 640,
  ext: "png"
})

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlkxcFFXTzEyUWtIVUkzaTdaOEtEcCIsImlhdCI6MTYzMDA3MjIxMCwiZXhwIjoxNjMwMDcyODEwfQ._swjHtKo-Opv6xv0Yim51yOtsP77phUiPISVTzValZg"

const mockData: RecoverData = {
  image: image
}

  storiesOf("Pages/Recover", module)
  .addParameters({ component: "Reset" })
  .add("Reset email", () => <ResetEmail image={mockData} token={token}/>);

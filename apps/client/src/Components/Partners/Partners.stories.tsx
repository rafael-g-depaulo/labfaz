import { storiesOf } from "@storybook/react";

import Partners from "./";
import Display from "./Display";

const data = [
  {
    name: "Partner1",
    logo: [
      {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Logo_Sample_8f2bd43037.png",
      },
    ],
  },
  {
    name: "Partner2",
    logo: [
      {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Logo_Sample_8f2bd43037.png",
      },
    ],
  },
];

storiesOf("Components/Partners", module)
  .addParameters({ component: Partners })
  .add("partners", () => <Partners partners={data} />);

storiesOf("Components/Partners", module)
  .addParameters({ component: Display })
  .add("display", () => <Display data={data} />);

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

export default {
  title: 'Components/Partners',

  parameters: {
    component: Partners,
  },
}

export const partners = () => (
  <Partners partners={data} />
)
partners.story = {
  name: 'partners',
}

export const staticRender = () => (
  <Display data={data} />
)
staticRender.story = {
  name: 'display',
}

import HomePage, { DisplayProps } from "./Display"
import { HomepageBannerInfo } from "Api/HomepageBannerInfo"
import { mockImage } from "@labfaz/strapi-utils"

const data: HomepageBannerInfo = {
  title: "LABFAZ",
  subtitle: "LoremIpsum",
  image: mockImage({
    url:
      "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
  }),
}

const props = {} as DisplayProps

export default {
  title: 'Pages/Home',

  parameters: {
    component: HomePage,
  },
}

export const page = () => (
  <HomePage {...props} data={data} />
)
page.story = {
  name: "default"
}

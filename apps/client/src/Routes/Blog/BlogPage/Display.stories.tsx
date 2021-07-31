import React from 'react'
import { storiesOf } from '@storybook/react'

import BlogPage from './Display'
import { BlogBannerInfo } from 'Api/BlogBannerInfo'
import { mockImage } from 'Utils/Image'

const data: BlogBannerInfo = {
  title: "Blog",
  subtitle: "LoremIpsum",
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
  })
}

storiesOf("Pages/Blog", module)
  .addParameters({ component: BlogPage })
  .add("list posts", () => <BlogPage data={data}/>)

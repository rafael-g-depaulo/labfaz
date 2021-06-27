import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import BlogPage from './Display'

storiesOf("Pages/Blog", module)
  .addParameters({ component: BlogPage })
  .add("default", () => <BrowserRouter><BlogPage data={{
    title: "Blog",
    subtitle: "LoremIpsum",
    image: {
      url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
      alternativeText: "Blog Banner Image",
      caption: "string",
      width: 20,
      height: 20,
      ext: "jpeg"
    }
  }}/></BrowserRouter>)

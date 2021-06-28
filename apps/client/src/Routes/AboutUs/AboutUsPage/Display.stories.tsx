import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import AboutUsPage from './Display'

storiesOf("Pages/AboutUs", module)
  .addParameters({ component: AboutUsPage })
  .add("default", () => <BrowserRouter><AboutUsPage data={{  title: "Quem Somos",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: {
      url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/large_usememo_ecb62c6bf7.png",
      alternativeText: "string",
      caption: "string",
      width: 20,
      height: 20,
      ext: "png"
    }
  }}/></BrowserRouter>)

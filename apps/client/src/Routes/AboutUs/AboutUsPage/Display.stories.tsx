import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import AboutUsPage from './Display'
import { mockImage } from 'Utils/Image'
import { AboutUsData } from 'Api/AboutUs'

const image = mockImage({
  url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/large_usememo_ecb62c6bf7.png",
  alternativeText: "string",
  caption: "string",
  width: 20,
  height: 20,
  ext: "png"

})

const mockedData: AboutUsData = {
  banner_data: "Quem Somos",
  welcome_data: {
    id: 1,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  about_us_data: [{
    id: 2,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  },
  {
    id: 2,
    img: image,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

  }]
}

storiesOf("Pages/AboutUs", module)
  .addParameters({ component: AboutUsPage })
  .add("default", () => <BrowserRouter><AboutUsPage data={mockedData}/></BrowserRouter>)

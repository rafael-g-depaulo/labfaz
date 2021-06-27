import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import AboutUsPage from './Display'
import { mockImage } from 'Utils/Image'
import { AboutUsData } from 'Api/AboutUs'

const image = mockImage({
  url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
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

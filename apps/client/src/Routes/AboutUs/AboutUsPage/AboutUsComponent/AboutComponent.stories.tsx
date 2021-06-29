import React from 'react'
import { storiesOf } from "@storybook/react"

import About from "."
import { DataObject } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'

const image = mockImage({
  url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
  alternativeText: "That's a beauty of a platypus",
  caption: "A very nice paltypus",
  ext: "jpg"
})


const about_us_data: DataObject[] = [{
  id: 1,
  img: image,
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.\n\n Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
},
{
  id: 2,
  img: image,
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
},
{
  id: 3,
  img: image,
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
}]

storiesOf("Components/AboutUs", module)
  .addParameters({ component: About })
  .add("Default", () => <About data={about_us_data} />)

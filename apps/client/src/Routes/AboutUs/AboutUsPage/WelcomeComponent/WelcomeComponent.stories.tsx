import React from 'react'
import { storiesOf } from '@storybook/react'

import WelcomeComponent from "./"
import { DataObject } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'

const image = mockImage({
  url: "https://st.depositphotos.com/1002049/2024/i/950/depositphotos_20240775-stock-photo-welcome.jpg",
  alternativeText: "What can I say except you're welcome",
  caption: "A very nice welcome image",
  ext: 'jpg'
})

const welcome_data: DataObject = {
  id: 1,
  img: image,
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
}

storiesOf("Components/WelcomeComponent", module)
  .addParameters({ component: WelcomeComponent })
  .add("Default", () => <WelcomeComponent data={welcome_data}/>)

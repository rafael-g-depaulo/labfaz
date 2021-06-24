import React from 'react'
import { storiesOf } from '@storybook/react'

import WelcomeComponent from "./"

const welcome_data = {
  id: 1,
  img: {
    name: "Welcome image",
    url: "https://st.depositphotos.com/1002049/2024/i/950/depositphotos_20240775-stock-photo-welcome.jpg",
    img: "https://st.depositphotos.com/1002049/2024/i/950/depositphotos_20240775-stock-photo-welcome.jpg"
  },
  text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus."
}

storiesOf("Components/WelcomeComponent", module)
  .addParameters({ component: WelcomeComponent })
  .add("Default", () => <WelcomeComponent data={welcome_data}/>)

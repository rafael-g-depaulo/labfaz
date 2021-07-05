import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Title } from './'

storiesOf("Components/Title", module)
  .addParameters({ component: Title })
  .add("title", () => 
    <BrowserRouter >
      <Title 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
        level={1}
        titleColor="black"
      />
    </BrowserRouter>)

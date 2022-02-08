import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Text } from './'

storiesOf("Components/Text", module)
  .addParameters({ component: Text })
  .add("text", () => 
    <BrowserRouter >
      <Text 
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
        porta ligula nibh, nec interdum nunc maximus at."
      />
    </BrowserRouter>)

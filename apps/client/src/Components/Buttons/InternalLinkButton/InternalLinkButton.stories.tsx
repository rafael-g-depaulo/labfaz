import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { InternalLinkButton } from './'

storiesOf("Components/InternalLinkButton", module)
  .addParameters({ component: InternalLinkButton })
  .add("internalLinkButton", () => 
    <BrowserRouter >
      <InternalLinkButton 
        href="/blog" 
        children="Internal Button"
      />
    </BrowserRouter>)

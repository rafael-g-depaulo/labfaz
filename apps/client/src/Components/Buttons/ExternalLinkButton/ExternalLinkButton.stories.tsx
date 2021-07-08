import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { ExternalLinkButton } from './'

storiesOf("Components/ExternalLinkButton", module)
  .addParameters({ component: ExternalLinkButton })
  .add("externalLinkButton", () => 
    <BrowserRouter >
      <ExternalLinkButton 
        href="https://google.com.br" 
        children="External Button"
      />
    </BrowserRouter>)

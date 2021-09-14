import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Web from './'
import { User } from 'Context/CurrentUser'

storiesOf('Components/Profile', module)
  .addParameters({ component: Web })
  .add('web', () => (
    <BrowserRouter>
      <Web personalProfilePage={false} />
    </BrowserRouter>
  ))

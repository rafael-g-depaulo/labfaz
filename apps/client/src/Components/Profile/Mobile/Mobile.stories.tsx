import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Mobile from './'

storiesOf('Components/Profile', module)
  .addParameters({ component: Mobile })
  .add('mobile', () => (
    <BrowserRouter>
      <Mobile PersonalProfilePage={false} />
    </BrowserRouter>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'

import { CurrentUserProvider } from 'Context/CurrentUser'

import { Login } from './'

storiesOf('Components/Login', module)
  .addParameters({ component: Login })
  .add('input', () => (
    <CurrentUserProvider>
      <Login onSubmit={() => {}}/>
    </CurrentUserProvider>
  ))

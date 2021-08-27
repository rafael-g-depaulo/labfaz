import React from 'react'
import { storiesOf } from '@storybook/react'

import { CurrentUserProvider } from 'Context/CurrentUser'

import TestLogin from './'

storiesOf("Components/TestLogin", module)
  .addParameters({ component: TestLogin })
  .add("input", () => (
    <CurrentUserProvider>
      <TestLogin/>
    </CurrentUserProvider>
  ))

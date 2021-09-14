import React from 'react'
import { storiesOf } from '@storybook/react'

import { CurrentUserProvider } from 'Context/LoggedUserToken'

import TestLogin from './'

storiesOf("Components/TestLogin", module)
  .addParameters({ component: TestLogin })
  .add("input", () => (
    <CurrentUserProvider>
      <TestLogin/>
    </CurrentUserProvider>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'

import SignUpPage from './Display'

storiesOf("Pages/SignUp", module)
  .addParameters({ component: SignUpPage })
  .add("show SignUpPage", () => <SignUpPage button_type="button" />)

import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './'

storiesOf("Components/Logo", module)
  .addParameters({ component: Logo })
  .add("logo", () => <Logo />)

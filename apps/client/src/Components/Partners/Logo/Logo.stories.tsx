import React from 'react'
import { storiesOf } from '@storybook/react'

import Logo from './'

storiesOf("Components/Partners", module)
  .addParameters({ component: Logo })
  .add("logo", () => <Logo />)

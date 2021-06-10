import React from 'react'
import { storiesOf } from '@storybook/react'

import Header from '.'

storiesOf("Components/Header", module)
  .addParameters({ component: Header })
  .add("header", () => <Header />)

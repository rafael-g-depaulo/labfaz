import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from './'

storiesOf("Components/Loading", module)
  .addParameters({ component: Loading })
  .add("loading", () => <Loading />)

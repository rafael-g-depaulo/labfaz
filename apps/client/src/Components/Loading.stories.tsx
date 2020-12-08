import React from 'react'
import { storiesOf } from '@storybook/react'

import Loading from './Loading'

storiesOf("Components/Loading", module)
  .addParameters({ component: Loading })
  .add("loading", () => <Loading />)

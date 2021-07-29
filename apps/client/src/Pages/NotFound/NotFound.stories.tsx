import React from 'react'
import { storiesOf } from '@storybook/react'

import NotFound from './'
import Web from './Web'
import Mobile from './Mobile'

storiesOf("Pages/NotFound", module)
  .addParameters({ component: NotFound })
  .add("responsive", () => <NotFound />)
  .add("web", () => <Web />)
  .add("mobile", () => <Mobile />)

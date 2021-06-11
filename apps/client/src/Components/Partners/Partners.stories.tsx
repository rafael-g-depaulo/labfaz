import React from 'react'
import { storiesOf } from '@storybook/react'

import Partners from './'

storiesOf("Components/Partners", module)
  .addParameters({ component: Partners })
  .add("partners", () => <Partners />)

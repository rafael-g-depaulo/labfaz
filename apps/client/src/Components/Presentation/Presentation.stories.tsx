import React from 'react'
import { storiesOf } from '@storybook/react'

import Presentation from './'

storiesOf("Components/Presentation", module)
  .addParameters({ component: Presentation })
  .add("presentation", () => <Presentation />)

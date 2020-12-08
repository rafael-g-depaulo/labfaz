import React from 'react'
import { storiesOf } from '@storybook/react'

import HomePage from './Display'

storiesOf("Pages/Home", module)
  .addParameters({ component: HomePage })
  .add("default", () => <HomePage data={{ msg: "Mocked Test" }}/>)

import React from 'react'
import { storiesOf } from '@storybook/react'

import Banner from './'

storiesOf("Components/Banner", module)
  .addParameters({ component: Banner })
  .add("Banner", () => <Banner />)

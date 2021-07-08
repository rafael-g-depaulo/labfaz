import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Construction from './'

storiesOf("Pages/Construction", module)
  .addParameters({ component: Construction })
  .add("construction", () => <BrowserRouter><Construction /></BrowserRouter>)

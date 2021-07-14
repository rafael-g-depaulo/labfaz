import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import NotFound from './'

storiesOf("Pages/NotFound", module)
  .addParameters({ component: NotFound })
  .add("notFound", () => <BrowserRouter><NotFound /></BrowserRouter>)

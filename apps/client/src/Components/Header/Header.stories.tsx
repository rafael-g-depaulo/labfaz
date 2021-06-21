import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Header from './'

storiesOf("Components/Header", module)
  .addParameters({ component: Header })
  .add("header", () => <BrowserRouter ><Header /></BrowserRouter>)

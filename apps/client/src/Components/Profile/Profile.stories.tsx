import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Profile from './'

storiesOf("Components/Header", module)
  .addParameters({ component: Profile })
  .add("profile", () => <BrowserRouter ><Profile /></BrowserRouter>)

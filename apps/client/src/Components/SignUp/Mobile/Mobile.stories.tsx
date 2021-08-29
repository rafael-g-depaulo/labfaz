import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import {Mobile} from './'

storiesOf("Components/SignUp", module)
  .addParameters({ component: Mobile })
  .add("mobile", () => <BrowserRouter ><Mobile buttonType="button"/></BrowserRouter>)

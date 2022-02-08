import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import Mobile from './'

storiesOf("Components/Header", module)
  .addParameters({ component: Mobile })
  .add("mobile", () => <BrowserRouter ><Mobile /></BrowserRouter>)

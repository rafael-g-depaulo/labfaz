import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Web } from './'

storiesOf("Components/SignUp", module)
  .addParameters({ component: Web })
  .add("web", () => <BrowserRouter ><Web buttonType="button"/></BrowserRouter>)

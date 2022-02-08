import { User } from '@labfaz/entities'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import SignUp from '.'

storiesOf("Components/SignUp", module)
  .addParameters({ component: SignUp })
  .add("SignUp", () => <BrowserRouter ><SignUp button_type="button" token='' data={{} as User}/></BrowserRouter>)

import styled from 'styled-components'
import SignUp from './'
import { Mobile } from './Mobile'
import { Web } from './Web'

const Bg = styled.div`
  background-color: black;
`

export default {
  title: 'Components/SignUp',

  parameters: {
    component: SignUp,
  },
}

export const signUp = () => (
  <Bg>
    <SignUp button_type="button"/>
  </Bg>
)
signUp.story = {
  name: 'SignUp',
}

export const web = () => (
  <Bg>
    <Web buttonType="button"/>
  </Bg>
)
web.story = {
  name: 'web',
}

export const mobile = () => (
  <Bg>
    <Mobile buttonType="button"/>
  </Bg>
)
mobile.story = {
  name: 'mobile',
}

import { Web } from '.'

export default {
  title: 'Components/Web',

  parameters: {
    component: Web,
  },
}

export const web = () => (
  <Web buttonType="button" token=''/>
)

web.story = {
  name: 'web',
}

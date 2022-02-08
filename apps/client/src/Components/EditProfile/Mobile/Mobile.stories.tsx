import { Mobile } from '.'

export default {
  title: 'Components/Mobile',

  parameters: {
    component: Mobile,
  },
}

export const mobile = () => (
  <Mobile buttonType="button" token=''/>
)

mobile.story = {
  name: 'mobile',
}

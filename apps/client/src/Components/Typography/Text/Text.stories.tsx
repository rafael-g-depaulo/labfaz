import { Text } from './'

export default {
  title: 'Components/Text',

  parameters: {
    component: Text,
  },
}

export const text = () => (
  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
  porta ligula nibh, nec interdum nunc maximus at.</Text>
)

text.story = {
  name: 'Text',
}

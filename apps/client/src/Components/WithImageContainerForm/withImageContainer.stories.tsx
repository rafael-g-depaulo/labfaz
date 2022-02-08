import WithImageContainerForm from './index'
import RecoverForm from 'Components/PasswordRecover';

import { mockImage } from '@labfaz/strapi-utils'

const image = mockImage({
  url: "https://images.fineartamerica.com/images-medium-large/reflections-of-longs-peak-vertical-image-james-bo-insogna.jpg",
  alternativeText: "string",
  caption: "string",
  width: 640,
  height: 640,
  ext: "png"
})

export default {
  title: 'Components/FormContainer',

  parameters: {
    component: WithImageContainerForm,
  },
}

export const list = () => (
  <WithImageContainerForm title="test" image={image}> 
    <RecoverForm />
  </WithImageContainerForm>
)

list.story = {
  name: 'list posts',
}

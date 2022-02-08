import { storiesOf } from "@storybook/react";

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

storiesOf("Components/FormContainer", module)
  .addParameters({ component: "FormContaier" })
  .add("list posts", () => (
    <WithImageContainerForm title="test" image={image}> 
      <RecoverForm />
    </WithImageContainerForm>
    ));

import React from 'react'
import { storiesOf } from "@storybook/react";

import WithImageContainerForm from './index'
import RecoverForm from 'Components/PasswordRecover';

import { mockImage } from 'Utils/Image'

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
    <WithImageContainerForm image={image}> 
      <RecoverForm />
    </WithImageContainerForm>
    ));

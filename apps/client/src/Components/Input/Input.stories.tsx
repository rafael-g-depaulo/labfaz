import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Input } from './'

storiesOf("Components/Input", module)
  .addParameters({ component: Input })
  .add("input", () => 
    <BrowserRouter >
      <Input 
        label="CEP"
        name="CEP"
        placeholder="Digite seu cep"
        htmlFor="CEP"
      />
    </BrowserRouter>)

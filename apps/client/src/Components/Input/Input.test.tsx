import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Render from 'Utils/render'
import { Input } from './'

it('renders Text component', () => {
  expect(() => Render(
    <BrowserRouter>
      <Input 
        label="teste"
        name="teste"
        placeholder="algum teste"
        htmlFor="teste"
      />
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Text', () => {
  const { getByPlaceholderText } = Render(
    <BrowserRouter>
      <Input 
        label="CEP"
        name="CEP"
        placeholder="Digite seu cep"
        htmlFor="CEP"
      />
    </BrowserRouter>
  );

  it('check render of placeholder property', () => {
    const placeholder = getByPlaceholderText('Digite seu cep')
    expect(placeholder).toHaveProperty('placeholder')
  })
})

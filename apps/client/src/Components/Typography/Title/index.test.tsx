import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Render from 'Utils/render'
import { Title } from './'

it('renders Title component', () => {
  expect(() => Render(
    <BrowserRouter>
      <Title 
        titleColor="black"
        children="Some Title"
      />
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Title', () => {
  const { getByText } = Render(
    <BrowserRouter>
      <Title 
        titleColor="black"
        children="Some Title"
      />
    </BrowserRouter>
  );

  it('check render of Title', () => {
    const text = getByText("Some Title")
    expect(text).toHaveTextContent("Title")
  })
})

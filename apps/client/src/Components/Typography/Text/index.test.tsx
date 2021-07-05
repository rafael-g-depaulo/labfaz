import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Render from 'Utils/render'
import { Text } from './'

it('renders Text component', () => {
  expect(() => Render(
    <BrowserRouter>
      <Text 
        textColor="black"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
      />
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Text', () => {
  const { getByText } = Render(
    <BrowserRouter>
      <Text 
        textColor="black"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
      />
    </BrowserRouter>
  );

  it('check render of text', () => {
    const text = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.')
    expect(text).toHaveTextContent('dolor')
  })
})

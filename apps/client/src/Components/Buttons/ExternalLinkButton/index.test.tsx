import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Render from 'Utils/render'
import { ExternalLinkButton } from './'

it('renders external link button component', () => {
  expect(() => Render(
    <BrowserRouter>
      <ExternalLinkButton 
        href="https://google.com.br" 
        buttonColor="primary"
        children="External Button"
      />
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <BrowserRouter>
      <ExternalLinkButton 
        href="https://google.com.br" 
        buttonColor="primary"
        children="External Button"
      />
    </BrowserRouter>
  );

  it('check render of button content', () => {
    expect(getByText('External Button')).toHaveTextContent('External Button')
  })

  it('check link of external site', () => {
    expect(getByText('External Button').closest('a')).toHaveAttribute('href', 'https://google.com.br')
  })
})

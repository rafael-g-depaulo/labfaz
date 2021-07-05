import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Render from 'Utils/render'
import { InternalLinkButton } from './'

it('renders internal link button component', () => {
  expect(() => Render(
    <BrowserRouter>
      <InternalLinkButton 
        href="/blog" 
        buttonColor="primary"
        children="Internal Button"
      />
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Button component', () => {
  const { getByText } = Render(
    <BrowserRouter>
      <InternalLinkButton 
        href="/blog" 
        buttonColor="primary"
        children="Internal Button"
      />
    </BrowserRouter>
  );

  it('check render of button content', () => {
    expect(getByText('Internal Button')).toHaveTextContent('Internal Button')
  })

  it('check link of internal site', () => {
    expect(getByText('Internal Button').closest('a')).toHaveAttribute('href', '/blog')
  })
})

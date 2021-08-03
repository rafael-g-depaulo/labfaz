import React from 'react'

import render from 'Utils/render'
import Footer from '.'

it('renders footer component', () => {
  expect(() => render(<Footer />)).not.toThrow()
})

it('check text of footer', () => {
  const { getByText } = render(<Footer />);
  expect(getByText('Saberes', { exact: false })).toHaveTextContent('Economia')
})

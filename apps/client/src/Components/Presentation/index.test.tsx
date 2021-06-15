import React from 'react'

import render from 'Utils/render'
import Presentation from './'

it("renders Presentation component", () => {
  expect(() => render(<Presentation />)).not.toThrow()
})

describe('check content of Presentation Component', () => {
  const { getByText} = render(<Presentation />)
  it('check component block text', () => {
    expect(getByText('Lorem ipsum')).toHaveTextContent("Lorem ipsum")
    expect(getByText('Aenean commodo', { exact: false })).toHaveTextContent("Lorem ipsum")
  })
})

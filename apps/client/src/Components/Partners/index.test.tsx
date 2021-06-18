import React from 'react'
import render from "Utils/render"

import Partners from 'Components/Partners'

it("renders Partners component", () => {
  expect(() => render(<Partners />)).not.toThrow()
})

describe('Check content of Partners component', () => {
  const { getByText, getAllByRole } = render(<Partners />);
  it('check render of title', () => {
    expect(getByText('APOIO')).toHaveTextContent('APOIO')
  })
  it('check banner of partners', () => {
    const array = getAllByRole('img')
    array.forEach((img) => {
      expect(img).toHaveAttribute('alt', 'logo')
    })
  })
})

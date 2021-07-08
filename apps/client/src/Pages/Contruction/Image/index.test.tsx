import React from 'react'
import render from "Utils/render"

import Image from './'

it("renders Image component", () => {
  expect(() => render(<Image />)).not.toThrow()
})

it("check if renders tag img", () => {
  const { getByRole } = render(<Image />)
  expect(getByRole('img')).toHaveAttribute('alt', 'construction')
})

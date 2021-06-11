import React from 'react'
import render from "Utils/render"

import Logo from './'

it("renders Partners component", () => {
  expect(() => render(<Logo />)).not.toThrow()
})

it("check if renders tag img", () => {
  const { getByRole } = render(<Logo />)
  expect(getByRole('img')).toHaveAttribute('alt', 'logo')
})

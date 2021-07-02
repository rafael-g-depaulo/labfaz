import React from 'react'
import render from "Utils/render"

import Logo from './'

it("renders Logo component", () => {
  expect(() => render(<Logo />)).not.toThrow()
})

it("check if renders tag img", () => {
  const { getByRole } = render(<Logo />)
  expect(getByRole('heading', { level: 1})).toHaveTextContent('LABFAZ')
})

import React from 'react'
import render from "Utils/render"

import Loading from './'

it("renders Loading component", () => {
  expect(() => render(<Loading />)).not.toThrow()
})

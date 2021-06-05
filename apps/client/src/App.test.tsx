import { add } from "@labfaz/adder"

import React from 'react'
import render from 'Utils/render'

import App from 'App'

it('renders without exploding', () => {
  expect(() => render(<App />)).not.toThrow()
})

it('can use a local library in tests', () => {
  expect(add(2, 1)).toBe(3)
})

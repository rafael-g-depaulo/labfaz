import React from 'react'
import render from 'Utils/render'

import App from 'App'

test('renders without exploding', () => {
  expect(() => render(<App />)).not.toThrow()
})

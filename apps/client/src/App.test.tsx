import { add } from "@labfaz/adder"

import React from 'react'
import render from 'Utils/render'

import ReactGA from 'react-ga'

import App from 'App'

ReactGA.initialize('foo', { testMode: true })

it('renders without exploding', () => {
  expect(() => render(<App />)).not.toThrow()
})

it('can use a local library in tests', () => {
  expect(add(2, 1)).toBe(3)
})


// it('can send analytics data', () => {
//   const app = render(<App />)
//   ReactGA.ga('send', 'pageview', '/app')

//   expect(ReactGA.testModeAPI.calls).toEqual([
//     ['create','foo', 'auto'],
//     ['send','pageview', '/app']
//   ])
// })

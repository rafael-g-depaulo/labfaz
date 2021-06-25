import React from 'react'

import render from 'Utils/render'
import Presentation from './'
import Display from "./Display"

it("renders Presentation component", () => {
  expect(() => render(<Presentation />)).not.toThrow()
})

describe('check content of Presentation Component', () => {
  const { getByText} = render(
    <Display
      Title="LABFAZ"
      SubTitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      Video="https://www.youtube.com/watch?v=5qap5aO4i9A"
    />
  )
  // afterEach(() => spy.mockRestore());
  it('check component block text', () => {
    expect(getByText('LABFAZ')).toHaveTextContent("LABFAZ")
    expect(getByText('Aenean commodo', { exact: false })).toHaveTextContent("Lorem ipsum")
  })
})

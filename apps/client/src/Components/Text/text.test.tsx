import React from 'react'
import render from 'Utils/render'

import Text from "Components/Text"

describe('Text component', () => {
  it("Should render component with some text", () => {
    const component = render(<Text>
      Simple text for test 
    </Text>)
  const componentText = component.getByText("Simple text for test")

  expect(componentText).toHaveTextContent("Simple text for test")
})

  it("Should render text with medium font size",  () => {
    const component = render(<Text fontSize="medium">
      Simple text for test 
    </Text>)

    const componentText = component.getByText("Simple text for test")

    expect(componentText).toHaveStyle('font-size: var(--font-size-medium)')

  })

  it("Should render text with large font size",  () => {
    const component = render(<Text fontSize="large">
      Simple text for test 
    </Text>)

    const componentText = component.getByText("Simple text for test")

    expect(componentText).toHaveStyle('font-size: var(--font-size-large)')

  })

  it("Should render text with title font size",  () => {
    const component = render(<Text fontSize="title">
      Simple text for test 
    </Text>)

    const componentText = component.getByText("Simple text for test")

    expect(componentText).toHaveStyle('font-size: var(--font-size-title)')

  })


  it("Should render text with right alignment",  () => {
    const component = render(<Text textAlign="right">
      Simple text for test 
    </Text>)

    const componentText = component.getByText("Simple text for test")

    expect(componentText).toHaveStyle('text-align: right')
  })


  it("Should render text with center alignment",  () => {
    const component = render(<Text textAlign="center">
      Simple text for test 
    </Text>)

    const componentText = component.getByText("Simple text for test")

    expect(componentText).toHaveStyle('text-align: center')
  })
})

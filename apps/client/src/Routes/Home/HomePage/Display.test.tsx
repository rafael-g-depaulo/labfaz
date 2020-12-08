import React from 'react'
import render from "Utils/render"

import HomePageDisplay from "./Display"
import { HelloExample } from 'Api/HelloApiExample'

describe("Home Page", () => {
  it("renders without exploding", () => {
    const mockedData: HelloExample = {
      msg: ""
    }
    expect(() => render(<HomePageDisplay data={mockedData} />)).not.toThrow()
  })

  it("displays the data message", () => {
    const mockedData: HelloExample = {
      msg: "mocked data test"
    }
    const { getByText } = render(<HomePageDisplay data={mockedData} />)

    // expect retrieved data to be displayed
    getByText(/"msg": "mocked data test"/)
  })
})

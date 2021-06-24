import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import render from "Utils/render"
import Display from "./Display"
import { AboutUsData } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'

describe("Home Page", () => {
  const image = mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/large_usememo_ecb62c6bf7.png",
    alternativeText: "string",
    caption: "string",
    width: 20,
    height: 20,
    ext: "png"

  })

  const mockedData: AboutUsData = {
    banner_data: "Quem Somos",
    welcome_data: {
      id: 1,
      img: image,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    about_us_data: [{
      id: 2,
      img: image,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    },
    {
      id: 2,
      img: image,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    }]
  }
  
  it("renders without exploding", () => {

    expect(() => render(<BrowserRouter><Display data={mockedData} /></BrowserRouter>)).not.toThrow()
  })

  it("displays the data message", () => {
    const { getByRole } = render(<BrowserRouter><Display data={mockedData} /></BrowserRouter>)

    expect(getByRole("heading", {level: 1})).toHaveTextContent("Quem Somos")
    expect(getByRole("heading", {level: 2})).toHaveTextContent("Lorem")
  })
})

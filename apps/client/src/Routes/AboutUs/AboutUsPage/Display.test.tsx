import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import render from "Utils/render"
import Display from "./Display"
import { AboutUsData } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'



describe("Home Page", () => {

  const image = mockImage({
    url:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
    alternativeText: "Some text as alternative",
    caption: "Image description",
    ext:"jpg"
  })

  const mockedData: AboutUsData = {
    banner_data: "Welcome to Labfaz",
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
      id: 3,
      img: image,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

    }]
  }
  
  it("renders without exploding", () => {

    expect(() => render(<BrowserRouter><Display data={mockedData} /></BrowserRouter>)).not.toThrow()
  })
  
  it("Renders banner component", () => {
    const Page = render(<BrowserRouter><Display data={mockedData} /></BrowserRouter>)
    const banner = Page.getAllByRole('heading')


    expect( banner[1] ).toHaveTextContent("Welcome to Labfaz")
  })

  it("displays the data message", () => {
    const { getByRole } = render(<BrowserRouter><Display data={mockedData} /></BrowserRouter>)

    expect(getByRole("heading", {level: 1})).toHaveTextContent("Quem somos")
    expect(getByRole("heading", {level: 2})).toHaveTextContent("Welcome to Labfaz")
  })
})

import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import render from "Utils/render"
import Display from "./Display"
import { AboutUsData, StaffData, StaffObject } from 'Api/AboutUs'
import { mockImage } from 'Utils/Image'



describe("About us page", () => {

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

  
  const StaffInfo: StaffObject = {
    id: 54,
    name: "Jhon Doe",
    tag: "Coordenação",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ",
    image: image
  }

  const mockedStaffData: StaffData = {
    staff: Array.from({ length: 40 }, (_, i) => ({ ...StaffInfo, id: i }))
  }

  it("renders without exploding", () => {

    expect(() => render(<BrowserRouter><Display about_data={mockedData} staff={mockedStaffData} /></BrowserRouter>)).not.toThrow()
  })
  
  it("Renders banner component", () => {
    const Page = render(<BrowserRouter><Display about_data={mockedData} staff={mockedStaffData} /></BrowserRouter>)
    const banner = Page.getAllByRole('heading')

    expect( banner[1] ).toHaveTextContent("Welcome to Labfaz")
  })

  it("displays the data message", () => {
    const { getAllByRole } = render(<BrowserRouter><Display about_data={mockedData} staff={mockedStaffData} /></BrowserRouter>)

    expect(getAllByRole("heading", {level: 1})[0]).toHaveTextContent("Quem somos")
    expect(getAllByRole("heading", {level: 2})[0]).toHaveTextContent("Welcome to Labfaz")
  })
})

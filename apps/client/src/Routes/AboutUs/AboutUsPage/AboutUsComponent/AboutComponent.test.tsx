import React from 'react'
import render from 'Utils/render'

import About from "."
import { AboutUsData } from "Api/AboutUs"

const data = {
  banner_data: 'Welcome to Labfaz',
  welcome_data: {
    id: 2,
    img: {
      name: "Some img",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1"
    },
    text: "A very nice text to use as a test text"
  },
  about_us_data: [{
    id: 1,
    img: {
      name: "Some img",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1"
    },
    text: "A very nice text to use as a test text"
  }]

}

describe('About us component', () => {
  const mockedData: AboutUsData = data
  
  
  it("render component whiout errors", () => {
    
    expect(() => render (<About data={mockedData.about_us_data} />))
    .not.toThrow()
  })
  
  it("should render every component and its text", () => {
    const { getByText } = render(<About data={mockedData.about_us_data} /> )
    data.about_us_data.forEach((data) => {
      const Component = getByText(data.text)
      expect(Component).toHaveTextContent("A very nice text to use as a test text")
    })
  })

  it("Should render Images",  () => {
    const { getByRole } = render(<About data={mockedData.about_us_data} />)
    data.about_us_data.forEach(data => {
      const component = getByRole("img")
      expect(component).toBeVisible()
    })
  })

  it("Should render image with alt", () => {
    const { getByRole } = render(<About data={mockedData.about_us_data} />)
    const imageComponent = getByRole("img")

    expect(imageComponent).toHaveAttribute("alt", "Some img")
  })

})

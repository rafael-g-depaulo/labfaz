import React from 'react'
import render from 'Utils/render'

import Banner from "."
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
    text: "Look at this dude"
  },
  about_us_data: [{
    id: 1,
    img: {
      name: "Some img",
      url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1",
      img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsegredosdomundo.r7.com%2Fwp-content%2Fuploads%2F2019%2F10%2Fornitorrinco-principais-caracteristicas-10-curiosidades-4.jpg&f=1&nofb=1"
    },
    text: "Look at these dudes"
  }]

}

describe('Banner component', () => {
  const mockedData: AboutUsData = data
  it("render component whiout errors", () => {
    expect(() => render (<Banner subtitle={mockedData.banner_data} />))
  })

  it("Should render component with static text", () => {
    const banner = render(<Banner subtitle={mockedData.banner_data}  />).getByRole("heading")
    
    expect(banner).toHaveTextContent('Quem somos')
  })
})

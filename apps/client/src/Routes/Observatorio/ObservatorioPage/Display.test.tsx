import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import render from "Utils/render"
import ObservatorioPageDisplay from "./Display"
import { ObservatorioBannerInfo } from 'Api/ObservatorioBannerInfo'

describe("Observatorio Page", () => {
  it("renders without exploding", () => {
    const mockedData: ObservatorioBannerInfo = {
      title: "Observatorio",
      subtitle: "LoremIpsum",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Observatorio Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg"
      }
    }
    expect(() => render(<BrowserRouter><ObservatorioPageDisplay data={mockedData} posts={[]}/></BrowserRouter>)).not.toThrow()
  })

  it("displays the data message", () => {
    const mockedData: ObservatorioBannerInfo = {
      title: "Observatorio",
      subtitle: "LoremIpsum",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Observatorio Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg"
      }
    }
    const { getByRole } = render(<BrowserRouter><ObservatorioPageDisplay data={mockedData} posts={[]}/></BrowserRouter>)

    expect(getByRole("heading", {level: 1})).toHaveTextContent("Observatorio")
    expect(getByRole("heading", {level: 2})).toHaveTextContent("LoremIpsum")
  })
})

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import render from "Utils/render"
import BlogPageDisplay from "./Display"
import { BlogBannerInfo } from 'Api/BlogBannerInfo'

describe("Blog Page", () => {
  it("renders without exploding", () => {
    const mockedData: BlogBannerInfo = {
      title: "Blog",
      subtitle: "LoremIpsum",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Blog Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg"
      }
    }
    expect(() => render(<BrowserRouter><BlogPageDisplay data={mockedData} posts={[]}/></BrowserRouter>)).not.toThrow()
  })

  it("displays the data message", () => {
    const mockedData: BlogBannerInfo = {
      title: "Blog",
      subtitle: "LoremIpsum",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Blog Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg"
      }
    }
    const { getByRole } = render(<BrowserRouter><BlogPageDisplay data={mockedData} posts={[]}/></BrowserRouter>)

    expect(getByRole("heading", {level: 1})).toHaveTextContent("Blog")
    expect(getByRole("heading", {level: 2})).toHaveTextContent("LoremIpsum")
  })
})

import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import render from "Utils/render"
import AboutUsPageDisplay from "./Display"
import { AboutUsBannerInfo } from 'Api/AboutUsBannerInfo'

describe("Home Page", () => {
  it("renders without exploding", () => {
    const mockedData: AboutUsBannerInfo = {
      title: "Quem Somos",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/large_usememo_ecb62c6bf7.png",
        alternativeText: "string",
        caption: "string",
        width: 20,
        height: 20,
        ext: "png"
      }
    }
    expect(() => render(<BrowserRouter><AboutUsPageDisplay data={mockedData} /></BrowserRouter>)).not.toThrow()
  })

  it("displays the data message", () => {
    const mockedData: AboutUsBannerInfo = {
      title: "Quem Somos",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: {
        url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/large_usememo_ecb62c6bf7.png",
        alternativeText: "string",
        caption: "string",
        width: 20,
        height: 20,
        ext: "png"
      }
    }
    const { getByRole } = render(<BrowserRouter><AboutUsPageDisplay data={mockedData} /></BrowserRouter>)

    expect(getByRole("heading", {level: 1})).toHaveTextContent("Quem Somos")
    expect(getByRole("heading", {level: 2})).toHaveTextContent("Lorem")
  })
})

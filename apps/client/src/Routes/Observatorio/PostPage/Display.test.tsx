import React from "react";
import { BrowserRouter } from "react-router-dom";

import render from "Utils/render";
import ObservatorioPageDisplay from "./Display";
import { ObservatorioBannerInfo } from "Api/ObservatorioBannerInfo";
import { ObservatorioPost } from "Api/ObservatorioPost";
import { mockImage } from "Utils/Image";

const mockPost = (content: string): ObservatorioPost => ({
  title: "astgfsdhgdsfgsd",
  content,
  description: "",
  id: 213,
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Observatorio Banner Image",
  }),
  created_at: "2021-07-01T00:27:01.317Z",
})

describe("Post page", () => {
  it("renders without exploding", () => {
    const mockedData: ObservatorioBannerInfo = {
      title: "Observatorio",
      subtitle: "LoremIpsum",
      image: {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Observatorio Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg",
      },
    };
    expect(() =>
      render(
        <BrowserRouter>
          <ObservatorioPageDisplay data={mockedData} post={mockPost("")} />
        </BrowserRouter>
      )
    ).not.toThrow();
  });

  it("displays the data message", () => {
    const mockedData: ObservatorioBannerInfo = {
      title: "Observatorio",
      subtitle: "LoremIpsum",
      image: {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Observatorio Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg",
      },
    };

    const { getAllByRole } = render(
      <BrowserRouter>
        <ObservatorioPageDisplay data={mockedData} post={mockPost("")} />
      </BrowserRouter>
    );

    expect(getAllByRole("heading", { level: 1 })[0]).toHaveTextContent("Observatorio");
    expect(getAllByRole("heading", { level: 2 })[0]).toHaveTextContent("LoremIpsum");
  });
});

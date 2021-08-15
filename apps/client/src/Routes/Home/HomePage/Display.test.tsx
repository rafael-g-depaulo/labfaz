import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";

import HomePageDisplay from "./Display";
import { HomepageBannerInfo } from "Api/HomepageBannerInfo";

const mockedData: HomepageBannerInfo = {
  title: "LABFAZ",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.",
  image: {
    url:
      "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Homepage Banner Image",
    caption: "string",
    width: 20,
    height: 20,
    ext: "jpeg",
  },
};

describe("Home Page", () => {
  it("renders without exploding", () => {
    expect(() =>
      render(
        <BrowserRouter>
          <HomePageDisplay data={mockedData} />{" "}
        </BrowserRouter>
      )
    ).not.toThrow();
  });

  it("displays the data message", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <HomePageDisplay data={mockedData} />
      </BrowserRouter>
    );

    // expect retrieved data to be displayed
    expect(getByRole("heading", { level: 1 })).toHaveTextContent("LABFAZ");
    expect(getByRole("heading", { level: 2 })).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
    );
  });
});

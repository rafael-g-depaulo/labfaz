import React from "react";
import { BrowserRouter } from "react-router-dom";

import render from "Utils/render";
import BlogPageDisplay from "./Display";
import { BlogBannerInfo } from "Api/BlogBannerInfo";
import { BlogPost } from "Api/BlogPost";
import { mockImage } from "Utils/Image";

const mockPost = (content: string): BlogPost => ({
  title: "astgfsdhgdsfgsd",
  content,
  description: "",
  id: 213,
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
  }),
  created_at: "2021-07-01T00:27:01.317Z",
})

describe("Post page", () => {
  it("renders without exploding", () => {
    const mockedData: BlogBannerInfo = {
      title: "Blog",
      subtitle: "LoremIpsum",
      image: {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Blog Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg",
      },
    };
    expect(() =>
      render(
        <BrowserRouter>
          <BlogPageDisplay data={mockedData} post={mockPost("")} />
        </BrowserRouter>
      )
    ).not.toThrow();
  });

  it("displays the data message", () => {
    const mockedData: BlogBannerInfo = {
      title: "Blog",
      subtitle: "LoremIpsum",
      image: {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
        alternativeText: "Blog Banner Image",
        caption: "string",
        width: 20,
        height: 20,
        ext: "jpeg",
      },
    };

    const { getAllByRole } = render(
      <BrowserRouter>
        <BlogPageDisplay data={mockedData} post={mockPost("")} />
      </BrowserRouter>
    );

    expect(getAllByRole("heading", { level: 1 })[0]).toHaveTextContent("Blog");
    expect(getAllByRole("heading", { level: 2 })[0]).toHaveTextContent("LoremIpsum");
  });
});

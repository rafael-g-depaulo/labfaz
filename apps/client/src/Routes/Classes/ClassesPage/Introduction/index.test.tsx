import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";

import Introduction from ".";

import { CoursesPageIntroduction } from "Api/CoursesPageIntroduction";

const introExample: CoursesPageIntroduction = {
  title: "Lorem & Ipsum",
  description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
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

it("renders Introduction", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Introduction data={introExample} />
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check content of Introduction", () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <Introduction data={introExample} />
    </BrowserRouter>
  );

  it("checks if title rendered", () => {
    const title = getByText("Lorem & Ipsum");
    expect(title).toHaveTextContent("Lorem & Ipsum");
  });

  it("checks if description rendered", () => {
    const description = getByText(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    );
    expect(description).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    );
  });

  it("checks if image rendered", () => {
    const img = getByRole("img");
    expect(img).toBeInTheDocument;
  });
});

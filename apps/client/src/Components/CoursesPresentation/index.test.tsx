import React from "react";
import render from "Utils/render";

import CoursesPresentation from ".";

it("renders CoursesPresentation component", () => {
  expect(() => render(<CoursesPresentation />)).not.toThrow();
});

describe("Check content of CoursesPresentation component", () => {
  const { getByText } = render(<CoursesPresentation />);

  it("checks if title rendered", () => {
    const title = getByText("Lorem Ipsum");
    expect(title).toHaveTextContent("Lorem Ipsum");
  });
});

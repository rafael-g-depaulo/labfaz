import React from "react";
import { BrowserRouter } from "react-router-dom";

import render from "Utils/render";
import Mobile from ".";

const exampleStatus: number = 500;
const exampleMessage: string = "Internal server error";

it("renders mobile error component", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Mobile status={exampleStatus} message={exampleMessage} />
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check if content of error page", () => {
  const { getByText, getAllByRole } = render(
    <BrowserRouter>
      <Mobile status={exampleStatus} message={exampleMessage} />
    </BrowserRouter>
  );

  it("renders error image", () => {
    const images = getAllByRole("img");
    expect(images[1]).toHaveAttribute("alt", "error");
  });

  it("renders generic text", () => {
    const genericText = getByText("Ops...Parece que algo deu errado");
    expect(genericText).toHaveTextContent("Ops...Parece que algo deu errado");
  });
});

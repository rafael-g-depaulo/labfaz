import React from "react";
import render from "Utils/render";

import Partners from "Components/Partners";
import Display from "./Display";

const mockedData = [
  {
    name: "Partner1",
    logo: [
      {
        url: "",
      },
    ],
  },
  {
    name: "Partner2",
    logo: [
      {
        url: "",
      },
    ],
  },
];

it("renders Partners component", () => {
  expect(() => render(<Partners partners={mockedData} />)).not.toThrow();
});

describe("Check content of Partners component", () => {
  const { getByText, getAllByRole } = render(<Display data={mockedData} />);
  it("check render of title", () => {
    expect(getByText("APOIO")).toHaveTextContent("APOIO");
  });
  it("check banner of partners", () => {
    const array = getAllByRole("img");
    array.forEach((img) => {
      expect(img).toHaveAttribute("alt", expect.stringContaining("Partner"));
    });
  });
});

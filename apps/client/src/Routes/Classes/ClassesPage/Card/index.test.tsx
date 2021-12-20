import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";

import Card, { CardProps } from ".";

const cardExample: CardProps = {
  id: "123abc",
  name: "IX Workshop de Iluminacao",
  tag: "audiovisual",
  short_description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  available: true,
  banner:
    "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  has_subscription: true,
  about: "safdsfsdf",
  class_dates: ["12/07/2021"],
  detail: ["asdadasfdd"],
  fonte: ['SFSfsdfdfg'],
  link: 'https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  requirements: "sadasd",
  tags: ["sfsdf"],
  teacher: ["sdffsdf"],
  type: "curso",
  subscription_finish_date: "2021-12-05",
  subscription_start_date: "2021-12-01",
};

it("renders Card component", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Card {...cardExample}/>
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check content of Card component", () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <Card {...cardExample} />
    </BrowserRouter>
  );

  it("checks if name rendered", () => {
    const name = getByText("IX Workshop de Iluminacao");
    expect(name).toHaveTextContent("IX Workshop de Iluminacao");
  });

  it("checks if description rendered", () => {
    const description = getByText(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    );
    expect(description).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
    );
  });

  it("checks if date rendered", () => {
    const date = getByText("07/12/2021");
    expect(date).toHaveTextContent("07/12/2021");
  });

  it("checks if label rendered", () => {
    const label = getByText("audiovisual");
    expect(label).toHaveTextContent("audiovisual");
  });

  it("checks if image rendered", () => {
    const img = getByRole("img");
    expect(img).toBeInTheDocument;
  });
});

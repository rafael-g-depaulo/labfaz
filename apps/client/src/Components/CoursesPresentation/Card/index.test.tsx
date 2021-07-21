import React from "react";
import render from "Utils/render";
import { BrowserRouter } from "react-router-dom";

import Card from ".";

const cardExample = [
  {
    title: "Teste",
    subtitle: "iluminação",
    description: "Descrição aqui",
    finish_date: "2020-08-05",
    banner_image: {
      url: "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      alternativeText: "imagem aleatória",
      caption: "",
      width: 0,
      height: 0,
      ext: "jpeg",
    },
    finished: true,
  },
];

it("renders Card component", () => {
  expect(() =>
    render(
      <BrowserRouter>
        <Card courses={cardExample} isMobile={true} />
      </BrowserRouter>
    )
  ).not.toThrow();
});

describe("Check content of Card component", () => {
  const { getByText, getByRole } = render(
    <BrowserRouter>
      <Card courses={cardExample} isMobile={true} />
    </BrowserRouter>
  );

  it("checks if title rendered", () => {
    const title = getByText("Teste");
    expect(title).toHaveTextContent("Teste");
  });

  it("checks if subtitle rendered", () => {
    const subtitle = getByText("iluminação");
    expect(subtitle).toHaveTextContent("iluminação");
  });

  it("checks if date rendered", () => {
    const date = getByText("05/08/2020");
    expect(date).toHaveTextContent("05/08/2020");
  });

  it("checks if description rendered", () => {
    const description = getByText("Descrição aqui");
    expect(description).toHaveTextContent("Descrição aqui");
  });

  it("checks if image rendered", () => {
    const img = getByRole("img");
    expect(img).toHaveAttribute("alt", "imagem aleatória");
  });
});

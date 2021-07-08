import React from "react";
import render from "Utils/render";

import Card from ".";

const cardExample = [
  {
    title: "Teste",
    subtitle: "iluminação",
    description: "Descrição aqui",
    finish_date: "2020-08-05",
    banner_image: {
      url: "https://www.pexels.com/pt-br/foto/aniversario-dia-do-nascimento-floracao-florescencia-8285483/",
      name: "imagem aleatória",
    },
    finished: true,
  },
];

it("renders Card component", () => {
  expect(() =>
    render(<Card courses={cardExample} isMobile={true} />)
  ).not.toThrow();
});

describe("Check content of Card component", () => {
  const { getByText, getByRole } = render(
    <Card courses={cardExample} isMobile={true} />
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

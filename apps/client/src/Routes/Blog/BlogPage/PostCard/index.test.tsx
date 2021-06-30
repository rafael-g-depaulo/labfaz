import React from "react";
import render from "Utils/render";

import PostCard from ".";

const postCardExample = {
  title: "Teste de blog post",
  description: "Isso é um teste",
  created_at: "2021-06-29T23:50:54.596Z",
  image: {
    url: "https://www.pexels.com/pt-br/foto/aniversario-dia-do-nascimento-floracao-florescencia-8285483/",
    name: "imagem aleatória",
  },
};

it("renders blog post component", () => {
  expect(() => render(<PostCard post={postCardExample} />)).not.toThrow();
});

describe("Check content of PostCard component", () => {
  const { getByText, getByRole } = render(<PostCard post={postCardExample} />);

  it("checks if title rendered", () => {
    const title = getByText("Teste de blog post");
    expect(title).toHaveTextContent("Teste de blog post");
  });

  it("checks if date rendered", () => {
    const date = getByText("Hoje");
    expect(date).toHaveTextContent("Hoje");
  });

  it("checks if description rendered", () => {
    const description = getByText("Isso é um teste");
    expect(description).toHaveTextContent("Isso é um teste");
  });

  it("checks if image rendered", () => {
    const img = getByRole("img");
    expect(img).toHaveAttribute("alt", "imagem aleatória");
  });
});

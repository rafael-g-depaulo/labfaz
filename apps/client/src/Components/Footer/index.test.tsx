import React from 'react'
import render from "Utils/render"

import Footer from 'Components/Footer'

it("renders Footer component", () => {
  expect(() => render(<Footer />)).not.toThrow()
})

describe('Checks content of Footer component', () => {
  const { getByText } = render(<Footer />);

  it('checks if logo rendered', () => {
    const logo = getByText('Nossas redes e midias')
    expect(logo).toHaveTextContent('Nossas redes e midias')
  })
  it('checks if navigation rendered', () => {
    const logo = getByText('Nossas redes e midias')
    expect(logo).toHaveTextContent('Nossas redes e midias')
  })
  it('checks if newsletter rendered', () => {
    const logo = getByText('Receba novidades e lancamentos')
    expect(logo).toHaveTextContent('Receba novidades e lancamentos')
  })
  it('checks if contact rendered', () => {
    const logo = getByText('Fale com a gente')
    expect(logo).toHaveTextContent('Fale com a gente')
  })


})

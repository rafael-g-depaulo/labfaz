import React from 'react'
import render from "Utils/render"

import Contact from './'

const mockedData = {
  phone: 912345678,
  email: "contato@labfaz.com.br"
}

it("renders Contact subcomponent", () => {
  expect(() => render(<Contact phone={mockedData.phone} email={mockedData.email} />)).not.toThrow()
})

describe('Checks content of Contact component', () => {
  const { getByText } = render(<Contact phone={mockedData.phone} email={mockedData.email} />);

  it('checks if text rendered', () => {
    expect(getByText('Fale com a gente')).toHaveTextContent('a gente')
  })

  it('checks if email rendered', () => {
    expect(getByText('contato@labfaz.com.br')).toHaveTextContent('labfaz')
  })
})

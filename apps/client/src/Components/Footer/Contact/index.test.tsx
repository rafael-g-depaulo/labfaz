import React from 'react'
import render from "Utils/render"

import Contact from './'

const mockedData = {
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
  googlePlus: "https://www.google.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  ddd: 61,
  phone: 912345678,
  email: "contato@labfaz.com.br"
}

it("renders Contact subcomponent", () => {
  expect(() => render(<Contact data={mockedData} />)).not.toThrow()
})

describe('Checks content of Contact component', () => {
  const { getByText } = render(<Contact data={mockedData}/>);

  it('checks if text rendered', () => {
    expect(getByText('Fale com a gente')).toHaveTextContent('a gente')
  })

  it('checks if email rendered', () => {
    expect(getByText('contato@labfaz.com.br')).toHaveTextContent('labfaz')
  })
})

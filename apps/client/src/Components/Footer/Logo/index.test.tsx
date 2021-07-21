import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import render from 'Utils/render'
import LogoFooter from './'

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

it('renders footer logo subcomponent', () => {
  expect(() => render(
    <BrowserRouter>
      <LogoFooter data={mockedData}/>
    </BrowserRouter>
  )).not.toThrow()
})

describe('Checks content Logo redered', () => {
  const { getByTestId, getByText } = render(
    <BrowserRouter>
      <LogoFooter data={mockedData}/>
    </BrowserRouter>
  );
  it('checks link to facebook', () => {
    expect(getByTestId('facebook')).toHaveAttribute('href', 'https://www.facebook.com')
  })

  it('checks link to twitter', () => {
    expect(getByTestId('twitter')).toHaveAttribute('href', 'https://www.twitter.com')
  })

  it('checks link to instagram', () => {
    expect(getByTestId('instagram')).toHaveAttribute('href', 'https://instagram.com')
  })

  it('checks link to google', () => {
    expect(getByTestId('google')).toHaveAttribute('href', 'https://www.google.com')
  })

  it('checks link to linkedin', () => {
    expect(getByTestId('linkedin')).toHaveAttribute('href', 'https://linkedin.com')
  })

  it('checks if text rendered', () => {
    expect(getByText('Nossas redes e mídias')).toHaveTextContent('redes')
  })
})

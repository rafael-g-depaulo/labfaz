import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import render from 'Utils/render'
import Web from '.'

const mockedData: SocialNetworksLabfaz = {
  facebook: "https://www.facebook.com",
  twitter: "https://www.twitter.com",
  googlePlus: "https://www.google.com",
  linkedin: "https://linkedin.com",
  instagram: "https://instagram.com",
  phone: "9999999",
  email: "teste@teste.com"
}

it('renders header component', () => {
  expect(() => render(
    <BrowserRouter>
      <Web data={mockedData}/>
    </BrowserRouter>
  )).not.toThrow()
})

describe('Check content of Page', () => {
  const { getByText, getAllByRole } = render(
    <BrowserRouter>
      <Web data={mockedData}/>
    </BrowserRouter>
  );

  it('check construction image', () => {
    const images = getAllByRole('img')
    expect(images[1]).toHaveAttribute('alt', 'construction')
  })

  it('check text of in construction', () => {
    expect(getByText('organizando', { exact: false})).toHaveTextContent('ainda')
  })
})

import { SocialNetworksLabfaz } from 'Api/SocialNetworksLabfaz';
// import { BrowserRouter } from 'react-router-dom';

import render from 'Utils/render'
import Header from '.'

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
    <Header data={mockedData}/>
  )).not.toThrow()
})

describe('Check links succesfully redirects to another page', () => {
  const { getByTestId } = render(
    <Header data={mockedData}/>
  );
  it('check link to facebook', () => {
    expect(getByTestId('facebook')).toHaveAttribute('href', 'https://www.facebook.com')
  })

  it('check link to twitter', () => {
    expect(getByTestId('twitter')).toHaveAttribute('href', 'https://www.twitter.com')
  })

  it('check link to instagram', () => {
    expect(getByTestId('instagram')).toHaveAttribute('href', 'https://instagram.com')
  })

  it('check link to google', () => {
    expect(getByTestId('google')).toHaveAttribute('href', 'https://www.google.com')
  })

  it('check link to linkedin', () => {
    expect(getByTestId('linkedin')).toHaveAttribute('href', 'https://linkedin.com')
  })
})

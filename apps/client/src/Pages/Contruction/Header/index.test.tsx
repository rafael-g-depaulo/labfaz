import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import render from 'Utils/render'
import Header from '../Header'

it('renders header component', () => {
  expect(() => render(<BrowserRouter><Header /></BrowserRouter>)).not.toThrow()
})

describe('Check links succesfully redirects to another page', () => {
  const { getByTestId } = render(<BrowserRouter><Header /></BrowserRouter>);
  it('check link to facebook', () => {
    expect(getByTestId('facebook')).toHaveAttribute('href', 'https://www.facebook.com')
  })

  it('check link to twitter', () => {
    expect(getByTestId('twitter')).toHaveAttribute('href', 'https://www.twitter.com')
  })

  it('check link to google', () => {
    expect(getByTestId('google')).toHaveAttribute('href', 'https://www.google.com')
  })

  it('check link to linkedin', () => {
    expect(getByTestId('linkedin')).toHaveAttribute('href', 'https://linkedin.com')
  })
})

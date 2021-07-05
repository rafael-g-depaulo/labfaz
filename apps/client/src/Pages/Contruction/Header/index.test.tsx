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
    expect(getByTestId('facebook').closest('a')).toHaveAttribute('href', '/facebook.com')
  })

  it('check link to twitter', () => {
    expect(getByTestId('twitter').closest('a')).toHaveAttribute('href', '/twitter.com')
  })

  it('check link to google', () => {
    expect(getByTestId('google').closest('a')).toHaveAttribute('href', '/google.com')
  })

  it('check link to linkedin', () => {
    expect(getByTestId('linkedin').closest('a')).toHaveAttribute('href', '/linkedin.com')
  })
})

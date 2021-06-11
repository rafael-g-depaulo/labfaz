import React from 'react'
import render from 'Utils/render'

import Header from './index'

it('renders header component', () => {
  expect(() => render(<Header />)).not.toThrow()
})

describe('Check links succesfully redirects to another page', () => {
  const { getByText, getByTestId, getByRole } = render(<Header />);
  it('check link of home page and image logo', () => {
    expect(getByTestId('home').closest('a')).toHaveAttribute('href', '/home')
    expect(getByRole('img')).toHaveAttribute('alt', 'logo')
  })

  it('check link of about us page', () => {
    expect(getByText('Quem Somos').closest('a')).toHaveAttribute('href', '/about')
  })

  it('check link of list courses page', () => {
    expect(getByText('Cursos').closest('a')).toHaveAttribute('href', '/classes')
  })

  it('check link of calendar page', () => {
    expect(getByText('Agenda').closest('a')).toHaveAttribute('href', '/calendar')
  })

  it('check link of blog page', () => {
    expect(getByText('Blog').closest('a')).toHaveAttribute('href', '/blog')
  })

  it('check link of professionals page', () => {
    expect(getByText('Banco de Profissionais').closest('a'))
    .toHaveAttribute('href', '/professionals')
  })
})

describe('Check user session links', () => {
  const { getByText } = render(<Header />);
  it('check signin button', () => {
    expect(getByText('Entrar').closest('a')).toHaveAttribute('href', '/login')
  })

  it('check sign up button', () => {
    expect(getByText('Cadastre-se').closest('a')).toHaveAttribute('href', '/register')
  })
})

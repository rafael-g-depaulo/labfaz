import React from 'react'
import Render from 'Utils/render'
import { fireEvent } from '@testing-library/react'

import Header from './index'

it('renders header component', () => {
  expect(() => Render(<Header />)).not.toThrow()
})

describe('Check links succesfully redirects to another page', () => {
  const { getByText } = Render(<Header />);
  it('check link of about us', () => {
    const link = getByText('Quem Somos');
    fireEvent.click(link);
    expect(getByText('Quem Somos').closest('a')).toHaveAttribute('href', '/about')
  })
  it('check link of list courses', () => {
    const link = getByText('Cursos');
    fireEvent.click(link);
    expect(getByText('Cursos').closest('a')).toHaveAttribute('href', '/classes')
  })
  it('check link of calendar', () => {
    const link = getByText('Agenda');
    fireEvent.click(link);
    expect(getByText('Agenda').closest('a')).toHaveAttribute('href', '/calendar')
  })
  it('check link of blog', () => {
    const link = getByText('Blog');
    fireEvent.click(link);
    expect(getByText('Blog').closest('a')).toHaveAttribute('href', '/blog')
  })
  it('check link of professionals', () => {
    const link = getByText('Banco de Profissionais');
    fireEvent.click(link);
    expect(getByText('Banco de Profissionais').closest('a')).toHaveAttribute('href', '/professionals')
  })
})

describe('Check user session buttons', () => {
  
  it('check signin button', () => {
    const { getByText } = Render(<Header />);
    const link = getByText('Entrar');
    fireEvent.click(link);
    expect(getByText('Entrar').closest('a')).toHaveAttribute('href', '/login')
  })

  it('check sign up button', () => {
    const { getByText } = Render(<Header />);
    const link = getByText('Cadastre-se');
    fireEvent.click(link);
    expect(getByText('Cadastre-se').closest('a')).toHaveAttribute('href', '/register')
  })
})

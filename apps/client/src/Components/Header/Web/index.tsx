import React, { FC } from 'react'

import useEvent from 'Hooks/useEvent'

import {
  Container,
  Navbar,
  UserSession,
  Button,
  NavLink,
  RedirectLink,
  LogIn
} from './style'
import Logo from 'Components/Logo'

export const Web: FC = () => {

  useEvent({ category: 'Navigation', action: 'click', value: 0 })

  return (
    <Container>
      <RedirectLink href="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        <NavLink href="/about"> QUEM SOMOS </NavLink>
        <NavLink href="/classes"> CURSOS </NavLink>
        <NavLink href="/calendar"> AGENDA </NavLink>
        <NavLink href="/blog"> BLOG </NavLink>
        <NavLink href="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
      </Navbar>
      <div className="line" />
      <UserSession>
        <LogIn href='/login'> ENTRAR </LogIn>
        <Button href='/register'> CADASTRE-SE </Button>
      </UserSession>
    </Container>
  )
}

export default Web

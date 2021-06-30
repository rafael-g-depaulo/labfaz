import React, { FC } from 'react'

import {
  Container,
  Navbar,
  UserSession,
  Button,
  NavLink,
  RedirectLink
} from './style'
import Logo from 'Components/Logo'

export const Mobile: FC = () => {
  return (
    <Container>
      <RedirectLink className="home" to="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        <NavLink to="/about"> QUEM SOMOS </NavLink>
        <NavLink to="/classes"> CURSOS </NavLink>
        <NavLink to="/calendar"> AGENDA </NavLink>
        <NavLink to="/blog"> BLOG </NavLink>
        <NavLink to="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
      </Navbar>
      <div className="line" />
      <UserSession>
        <RedirectLink to='/login'> ENTRAR </RedirectLink>
        <Button to='/register'> CADASTRE-SE </Button>
      </UserSession>
    </Container>
  )
}

export default Mobile

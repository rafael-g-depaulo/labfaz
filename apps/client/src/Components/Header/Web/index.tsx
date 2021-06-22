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
        <NavLink to="/about"> Quem Somos </NavLink>
        <NavLink to="/classes"> Cursos </NavLink>
        <NavLink to="/calendar"> Agenda </NavLink>
        <NavLink to="/blog"> Blog </NavLink>
        <NavLink to="/professionals"> Banco de Profissionais </NavLink>
      </Navbar>
      <div className="line" />
      <UserSession>
        <RedirectLink to='/login'> Entrar </RedirectLink>
        <Button to='/register'> Cadastre-se </Button>
      </UserSession>
    </Container>
  )
}

export default Mobile

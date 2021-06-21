import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container, Navbar, UserSession, Button, NavLink } from './style'
import Logo from 'Components/Logo'

export const Mobile: FC = () => {
  return (
    <Container>
      <Link className="home" to="/" data-testid="home">
        <Logo />
      </Link>
      <Navbar>
        <NavLink to="/about"> Quem Somos </NavLink>
        <NavLink to="/classes"> Cursos </NavLink>
        <NavLink to="/calendar"> Agenda </NavLink>
        <NavLink to="/blog"> Blog </NavLink>
        <NavLink to="/professionals"> Banco de Profissionais </NavLink>
      </Navbar>
      <div className="line" />
      <UserSession>
        <Link to='/login'> Entrar </Link>
          <Button to='/register'> Cadastre-se </Button>
      </UserSession>
    </Container>
  )
}

export default Mobile

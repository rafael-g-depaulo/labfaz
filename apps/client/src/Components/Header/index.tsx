import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container, Navbar, UserSession, Button } from './style'
import Logo from 'Components/Logo'

export const Header: FC = () => {
  return (
    <Container>
      <Link className="home" to="/" data-testid="home">
        <Logo />
      </Link>
      <Navbar> 
        <Link to="/about"> Quem Somos </Link>
        <Link to="/classes"> Cursos </Link>
        <Link to="/calendar"> Agenda </Link>
        <Link to="/blog"> Blog </Link>
        <Link to="/professionals"> Banco de Profissionais </Link>
      </Navbar>
      <div className="line" />
      <UserSession>
        <Link to='/login'> Entrar </Link>
        <Button to='/register'> Cadastre-se </Button>
      </UserSession>
    </Container>
  )
}

export default Header

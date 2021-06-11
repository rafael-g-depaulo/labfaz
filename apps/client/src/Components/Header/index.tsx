import React, { FC } from 'react'

import { Container, Navbar, UserSession, Button } from './style'
import Logo from 'Components/Logo'

export const Header: FC = () => {
  return (
    <Container>
      <a href="/home" data-testid="home">
        <Logo />
      </a>
      <Navbar> 
        <a href="/about"> Quem Somos </a>
        <a href="/classes"> Cursos </a>
        <a href="/calendar"> Agenda </a>
        <a href="/blog"> Blog </a>
        <a href="/professionals"> Banco de Profissionais </a>
      </Navbar>
      <div className="line" />
      <UserSession>
        <a href='/login'> Entrar </a>
        <Button href='/register'> Cadastre-se </Button>
      </UserSession>
    </Container>
  )
}

export default Header

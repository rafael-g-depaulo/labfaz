import React, { FC } from 'react'

import { Container, Navbar, UserSession } from './style'

export const Header: FC = () => {
  return (
    <Container>
      <a href="/home">
        <img src="" alt="logo"/>
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
        <a href='/register'> Cadastre-se </a> 
      </UserSession>
    </Container>
  )
}

export default Header

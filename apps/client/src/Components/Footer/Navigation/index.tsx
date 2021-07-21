import React, { FC } from 'react'

import { NavigationContainer, Navbar, NavLink, Title } from './style';

const Navigation: FC = () => {
  return (
    <NavigationContainer id="navigation-container">
      <Title>Navegação</Title>
      <Navbar>
        <NavLink href="/about"> QUEM SOMOS </NavLink>
        <NavLink href="/classes"> CURSOS </NavLink>
        <NavLink href="/calendar"> AGENDA </NavLink>
        <NavLink href="/blog"> BLOG </NavLink>
        <NavLink href="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
        <NavLink href='/register'> CADASTRE-SE </NavLink>
      </Navbar>
    </NavigationContainer>
  )
}

export default Navigation;

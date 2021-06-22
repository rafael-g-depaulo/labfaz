import React, { FC, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import Logo from 'Components/Logo'
import {
  Container,
  ContainerIcon,
  Button,
  CloseMenu,
  NavLink,
  IconButton,
  LogoLink,
  NavBar
} from './style'

export const Mobile: FC = () => {
  const[open, setOpen] = useState(false)
  return (
    <Container>
      <div className={open ? 'navBar active' : 'navBar'}>
        <NavBar>
          <NavLink to="/"> HOME </NavLink>
          <NavLink to="/about"> QUEM SOMOS </NavLink>
          <NavLink to="/classes"> CURSOS </NavLink>
          <NavLink to="/blog"> BLOG </NavLink>
          <NavLink to="/calendar"> AGENDA </NavLink>
          <NavLink to="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
          <Button backgroundColor="var(--background-dark-gray)" to='/login'> ENTRAR </Button>
          <Button backgroundColor="white" to='/register'> REGISTRE-SE </Button>
        </NavBar>
      </div>
      <CloseMenu open={open} onClick={() => setOpen(false)}></CloseMenu>
      <ContainerIcon>
        <div className="ContainerDiv">
          <IconButton onClick={() => setOpen(true)}>
            <FaBars title="menu" />
          </IconButton>
          <LogoLink to="/" data-testid="home">
            <Logo />
          </LogoLink>
        </div>
      </ContainerIcon>
    </Container>
  )
}

export default Mobile

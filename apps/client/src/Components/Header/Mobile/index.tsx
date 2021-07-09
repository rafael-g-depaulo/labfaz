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
          <NavLink href="/"> HOME </NavLink>
          <NavLink href="/about"> QUEM SOMOS </NavLink>
          <NavLink href="/classes"> CURSOS </NavLink>
          <NavLink href="/blog"> BLOG </NavLink>
          <NavLink href="/calendar"> AGENDA </NavLink>
          <NavLink href="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
          <Button backgroundColor="login" href='/login'> ENTRAR </Button>
          <Button href='/register'> REGISTRE-SE </Button>
        </NavBar>
      </div>
      <CloseMenu open={open} onClick={() => setOpen(false)}></CloseMenu>
      <ContainerIcon>
        <div className="ContainerDiv">
          <IconButton onClick={() => setOpen(true)}>
            <FaBars title="menu" />
          </IconButton>
          <LogoLink href="/" data-testid="home">
            <Logo />
          </LogoLink>
        </div>
      </ContainerIcon>
    </Container>
  )
}

export default Mobile

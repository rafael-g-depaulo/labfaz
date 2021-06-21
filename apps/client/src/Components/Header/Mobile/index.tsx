import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

import Logo from 'Components/Logo'
import {
  Container,
  ContainerIcon,
  Button,
  CloseMenu,
  NavLink,
} from './style'

export const Mobile: FC = () => {
  const[open, setOpen] = useState(false)
  return (
    <Container>
      <div className={open ? 'navBar active' : 'navBar'}>
        <div>
          <NavLink to="/"> HOME </NavLink>
          <NavLink to="/about"> QUEM SOMOS </NavLink>
          <NavLink to="/classes"> CURSOS </NavLink>
          <NavLink to="/blog"> BLOG </NavLink>
          <NavLink to="/calendar"> AGENDA </NavLink>
          <NavLink to="/professionals"> BANCO DE PROFISSIONAIS </NavLink>
          <Button backgroundColor="#C4C4C4" to='/login'> ENTRAR </Button>
          <Button backgroundColor="white" to='/register'> REGISTRE-SE </Button>
        </div>
      </div>
      <CloseMenu open={open} onClick={() => setOpen(false)}></CloseMenu>
      <ContainerIcon>
        <div className="ContainerDiv">
          <button onClick={() => setOpen(true)}>
            <FaBars title="menu" />
          </button>
          <Link to="/" data-testid="home">
            <Logo />
          </Link>
        </div>
      </ContainerIcon>
    </Container>
  )
}

export default Mobile

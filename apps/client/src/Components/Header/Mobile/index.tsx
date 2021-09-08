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
import { useCurrentUser } from 'Context/CurrentUser'
import { loggedNavLinksList, navLinksList, unloggedNavLinksList } from 'Utils/navLinks'

export const Mobile: FC = () => {
  const[open, setOpen] = useState(false)
  const { isLoggedIn } = useCurrentUser()

  return (
    <Container>
      <div className={open ? 'navBar active' : 'navBar'}>
        <NavBar>
          <NavLink href="/"> HOME </NavLink>
          {navLinksList.map(({ label, path }) => <NavLink href={path} key={`${label}+${path}`}> {label} </NavLink>)}
          {isLoggedIn
            ? loggedNavLinksList.map(({ label, path }) => <NavLink href={path} key={`${label}+${path}`}> {label} </NavLink>)
            : unloggedNavLinksList.map(({ name, label, path }) =>
              <Button BackgroundColor={name === "login" ? "login" : undefined} href={path} key={`${label}+${path}`}> {label} </Button>
          )
          }
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

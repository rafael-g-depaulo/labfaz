import React, { FC } from 'react'

import useEvent from 'Hooks/useEvent'

import {
  Container,
  Navbar,
  UserSession,
  Button,
  NavLink,
  RedirectLink,
  LogIn
} from './style'
import Logo from 'Components/Logo'
import { loggedNavLinksList, navLinksList, unloggedNavLinksList } from 'Utils/navLinks'
import { useCurrentUser } from 'Context/CurrentUser'

export const Web: FC = () => {

  useEvent({ category: 'Navigation', action: 'click', value: 0 })
  const { isLoggedIn } = useCurrentUser()

  return (
    <Container>
      <RedirectLink href="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        {navLinksList.map(({ label, path }) => <NavLink href={path}> {label} </NavLink>)}
      </Navbar>
      <div className="line" />
      <UserSession>
        { isLoggedIn 
          ? loggedNavLinksList.map(({ label, path }) => <NavLink href={path}> {label} </NavLink>)
          : unloggedNavLinksList.map(({ name, label, path }) =>
            name === "login"
              ? <LogIn href={path}> {label} </LogIn>
              : <Button href={path}> {label} </Button>
          )
        }
      </UserSession>
    </Container>
  )
}

export default Web

import React, { FC } from 'react'
import { MdArrowDropDownCircle } from 'react-icons/md'

import { showAboutUs, showBlog, showCourses, showProfileMine, showUserSearch } from 'FeatureFlags'

import Logo from 'Components/Logo'
import useEvent from 'Hooks/useEvent'
import { useCurrentUser } from 'Context/CurrentUser'
import { navLink, navLinks } from 'Utils/navLinks'

import {
  Container,
  Navbar,
  UserSession,
  Button,
  NavLink,
  RedirectLink,
  LogIn,
  User,
  UserAvatar,
} from './style'

const Link = ({ label, path }: navLink) => (
  <NavLink href={path}> {label} </NavLink>
)

const isLogged = true

export const Web: FC = () => {
  useEvent({ category: 'Navigation', action: 'click', value: 0 })
  const { isLoggedIn } = useCurrentUser()

  return (
    <Container>
      <RedirectLink href="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        { showAboutUs    && <Link {...navLinks["about us"]} />            }
        { showCourses    && <Link {...navLinks["cursos"]} />              }
        { showBlog       && <Link {...navLinks["blog"]} />                }
        { showUserSearch && <Link {...navLinks["busca profissionais"]} /> }
      </Navbar>
      <div className="line" />
      <UserSession>
        { isLoggedIn 
          ? showProfileMine && <Link {...navLinks["perfil"]} />
          : <>
            <LogIn href={navLinks["login"].path}> {navLinks["login"].label} </LogIn>
            <Button href={navLinks["cadastro"].path}> {navLinks["cadastro"].label} </Button>
          </>
        }
      </UserSession>
    </Container>
  )
}

export default Web

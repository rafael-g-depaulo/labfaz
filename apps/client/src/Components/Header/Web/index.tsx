import React, { FC } from 'react'

import { showAboutUs, showBlog, showCourses, showProfileMine, showUserSearch, showObservatorio } from 'FeatureFlags'

import Logo from 'Components/Logo'
import useEvent from 'Hooks/useEvent'
import { useCurrentUserToken } from 'Context/LoggedUserToken'
import { navLink, navLinks } from 'Utils/navLinks'

import {
  Container,
  Navbar,
  UserSession,
  Button,
  NavLink,
  RedirectLink,
  LogIn,
  LogoutButton
} from './style'
import { useHistory } from 'react-router'

const Link = ({ label, path }: navLink) => (
  <NavLink href={path}> {label} </NavLink>
)


export const Web: FC = () => {
  useEvent({ category: 'Navigation', action: 'click', value: 0 })
  const { isLoggedIn } = useCurrentUserToken()

  const history = useHistory()

  const handleLogoutUser = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    history.push('/home')
    history.go(0)
  }

  return (
    <Container>
      <RedirectLink href="/" data-testid="home">
        <Logo />
      </RedirectLink>
      <Navbar>
        { showAboutUs      && <Link {...navLinks["about us"]} />              }
        { showCourses      && <Link {...navLinks["cursos"]} />                }
        { showBlog         && <Link {...navLinks["blog"]} />                  }
        { showUserSearch   && <Link {...navLinks["busca profissionais"]} />   }
        { showObservatorio && <Link {...navLinks["observatorio"]} />          }

      </Navbar>
      <div className="line" />
      <UserSession>
        { isLoggedIn 
          ? showProfileMine && (
            <>
              <Button href={navLinks["perfil"].path}> PERFIL </Button>
              <LogoutButton onClick={() => handleLogoutUser()}>SAIR</LogoutButton>
            </>
          )
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

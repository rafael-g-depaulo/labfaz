import { FC, useCallback, useState } from 'react'
import { FaBars } from 'react-icons/fa'

import { showAboutUs, showBlog, showCourses, showObservatorio, showProfileMine, showUserSearch } from 'FeatureFlags'

import Logo from 'Components/Logo'
import {
  Container,
  ContainerIcon,
  Button,
  CloseMenu,
  NavLink,
  IconButton,
  LogoLink,
  NavBar,
  LogoutButton
} from './style'
import { useCurrentUser } from 'Context/LoggedUserToken'
import { navLink, navLinks } from 'Utils/navLinks'
import { useNavigate } from 'react-router-dom'

const Link = ({ link, show }: {link: navLink, show: boolean}) => (
  !show ? <></> : <NavLink href={link.path}> {link.label} </NavLink> 
)

export const Mobile: FC = () => {
  const[open, setOpen] = useState(false)
  const { isLoggedIn } = useCurrentUser()

  const navigate = useNavigate()

  const handleLogoutUser = useCallback(() => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')

    navigate('/home')
  }, [navigate])

  return (
    <Container>
      <div className={open ? 'navBar active' : 'navBar'}>
        <NavBar>
          <NavLink href="/"> HOME </NavLink>
          { <Link show={showAboutUs}      link={navLinks["about us"]} />            }
          { <Link show={showCourses}      link={navLinks["cursos"]} />              }
          { <Link show={showBlog}         link={navLinks["blog"]} />                }
          { <Link show={showUserSearch}   link={navLinks["busca profissionais"]} /> }
          { <Link show={showObservatorio} link={navLinks["observatorio"]} />        }

          {isLoggedIn
            ? (
            <>
              <Link show={showProfileMine} link={navLinks["perfil"]} />
              <LogoutButton onClick={() => handleLogoutUser()}>SAIR</LogoutButton>
            </>
              )
            : <>
              <Button BackgroundColor={"login"} href={navLinks["login"].path} > {navLinks["login"].label} </Button>
              <Button href={navLinks["cadastro"].path} > {navLinks["cadastro"].label} </Button>
            </>
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

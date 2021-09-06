import React, { FC } from 'react'

import { useCurrentUser } from 'Context/CurrentUser'
import { LinkNames, navLinks } from 'Utils/navLinks'

import { NavigationContainer, Navbar, NavLink, Title } from './style';

const RenderLink = (name: LinkNames) => navLinks[name] && <NavLink href={navLinks[name].path}> {navLinks[name].label} </NavLink>

const Navigation: FC = () => {
  const { isLoggedIn } = useCurrentUser()
  return (
    <NavigationContainer id="navigation-container">
      <Title>Navegação</Title>
      <Navbar>
        <div>
          {RenderLink("about us")}
          {RenderLink("cursos")}
          {RenderLink("blog")}
        </div>
        <div>
          {
            // TODO: colocar observatório no lugar de blog
          }
          {RenderLink("blog")}
          {RenderLink("busca profissionais")}
          {RenderLink(isLoggedIn ? "perfil" : "cadastro")}
        </div>
      </Navbar>
    </NavigationContainer>
  )
}

export default Navigation;

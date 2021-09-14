import React, { FC } from 'react'

import { showAboutUs, showBlog, showCourses, showObservatorio, showProfileMine, showUserSearch } from 'FeatureFlags'

import { useCurrentUserToken } from 'Context/LoggedUserToken'
import { LinkName, navLinks } from 'Utils/navLinks'

import { NavigationContainer, Navbar, NavLink, Title } from './style';

const RenderLink = (name: LinkName) => navLinks[name] && <NavLink href={navLinks[name].path}> {navLinks[name].label} </NavLink>

const Navigation: FC = () => {
  const { isLoggedIn } = useCurrentUserToken()
  return (
    <NavigationContainer id="navigation-container">
      <Title>Navegação</Title>
      <Navbar>
        <div>
          {showAboutUs && RenderLink("about us")}
          {showCourses && RenderLink("cursos")}
          {showBlog && RenderLink("blog")}
        </div>
        <div>
          {showObservatorio && RenderLink("observatorio")}
          {showUserSearch && RenderLink("busca profissionais")}
          {RenderLink(isLoggedIn && showProfileMine ? "perfil" : "cadastro")}
        </div>
      </Navbar>
    </NavigationContainer>
  )
}

export default Navigation;

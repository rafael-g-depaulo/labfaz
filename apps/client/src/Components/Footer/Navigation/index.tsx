import React, { FC } from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  @media (max-width: 768px){
    display: none;
  }
  --font-size: 14px;
  text-transform: uppercase;
  line-height: 32px;
  min-width: 330px;
  span {
    font-weight: 500;
  }
  
nav {
  display: flex;
  flex-direction: row;
  
  ul {
    list-style: none;
    padding-left: 20px;
    
    li {
      a {
        text-decoration: none;
        font-weight: 500;
      }
    }
  }
}
`

const Logo: FC = () => {
  return (
    <NavigationContainer id="navigation-container">
      <span>Navegacao</span>
      <nav>
        <ul>
          <li><a href="/quem-somos">Quem somos</a></li>
          <li><a href="/cursos">Cursos</a></li>
          <li><a href="/agenda">Agenda</a></li>
        </ul>
        <ul>
          <li><a href="/blog">blog</a></li>
          <li><a href="/banco-de-profissionais">Banco de profissionais</a></li>
          <li><a href="/cadastro">Cadastre-se</a></li>
        </ul>
      </nav>
    </NavigationContainer>
  )
}

export default Logo;

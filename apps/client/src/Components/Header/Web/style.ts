import styled, { css } from "styled-components"
import { Link } from 'react-router-dom'

import { DesktopSmall } from 'Utils/breakpoints'

export const Container = styled.div`
  background-color: var(--background-black);
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;
  .line {
    width: 1px;
    background-color: var(--background-pink);
  }
  .home {
    display: flex;
    flex-Grow: 0.3;
    justify-Content: space-around;
  }
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
  color: var(--background-pink);

  ${DesktopSmall(css`
    font-size: var(--font-size-medium);
  `)}
  
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: space-evenly;

  ${DesktopSmall(css`
    gap: 0;
  `)}
`;

export const NavLink = styled(Link)`
  ${Navbar} & {
    flex-grow: 0.5;
    text-align: center;
    text-decoration: none;
    color: var(--background-pink);
    padding: 0.6rem 0;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
    `)}
    
  }
`

export const UserSession = styled.div`
  display: flex;
  align-items: center;
  flex-Grow: 0.6;
  justify-content: space-evenly;
  ${DesktopSmall(css`
    flex-Grow: 0.4;
  `)}
`;

export const Button = styled(Link)`
  && {
    background-color: var(--background-pink);
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    color: var(--color-text-beige);
    box-shadow: -5px -5px var(--color-text-beige);

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      box-shadow: -3px -3px var(--color-text-beige);
      padding: 0.3rem;
    `)}
  }
`;

export const LogIn = styled(Link)`
  && {
    text-decoration: none;
    color: var(--background-pink);
    border-bottom: 1px solid var(--background-pink);
    padding: 0.5rem 2rem;

    ${DesktopSmall(css`
      font-size: var(--font-size-short);
      padding: 0.5rem;
    `)}

  }
`

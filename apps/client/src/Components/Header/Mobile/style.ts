import styled from "styled-components"
import { Link } from 'react-router-dom'

export interface PropsCloseMenu {
  open: boolean,
}
export interface PropsButton {
  backgroundColor: string,
}
export const Container = styled.div`
  .navBar {
    background-color: var(--background-gray);
    display: flex;
    position: fixed;
    height: 100vh;
    max-width: 18rem;
    padding: 0 1rem;
    z-index: 1;
    left: -18rem;
    transition: 800ms;

    a:last-child {
      margin-top: 1rem;
    }
  }
  .navBar.active {
    left: 0;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  height: 25rem;
  gap: 1rem;
  margin-top: 3rem;
`;

export const NavLink = styled(Link)`
  .navBar & {
    flex-grow: 0.8;
    font-size: var(--font-size-short);
    text-decoration: none;
  }
`

export const Button = styled(Link)<PropsButton>`
  && {
    display: flex;
    /* TODO */
    background-color: ${props => props.backgroundColor};
    cursor: pointer;
    /* TODO border-radius: ; */
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 12rem;
    font-size: var(--font-size-short);
    text-decoration: none;
  }
`;

export const CloseMenu = styled.div<PropsCloseMenu>`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: fixed;
  cursor: pointer;
  display: ${props => props.open ? 'flex' : 'none'};
`

export const ContainerIcon = styled.div`
  background-color: var(--background-dark-gray);
  display: flex;
  padding: 0.5rem 0;
  justify-content: center;
  .ContainerDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }
  
`

export const IconButton = styled.button `
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    font-size: 1.2rem;
  }
`;

export const LogoLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
`

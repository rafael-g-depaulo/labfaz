import styled from "styled-components"

import { InternalLinkButton  } from 'Components/Buttons/InternalLinkButton';

export interface PropsCloseMenu {
  open: boolean,
}
export interface PropsButton {
  BackgroundColor?: string,
}
export const Container = styled.div`
  z-index: 920;
  .navBar {
    background-color: var(--backgound-black-gray);
    display: flex;
    position: fixed;
    height: 100vh;
    max-width: 18rem;
    padding: 0 1rem;
    left: -18rem;
    transition: 800ms;

    a:last-child {
      margin-top: 1rem;
    }
  }
  .navBar.active {
    z-index: 950;
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

export const NavLink = styled(InternalLinkButton)`
  --font-size-short: 11px;
  .navBar & {
    flex-grow: 0.8;
    font-size: var(--font-size-short);
    color: var(--background-pink);
    border: none;
    background-color: transparent;
  }
`

export const Button = styled(InternalLinkButton)<PropsButton>`
  --font-size-short: 11px;
  display: flex;
  ${props => 
    props.BackgroundColor === "login" ?
      'background-color: var(--background-pink);'
      : 
      'background-color: var(--color-text-yellow);'
  };
  ${props => 
    props.BackgroundColor === "login" ?
      'color: var(--color-text-yellow);'
      : 
      'color: var(--background-pink);'
  };
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 12rem;
  border: none;
  font-size: var(--font-size-short);
`;

export const CloseMenu = styled.div<PropsCloseMenu>`
  background-color: transparent;
  width: 100%;
  height: 100%;
  z-index: 900;
  position: fixed;
  cursor: pointer;
  display: ${props => props.open ? 'flex' : 'none'};
`

export const ContainerIcon = styled.div`
  background-color: var(--backgound-black-gray);
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

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 1.5rem;
  svg {
    font-size: 1.5rem;
    color: var(--background-pink);
  }
`;

export const LogoLink = styled(InternalLinkButton)`
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
`

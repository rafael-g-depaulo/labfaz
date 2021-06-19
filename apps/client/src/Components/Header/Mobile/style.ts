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
    background-color: #E7E7E7;
    display: flex;
    position: absolute;
    height: 100%;
    max-width: 18rem;
    padding: 0 1rem;
    z-index: 1;
    left: -18rem;
    transition: 800ms;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: left;
      height: 25rem;
      gap: 1rem;
      margin-top: 3rem;
    }
    a {
      font-size: 12px;
      text-decoration: none;
    }
    a:last-child {
      margin-top: 1rem;
    }
  }
  .navBar.active {
    left: 0;
  }
`;

export const ContainerIcon = styled.div`
  background-color: #C4C4C4;
  display: flex;
  padding: 0.5rem 0;
  justify-content: center;

  .ContainerDiv {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  svg {
    font-size: 1.2rem;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }
`

export const CloseMenu = styled.div<PropsCloseMenu>`
  background-color: transparent;
  width: 100%;
  height: 100%;
  position: absolute;
  cursor: pointer;
  display: ${props => props.open ? 'flex' : 'none'};
`

export const NavLink = styled(Link)`
  .navBar & {
    flex-grow: 0.8;
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
  }
`;

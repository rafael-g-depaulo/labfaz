import styled from "styled-components"
import { Link } from 'react-router-dom'

// import {ShortScreen, MediumScreen, LargeScreen} from 'Utils/breakpoints/webOnly'

export const Container = styled.div`
  background-color: var(--background-dark-gray);
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;
  a {
    
  }
  .line {
    width: 1px;
    background-color: var(--color-text);
  }
  .home {
    display: flex;
    flex-Grow: 0.3;
    justify-Content: space-around;
  }
`;

export const RedirectLink = styled(Link)`
  text-decoration: none;
  /* TODO color: ; */
  color: var(--color-text);

  /* $ {ShortScreen('font-size: var(--font-size-short)')}; */
  /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
  /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  ${Navbar} & {
    flex-grow: 0.5;
    text-align: center;
    text-decoration: none;
    /* TODO color: ; */
    color: var(--color-text);
    padding: 0.6rem 0;
    
    /* $ {ShortScreen('font-size: var(--font-size-short)')}; */
    /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
    /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
  }
`

export const UserSession = styled.div`
  display: flex;
  align-items: center;
  flex-Grow: 0.6;
  justify-content: space-evenly;
`;

export const Button = styled(Link)`
  && {
    /* TODO */
    background-color: var(--background-white);
    cursor: pointer;
    /* TODO border-radius: ; */
    padding: 0.5rem 2rem;
    text-decoration: none;
    /* TODO color: ; */
    color: var(--color-text);
    /* $ {ShortScreen('font-size: var(--font-size-short); padding: 0.5rem 1rem')}; */
    /* $ {MediumScreen('font-size: var(--font-size-medium)')}; */
    /* $ {LargeScreen('font-size: var(--font-size-large)')}; */
  }
`;

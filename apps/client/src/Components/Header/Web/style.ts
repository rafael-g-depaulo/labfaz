import styled, { css } from "styled-components"

import { DesktopSmall } from 'Utils/breakpoints'
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

export const Container = styled.div`
  background-color: var(--background-black);
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;
  .line {
    width: 1px;
    background-color: var(--background-pink);
  }
`;

export const RedirectLink = styled(InternalLinkButton)`
  background-color: transparent;
  border: none;
  display: flex;
  flex-Grow: 0.3;
  justify-Content: space-around;
  align-items: center;
  padding: 0;

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

export const NavLink = styled(InternalLinkButton)`
  --font-size-short: 11px;

  ${Navbar} & {
    flex-grow: 0.5;
    color: var(--background-pink);
    padding: 0.6rem 0;
    background-color: transparent;
    border: none;
    font-size: var(--font-size-large);

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

export const Button = styled(InternalLinkButton)`
  padding: 0.2rem 1.5rem;
  color: var(--color-text-beige);
  border: none;
  font-size: var(--font-size-large);
  margin: 0 5px;

  &:hover {
    border-top: 2px solid;
    border-left: 2px solid;
    border-color: var(--button-color-yellow);
  }

  ${DesktopSmall(css`
    font-size: var(--font-size-short: 11px);
    padding: 0.3rem;
  `)}
`;

export const LogIn = styled(InternalLinkButton)`
  color: var(--background-pink);
  border-top: none;
  border-left: none;
  background-color: transparent;
  border-bottom: 1px solid var(--background-pink);
  padding: 0.5rem 2rem;
  font-size: var(--font-size-large);

  ${DesktopSmall(css`
    font-size: var(--font-size-short: 11px);
    padding: 0.5rem;
  `)}
`

export const User = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;


    font-size: var(--font-size-large);
    font-weight: 700;

    color: var(--background-pink);

    &:hover {
      cursor: pointer;
    }
    
    svg {
      margin-left: 3.05rem;
      margin-right: 3.38rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #A3A3A3;

  margin-left: 3.2rem;
  margin-right: 0.6rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`

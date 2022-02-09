import styled, { css } from "styled-components"

import { DesktopSmall } from 'Utils/breakpoints'
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

// import { ButtonStyled } from "Routes/Classes/SubscriptionButton/styles";

export const Container = styled.div`
  background-color: var(--backgound-black-gray);
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

  a {
    padding: 0.2rem 1.5rem;
    color: var(--color-text-beige);
    border: none;
    font-size: var(--font-size-large);
    margin: 0 5px;
    background-color: var(--background-pink);

    ${DesktopSmall(css`
      font-size: var(--font-size-short: 11px);
      padding: 0.3rem;
    `)}
  }
`;

export const Button = styled(InternalLinkButton)`
  /* TODO: fix this. these are hardcoded values and prone to fuck ups and bad responsivity */
  padding: 0 1.5rem;
  line-height: 31px;
  max-height: 38px;
  /* TODO: fix this */

  color: var(--color-text-beige);
  border: none;
  font-size: var(--font-size-large);
  margin: 0 5px;
  background-color: rbga(297, 0, 97, 1);
  box-shadow: 1px 1px 0px rgba(255, 236, 153, 1);


  :hover {
    box-shadow: 3px 3px 0px rgba(255, 236, 153, 1);
    opacity: 1;
    transition: 500ms;
  }


  ${DesktopSmall(css`
    font-size: var(--font-size-short: 11px);
    padding: 0.3rem;
  `)}
`;

// export const LogoutButton = styled(ButtonStyled)`
export const LogoutButton = styled.button`
  padding: 0.2rem 1rem;
  color: var(--color-text-beige);
  border: none;
  font-size: var(--font-size-large);
  margin: 0 5px;
  background-color: var(--background-pink);

  min-width: 100px;
  min-height: 38px;

  font-weight: bold;

  background-color: rbga(297, 0, 97, 1);
  box-shadow: 1px 1px 0px rgba(255, 236, 153, 1);


  :hover {
    box-shadow: 3px 3px 0px rgba(255, 236, 153, 1);
    opacity: 1;
    transition: 500ms;
  }

  ${DesktopSmall(css`
    font-size: var(--font-size-short: 11px);
    padding: 0.3rem;
  `)}
`

export const LogIn = styled(InternalLinkButton)`
  color: var(--color-text-beige);
  background-color: rbga(297, 0, 97, 1);
  box-shadow: 1px 1px 0px rgba(255, 236, 153, 1);
  padding: 0rem 1rem;
  font-size: var(--font-size-large);
  max-height: 37px;
  min-height: 38px;
  min-width: 30px;
  margin-bottom: 0;
  border: none;

  font-size: var(--font-size-medium);
  cursor: pointer;

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :hover {
    box-shadow: 3px 3px 0px rgba(255, 236, 153, 1);
    opacity: 1;
    transition: 500ms;
  }

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

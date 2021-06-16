import styled from "styled-components"
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background-color: #C4C4C4;
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    /* TODO color: ; */
    color: black;
  }

  .line {
    width: 0.07rem;
    background-color: black;
  }
  .home {
    display: flex;
    flex-Grow: 0.3;
    justify-Content: space-around;
  }
`;

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  flex-Grow: 1;
  justify-content: space-evenly;
`;

export const UserSession = styled.div`
  display: flex;
  align-items: center;
  flex-Grow: 0.6;
  justify-content: space-evenly;
`;

export const Button = styled(Link)`
  && {
    /* TODO */
    background-color: white;
    cursor: pointer;
    /* TODO border-radius: ; */
    padding: 0.5rem 2rem;

    @media(min-width: 600px) and (max-width: 1000px) {
      padding: 0.5rem 1rem;
    }
  }
`;
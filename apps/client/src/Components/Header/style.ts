import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #C4C4C4;
  padding: 0.5rem 0;

  a {
    text-decoration: none;
    /* TODO color: ; */
    color: black;
  }

  .line {
    width: 1px;
    background-color: black;
  }
`;

export const Navbar = styled.div`
  min-width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserSession = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.a`
  /* TODO */
  background-color: white;
  cursor: pointer;
  /* TODO border-radius: ; */
  padding: 0.5rem 2rem;
`;

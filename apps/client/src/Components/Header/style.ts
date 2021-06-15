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

  @media(min-width: 600px) and (max-width: 1400px) {
    min-width: 55%;
  }

  @media(min-width: 1400px) {
    min-width: 40%;
  }
`;

export const UserSession = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    width: 25%;
    max-width: 25%;
  }
`;

export const Button = styled.a`
  /* TODO */
  background-color: white;
  cursor: pointer;
  /* TODO border-radius: ; */
  padding: 0.5rem 2rem;

  @media(min-width: 600px) and (max-width: 1000px) {
    padding: 0.5rem 1rem;
  }
`;

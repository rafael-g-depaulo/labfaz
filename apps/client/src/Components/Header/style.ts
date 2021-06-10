import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  /* TODO background-color: ; */

  a {
    text-decoration: none;
    /* TODO color: ; */
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

  button {
    /* TODO */
    border: 1px solid black;
    /* TODO */
    background-color: white;
    cursor: pointer;

    /* TODO border-radius: ; */
  }
`;

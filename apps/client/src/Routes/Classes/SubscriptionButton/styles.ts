import styled from "styled-components";


export const ButtonStyled = styled.button`
  min-width: 211px;
  min-height: 47px;
  background-color: var(--button-color-pink);
  box-shadow: 4px 4px 0px black, inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.14);
  border-radius: 2.16px;
  border: none;
  margin-bottom: 1.1rem;

  font-weight: 700;
  font-size: var(--font-size-medium);
  cursor: pointer;

  :hover {
    box-shadow: 10px 10px 0px black, inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.14);
    opacity: 0.8;
    transition: 500ms;
  }

  :disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 211px;
  min-height: 47px;
  background-color: var(--button-color-pink);
  box-shadow: 4px 4px 0px black, inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.14);
  border-radius: 2.16px;
  border: none;
  margin-bottom: 1.1rem;

  font-weight: 700;
  font-size: var(--font-size-medium);
  cursor: pointer;

  :hover {
    box-shadow: 10px 10px 0px black, inset 0px 2.88px 2.88px rgba(0, 0, 0, 0.14);
    background-color: aquamarine;
    transition: 2s;
  }
`;

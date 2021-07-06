import styled, { css } from 'styled-components'

import { DesktopLarge } from 'Utils/breakpoints'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  background-color: var(--background-black);
  padding: 0 3rem;

  ${ DesktopLarge(css`
    padding: 0 5rem;
  `)}
`;

export const Triangle = styled.div`
  border-top: 20rem solid transparent;
  border-left: 16rem solid var(--background-black);
`;

export const Rectangle = styled.div`
  background-color: var(--background-pink);
  height: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 5rem;
`;

export const Text = styled.h1`
  max-width: 8.2rem;
  color: var(--color-text-beige);
  font-size: var(--font-size-title);
  margin: 0;
  line-height: 2.5rem;
`;
export const ImageDiv = styled.div`
  display: flex;
  position: fixed;
  left: 9.5rem;
`;

export const ImageConstruction = styled.img`
  height: 20rem;
  width: 20rem;
  position: fixed;
  left: 10rem;
`;

export const Circle = styled.div`
  height: 20rem;
  width: 20rem;
  border-radius: 50%;
  border: 1px solid var(--background-blue);
  z-index: 1;
`;

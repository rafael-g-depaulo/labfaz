import styled, { css } from "styled-components";
import {
  DesktopSmall,
  Mobile,
} from "Utils/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 9rem;
  justify-content: space-between;
  align-items: center;

  ${DesktopSmall(css`
    margin: 0 0 20px 0;
  `)}

  ${Mobile(css`
    background-color: var(--background-pink);
    height: 500px;
    padding: 40px 25px;
    margin-top: 35px;
  `)};
`;

export const Title = styled.h1`
  color: var(--color-text-white);
  font-size: var(--font-size-title);
  margin: 0 0 30px 0;

  ${Mobile(css`
    margin: 0;
  `)};
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 5rem;
  width: 100%;

  ${Mobile(css`
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  `)};
`;

export const Image = styled.img`
  height: 4rem;
  object-fit: cover;

  ${Mobile(css`
    width: 40%;
    height: 90px;
  `)};
`;

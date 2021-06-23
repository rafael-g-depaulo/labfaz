import styled from "styled-components";
import mobileOnly from "Utils/breakpoints/mobileOnly";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 5%;

  ${mobileOnly(css`
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 40px 20px;
  `)}
`;

export const TextContainer = styled.div`
  width: 40%;
  height: 100%;
  justify-content: space-between;
  margin-right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin: 0 0 40px 0;
    color: black;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin: 40px 0;
    color: black;
    text-align: justify;
  }

  ${mobileOnly(css`
    width: 100%;
    justify-content: center;
    margin: 0;

    h1 {
      font-size: 35px;
      margin: 0 0 30px 0;
    }

    p {
      font-size: 18px;
      margin: 0;
    }
  `)}
`;

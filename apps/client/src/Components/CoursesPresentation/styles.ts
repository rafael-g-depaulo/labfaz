import styled from "styled-components";
import { Mobile } from "Utils/breakpoints";
import { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 5%;

  ${Mobile(css`
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

  ${Mobile(css`
    width: 100%;
    justify-content: center;
    margin: 0;
  `)}
`;

export const Title = styled.h1`
  font-size: 2.2em;
  margin: 0 0 40px 0;
  color: black;
  font-weight: bold;

  ${Mobile(css`
    font-size: 1.8em;
    margin: 0 0 30px 0;
  `)}
`;

export const Text = styled.p`
  font-size: 1.1em;
  margin: 40px 0;
  color: black;
  text-align: justify;

  ${Mobile(css`
    font-size: 1em;
    margin: 0;
  `)}
`;

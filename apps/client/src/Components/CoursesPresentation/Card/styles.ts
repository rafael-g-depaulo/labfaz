import styled from "styled-components";
import mobileOnly from "Utils/breakpoints/mobileOnly";
import { css } from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;
  max-width: 100%;
  grid-template-columns: minmax(150px, 350px) minmax(150px, 350px);
  grid-template-rows: minmax(200px, 400px) minmax(200px, 400px);
  grid-template-areas:
    "CardContainer CardContainer"
    "CardContainer CardContainer";
  justify-items: end;
  align-items: start;

  ${mobileOnly(css`
    grid-template-columns: minmax(150px, 300px);
    grid-template-rows: minmax(200px, 400px) minmax(200px, 400px);
    grid-template-areas:
      "CardContainer"
      "CardContainer";
    margin: 30px 0;
    justify-items: center;
    align-items: center;
  `)}
`;

export const CardContainer = styled.div`
  width: 90%;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  height: 90%;

  ${mobileOnly(css`
    width: 100%;
  `)}
`;

export const CardImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: 60%;
  width: 100%;
  margin-bottom: 10px;

  ${mobileOnly(css`
    margin-bottom: 0;
  `)}
`;

export const MainText = styled.div`
  width: 100%;
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.p`
  margin: 0 20px 0 0;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: bold;

  &:last-child {
    text-align: right;
    margin: 0;
  }
`;

export const CardDescription = styled.p`
  margin: 0;
  width: 100%;
  font-size: 0.8em;
  text-align: left;
  overflow: hidden;

  ${mobileOnly(css`
    margin: 10px 0 0 0;
  `)}
`;

import styled from "styled-components";
import { Props } from "./index";

export const Container = styled.div`
  //background-color: black;
  max-width: 60%;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(150px, 300px) minmax(10%, auto) minmax(
      150px,
      300px
    );
  grid-template-rows: minmax(200px, 350px) minmax(10%, auto) minmax(
      200px,
      350px
    );
  grid-template-areas:
    "CardContainer . CardContainer"
    "     .        .        .     "
    "CardContainer . CardContainer";
  justify-items: center;
  align-items: center;
`;

export const CardContainer = styled.div<Props>`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  width: 100%;
  height: 100%;
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  p {
    margin: 0;
    font-size: 14px;
    text-align: left;
    overflow: hidden;
  }
`;

export const CardImage = styled.img`
  //width: 70%;
  height: 50%;
  object-fit: cover;
`;

export const MainText = styled.div`
  width: 100%;
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

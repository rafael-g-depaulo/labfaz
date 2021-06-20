import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: grid;

  @media (max-width: 1023px) {
    grid-template-columns: minmax(150px, 300px);
    grid-template-rows: minmax(200px, 400px) minmax(200px, 400px);
    grid-template-areas:
      "CardContainer"
      "CardContainer";
    margin: 30px 0;
    justify-items: center;
    align-items: center;
  }

  @media (min-width: 1024px) {
    max-width: 100%;
    grid-template-columns: minmax(150px, 350px) minmax(150px, 350px);
    grid-template-rows: minmax(200px, 400px) minmax(200px, 400px);
    grid-template-areas:
      "CardContainer CardContainer"
      "CardContainer CardContainer";
    justify-items: end;
    align-items: start;
  }
`;

export const CardContainer = styled.div`
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 90%;

  p {
    font-size: 14px;
    text-align: left;
    overflow: hidden;
  }

  @media (max-width: 1023px) {
    width: 100%;
    p {
      margin: 10px 0 0 0;
    }
  }

  @media (min-width: 1024px) {
    width: 90%;
    p {
      margin: 0;
    }
  }
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 50%;
  width: 100%;

  @media (max-width: 1023px) {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const MainText = styled.div`
  width: 100%;
  margin: 20px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  p {
    max-width: 50%;
    overflow: hidden;
    margin: 0;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

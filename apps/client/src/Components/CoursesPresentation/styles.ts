import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  //background-color: blueviolet;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 50px;  

  @media(min-height: 901px) {
    height: 800px;
  }
`;

export const TextContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 10%;

  h1 {
    color: black;
    font-size: 55px;
    font-weight: bold;
    margin: 0 0 40px 0;
  }

  p {
    color: black;
    font-size: 28px;
    text-align: justify;
    margin: 40px 0;
  }

  @media (max-width: 1380px) {
    h1 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }
`;

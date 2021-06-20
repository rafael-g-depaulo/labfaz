import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 40px 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    height: 900px;
    padding: 5%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: black;
    font-weight: bold;
  }

  p {
    color: black;
    text-align: justify;
  }

  @media (max-width: 1023px) {
    width: 100%;
    justify-content: center;
    h1 {
      font-size: 35px;
      margin: 0 0 30px 0;
    }

    p {
      font-size: 18px;
      margin: 0;
    }
  }

  @media (min-width: 1024px) {
    width: 40%;
    height: 100%;
    justify-content: space-between;
    margin-right: 5%;
    h1 {
      font-size: 40px;
      margin: 0 0 40px 0;
    }

    p {
      font-size: 20px;
      margin: 40px 0;
    }
  }
`;

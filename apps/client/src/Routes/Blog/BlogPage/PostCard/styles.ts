import styled, { css } from "styled-components";
import mobileOnly from "Utils/breakpoints/mobileOnly";


export const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(5%, auto) minmax(450px, 800px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";

  ${mobileOnly(css`
    grid-template-columns: minmax(8%, auto) minmax(250px, 700px) minmax(
        8%,
        auto
      );
  `)}
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 100px 0;

  ${mobileOnly(css`
    flex-direction: column;
    align-items: center;
    margin: 70px 0;
  `)}
`;

export const MainTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: left;
  margin: 0 25px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;

  ${mobileOnly(css`
    font-size: 24px;
    margin: 0;
    line-height: 1.5;
  `)}
`;

export const Description = styled.p`
  font-size: 20px;
  text-align: left;
  line-height: 1.5;
  margin: 50px 0 40px 0;

  ${mobileOnly(css`
    font-size: 14px;
    margin: 35px 0;
    line-height: 2;
    text-align: justify;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 80px 0;

  ${mobileOnly(css`
    height: 295px;
    margin: 0 0 40px 0;
  `)}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 250px;
  height: 45px;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;

  ${mobileOnly(css`
    width: 150px;
    height: 35px;
  `)}
`;

export const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0;

  ${mobileOnly(css`
    font-size: 10px;
  `)}
`;

export const Divisor = styled.hr`
  height: 70px;
  margin: 5px 0;

  ${mobileOnly(css`
    height: 35px;
    margin: 0;
  `)}
`;

export const DateContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;

  ${mobileOnly(css`
    width: auto;
    margin: 0;
  `)}
`;

export const Date = styled.p`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 10px 0;

  ${mobileOnly(css`
    font-size: 14px;
    margin: 0 0 5px 0;
  `)}
`;

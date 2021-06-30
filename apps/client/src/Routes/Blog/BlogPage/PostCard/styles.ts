import styled, { css } from "styled-components";
import mobileOnly from "Utils/breakpoints/mobileOnly";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 80px 0 0 0;

  &:last-child {
    margin-bottom: 100px;
  }

  ${mobileOnly(css`
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;

    &:last-child {
      margin-bottom: 70px;
    }
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
  text-align: justify;
  line-height: 1.5;
  margin: 50px 0 40px 0;

  ${mobileOnly(css`
    font-size: 14px;
    margin: 35px 0;
    line-height: 2;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 40px 0;

  ${mobileOnly(css`
    height: 295px;    
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

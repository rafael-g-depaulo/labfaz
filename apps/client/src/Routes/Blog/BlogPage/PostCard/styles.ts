import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";

export const Container = styled.div`
  background-color: #000000;
  display: grid;
  width: 100%;
  grid-template-columns: minmax(5%, auto) minmax(450px, 800px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";

  ${Mobile(css`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 100px 0 0 0;

  &:last-child {
    margin-bottom: 100px;
  }

  ${Mobile(css`
    flex-direction: column;
    align-items: center;
    margin: 80px 0 0 0;

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
  font-size: var(--font-size-title);
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  margin: 0 25px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${Mobile(css`
    font-size: var(--font-size-subtitle);
    margin: 0;
    line-height: 1.5;
  `)}
`;

export const Description = styled.p`
  font-size: var(--font-size-default);
  color: #ffffff;
  text-align: justify;
  line-height: 1.5;
  margin: 50px 0 20px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 35px 0;
    line-height: 2;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin: 0 0 20px 0;

  ${Mobile(css`
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

export const ButtonContainer = styled.div`
 margin-top: 5px;
 height: 36px;
`;

export const ButtonLayer = styled.div`
  position: relative;
  width: 250px;
  height: 45px;
  background-color: #ffec99;
  z-index: 1;
  top: 40px;
  right: 5px;

  ${Mobile(css`
    width: 150px;
    height: 35px;
    top: -40px;    
  `)}
`;

export const Button = styled.button`
  position: relative;
  z-index: 2;
  width: 250px;
  height: 45px;
  background-color: #fc0061;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: solid 1px #000000;

  ${Mobile(css`
    width: 150px;
    height: 35px;
  `)}
`;

export const ButtonText = styled.p`
  font-size: var(--font-size-medium);
  font-weight: 700;
  color: #ffec99;
  text-transform: uppercase;
  margin: 0;

  ${Mobile(css`
    font-size: var(--font-size-short);
  `)}
`;

export const Divisor = styled.hr`
  height: 70px;
  margin: 5px 0;
  border-color: #fc0061;

  ${Mobile(css`
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

  ${Mobile(css`
    width: auto;
    margin: 0;
  `)}
`;

export const Date = styled.p`
  width: 100%;
  font-size: var(--font-size-subtitle);
  font-weight: 500;
  color: #fc0061;
  text-align: center;
  margin: 0 0 10px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 0 0 5px 0;
  `)}
`;

import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { Mobile } from "Utils/breakpoints";

export const Wrapper = styled.div`
  height: 365px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
  padding: 0 70px;

  ${Mobile(css`
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    margin: 0px 30px 0 30px;
    padding: 0;
    background-color: #c4c4c4;
  `)}
`;

export const Image = styled.div`
  width: 50%;
  height: 100%;
  background-color: gray;

  ${Mobile(css`
    width: 100%;
    height: 180px;
  `)}
`;

export const TextWrapper = styled.div`
  width: auto;
  height: 100%;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 80px 40px 40px;

  ${Mobile(css`
    width: 100%;
    height: auto;
    padding: 0 20px;
    align-items: center;
  `)}
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-black);
  font-size: var(--font-size-title-xlarge);
  line-height: 1;

  ${Mobile(css`
    font-size: var(--font-size-title);
    margin-top: 35px;
  `)}
`;

export const MainText = styled(Text)`
  text-align: left;
  line-height: 2;
  margin: 25px 0 55px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 40px 0;
    text-align: justify;
    line-height: 1.5;
  `)}
`;

export const Button = styled(InternalLinkButton)`
  width: 170px;
  height: 33px;
  border: none;
  background-color: gray;
  text-transform: uppercase;
  font-size: var(--font-size-short);
  color: black;
  text-align: center;
  padding: 5px;

  ${Mobile(css`
    margin: 40px 0;
  `)}
`;

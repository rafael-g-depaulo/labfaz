import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { Mobile, DesktopSmall } from "Utils/breakpoints";

export const Wrapper = styled.div`
  height: 365px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  //margin-top: 120px;
  padding: 0 120px;

  ${Mobile(css`
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    margin: 0px 30px 0 30px;
    padding: 0;
    background-color: #2a2a2a;
  `)}

  ${DesktopSmall(css`
    height: 320px;
    margin-top: 80px;
    padding: 0 40px;
  `)}
`;

export const Image = styled.img`
  width: 40%;
  height: 100%;
  border-radius: 0 22px 22px 0;
  -webkit-filter: grayscale(100%);
  filter: drop-shadow(0 0 50px 0 rgba(0, 0, 0, 0.5));
  box-shadow: 0 0 50px 0 rgba(9, 9, 9, 1);

  ${Mobile(css`
    width: 100%;
    height: 180px;
  `)}
`;

export const TextWrapper = styled.div`
  width: auto;
  height: 100%;
  background-color: #2a2a2a;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 80px 60px 60px;
  border-radius: 22px 0 0 22px;

  ${Mobile(css`
    width: 100%;
    height: auto;
    padding: 0 20px;
    align-items: center;
  `)}

  ${DesktopSmall(css`
    padding: 15px 50px 15px 30px;
  `)}
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-white);
  font-size: var(--font-size-title-xlarge);
  line-height: 1;

  ${Mobile(css`
    font-size: var(--font-size-title);
    margin-top: 35px;
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-title);
  `)}
`;

export const MainText = styled(Text)`
  color: var(--color-text-white);
  text-align: left;
  line-height: 2;
  margin: 25px 0 40px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 40px 0;
    text-align: justify;
    line-height: 1.5;
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const Button = styled(InternalLinkButton)`
  width: 180px;
  height: 40px;
  //border: none;
  //background-color: gray;
  text-transform: uppercase;
  font-size: var(--font-size-medium);
  //color: black;
  text-align: center;
  padding: 6px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  border-top: none;
  border-left: none;
  border-radius: 5px;

  ${Mobile(css`
    margin: 40px 0;
  `)}
`;

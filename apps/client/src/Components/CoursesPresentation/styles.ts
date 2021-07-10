import styled from "styled-components";
import { Mobile, DesktopSmall } from "Utils/breakpoints";
import { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

export const Container = styled.div`
  background-color: var(--background-black);
  width: 100%;
  height: 970px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  padding: 5%;

  ${Mobile(css`
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 60px 25px;
  `)}

  ${DesktopSmall(css`
    height: 900px;
  `)}
`;

export const TextContainer = styled.div`
  width: 30%;
  height: 100%;
  justify-content: space-between;
  margin-right: 6%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Mobile(css`
    width: 100%;
    justify-content: center;
    margin: 0;
  `)}
`;

export const CoursesTitle = styled(Title)`
  width: 100%;
  font-size: var(--font-size-title);
  color: var(--color-text-beige);
  font-weight: bold;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.2;

  ${Mobile(css`
    text-align: center;
    text-transform: none;
    color: var(--color-text-white);
    margin: 0 0 50px 0;
  `)}
`;

export const CoursesText = styled(Text)`
  color: var(--color-text-white);
  text-align: justify;

  ${Mobile(css`
    font-size: var(--line-height-small);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 25px;
  height: 60px;

  ${Mobile(css`
    margin: 40px 0 50px 0;
    height: 34px;
  `)}

  ${DesktopSmall(css`
    height: 40px;
  `)}
`;

export const ButtonLayer = styled.div`
  width: 280px;
  height: 60px;
  position: relative;
  z-index: 1;
  background-color: var(--background-pink);
  bottom: 63px;
  right: 3px;

  ${Mobile(css`
    width: 160px;
    height: 34px;
    bottom: 36px;
    right: 2px;
  `)}

  ${DesktopSmall(css`
    width: 190px;
    height: 40px;
    bottom: 42px;
    right: 2px;
  `)}
`;

export const Button = styled(InternalLinkButton)`
  position: relative;
  z-index: 2;
  width: 280px;
  height: 60px;
  background-color: var(--background-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border-color: var(--background-black);
  padding: 0;

  ${Mobile(css`
    width: 160px;
    height: 34px;
  `)}

  ${DesktopSmall(css`
    width: 190px;
    height: 40px;
  `)}
`;

export const ButtonText = styled(Text)`  
  color: var(--background-pink);
  text-transform: uppercase;

  ${Mobile(css`
    font-size: var(--font-size-short);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-short);
  `)}
`;

export const Divider = styled.hr`
  height: 300px;
  border-color: var(--background-pink);
  align-self: center;
  margin: 0;

  ${DesktopSmall(css`
    height: 205px;
  `)}
`;

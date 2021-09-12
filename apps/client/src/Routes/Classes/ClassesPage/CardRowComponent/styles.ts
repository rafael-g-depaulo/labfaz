import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { DesktopSmall, Mobile } from "Utils/breakpoints";

interface Props {
  color: string;
}

interface TitleProps {
  fontColor: string;
}

export const Wrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 30px;
  background-image: ${(props) =>
    props.color
      ? props.color
      : "linear-gradient(to bottom, rgba(252, 0, 97, 0.1), rgba(0, 0, 0, 1))"};
  filter: drop-shadow(0 0 20 0 rgba(252, 0, 97, 0.15));
  border-radius: 30px 30px 0 0;
  margin: 0 0 60px 0;

  ${Mobile(css`
    padding: 0;
    margin: 0;
    filter: drop-shadow(0 0 10 0 rgba(250, 250, 250, 0.2));
  `)}
`;

export const MainTitle = styled(Title)<TitleProps>`
  color: ${(props) =>
    props.fontColor ? props.fontColor : "var(--color-text-white)"};
  font-size: var(--font-size-title-xlarge);
  line-height: 1;
  margin: 60px 0 0 60px;

  ${Mobile(css`
    font-size: var(--font-size-title-xlarge);
    margin: 40px 0 20px 23px;
  `)}
`;

export const Subtitle = styled(Text)`
  font-size: var(--font-size-large);
  color: var(--color-text-white);
  text-align: left;
  margin: 35px 60px;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 50px 0 80px 0;
  `)}
`;

export const Divisor = styled.hr<TitleProps>`
  width: 90%;
  border: none;
  background: linear-gradient(to right, ${(props) => props.fontColor}, transparent);
  height: 1px;
  margin: 0 0 40px 0;
  align-self: center;
`;

export const ClassesWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  margin: 0 30px;
  scroll-behavior: smooth;

  ${Mobile(css`
    margin: 0;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
  `)}
`;

export const CardWrapper = styled.div`
  width: 900px;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${Mobile(css`
    width: 300px;
  `)}

  ${DesktopSmall(css`
    width: 580px;
  `)}
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${Mobile(css`
    flex-direction: column;
    padding: 0 21px;
  `)}
`;

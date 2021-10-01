import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { ExternalLinkButton } from "Components/Buttons/ExternalLinkButton";
import { Mobile, DesktopSmall } from "Utils/breakpoints";

export const Wrapper = styled.div`
  height: 365px;
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px auto;
  padding: 0 120px;

  ${Mobile(css`
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    margin: 80px 30px 75px 30px;
    padding: 0;
    background-color: var(--background-light-white);
    border-radius: 15px;
  `)}

  ${DesktopSmall(css`
    height: 320px;
    padding: 0 40px;
  `)}
`;

export const Image = styled.img`
  width: 45%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 22px 22px 0;
  -webkit-filter: drop-shadow(0 0 50px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  box-shadow: 0 0 10px 0 rgba(9, 9, 9, 1) inset;

  ${Mobile(css`
    width: 100%;
    height: 300px;
    border-radius: 0;
    box-shadow: 0 0 10px 0 rgba(9, 9, 9, 0.2);
  `)}
`;

export const TextWrapper = styled.div`
  width: 55%;
  height: 100%;
  background-color: var(--background-dark-dark-gray);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 80px 60px 60px;
  border-radius: 22px 0 0 22px;

  ${Mobile(css`
    width: 100%;
    height: auto;
    padding: 0 15px;
    align-items: center;
    background-color: var(--background-light-white);
    border-radius: 15px;
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
    margin-top: 35px;
    color: var(--color-text-black);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-title);
  `)}
`;

export const MainText = styled(Text)`
  color: var(--color-text-white);
  text-align: left;
  line-height: 2;
  margin: 30px 0 30px 0;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    color: var(--color-text-black);
    margin: 23px 0 30px 0;
    text-align: justify;
    line-height: 1.5;
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const Button = styled(ExternalLinkButton)`
  width: 180px;
  height: 40px;
  text-transform: uppercase;
  font-size: var(--font-size-medium);
  text-align: center;
  padding: 6px;
  border: none;
  border-radius: 2.16px;

  background-color: rbga(297, 0, 97, 1);
  box-shadow: 1px 1px 0px rgba(255, 236, 153, 1);


  :hover {
    box-shadow: 3px 3px 0px rgba(255, 236, 153, 1);
    opacity: 1;
    transition: 500ms;
  }

  ${Mobile(css`
    margin: 27px 0 20px 0;
    font-size: var(--font-size-short);
    color: var(--color-text-black);
    border: none;
    padding: 8px;
    border-radius: 2.16px;
  `)}
`;

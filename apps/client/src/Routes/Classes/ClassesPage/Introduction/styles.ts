import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { DesktopSmall, Mobile, MobileLarge } from "Utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  //padding-bottom: 150px;
  overflow: hidden;

  ${Mobile(css`
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
  `)}
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1;
  padding-right: 60px;
  margin-bottom: 150px;

  ${Mobile(css`
    width: 100%;
    max-width: none;
    padding: 30px 21px 70px 21px;
  `)}

  ${DesktopSmall(css`
    padding-right: 30px;
    margin-bottom: 60px;
  `)}
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-white);
  font-size: var(--font-size-title-xxxlarge);

  ${Mobile(css`
    font-size: var(--font-size-title);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-title);
  `)}
`;

export const TitleText = styled(Text)`
  margin: 40px 0 0 0;
  text-align: left;
  line-height: 2;
  color: var(--color-text-white);
  font-weight: bold;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 35px 0 0 0;
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const Image = styled.img`
  width: 750px;
  height: 720px;
  border-radius: 50%;
  position: relative;
  object-fit: cover;
  object-position: center;
  bottom: 150px;
  right: 70px;
  //margin-bottom: -150px;
  -webkit-filter: grayscale(100%);
  filter: drop-shadow(0 0 100px 5px rgba(255, 255, 255, 0.15));
  box-shadow: 0 4px 60px 0px rgba(250, 250, 250, 0.15);
  
  ${Mobile(css`
    width: 285px;
    height: 268px;
    bottom: 25px;
    right: 90px;
    margin-bottom: -25px;
  `)}

  ${MobileLarge(css`
    width: 385px;
    height: 368px;
    bottom: 45px;
    right: 110px;
    margin-bottom: -45px;
  `)}

  ${DesktopSmall(css`
    width: 450px;
    height: 420px;
    bottom: 60px;
    right: 70px;
    //margin-bottom: -60px;
    margin-right: -30px;
  `)}
`;
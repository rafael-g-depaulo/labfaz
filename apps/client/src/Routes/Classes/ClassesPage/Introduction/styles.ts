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
  align-items: center;
  justify-content: center;
  line-height: 1;
  padding-right: 60px;
  margin-bottom: 150px;

  ${Mobile(css`
    width: 100%;
    padding: 30px 21px 0px 21px;
    margin-bottom: 65px;
    justify-content: flex-start;
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
    width: 100%;
    font-size: var(--font-size-title);
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-title-xlarge);
  `)}
`;

export const TitleText = styled(Text)`
  margin: 80px 0 0 0;
  text-align: center;
  line-height: 2;
  color: var(--color-text-white);
  font-weight: 600;

  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 35px 0 0 0;
    text-align: left;
  `)}

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const Image = styled.img`
  width: 680px;
  height: 650px;
  border-radius: 50%;
  position: relative;
  object-fit: cover;
  object-position: center;
  bottom: 150px;
  right: 80px;
  margin-bottom: -30px;
  -webkit-filter: drop-shadow(0 0 100px rgba(255, 255, 255, 0.15));
  filter: drop-shadow(0 0 100px rgba(255, 255, 255, 0.15));
  box-shadow: 0 4px 4px 0px rgba(250, 250, 250, 0.34) inset;
  
  ${Mobile(css`
    width: 285px;
    height: 268px;
    bottom: 25px;
    right: 90px;
    margin-bottom: -15px;
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
    margin-bottom: 50px;
    margin-right: -30px;
  `)}
`;

import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { Mobile, DesktopSmall } from "Utils/breakpoints";
import {
  DescriptionBox,
  BottomWrapper,
  DateWrapper,
} from "../../../../Components/CoursesPresentation/Card/styles";

export const Container = styled.div`
  width: 260px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-right: 60px;
  border: 5px groove rgba(9, 9, 9, 0.25);
  border-radius: 14px;

  ${Mobile(css`
    margin-right: 30px;
  `)}

  ${DesktopSmall(css`
    margin-right: 50px;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 14px 14px 0 0;
  object-fit: cover;
  object-position: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 3px 0 rgba(9, 9, 9, 0.33);
  background-color: #fafafa;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 13px;
  background-color: #fafafa;
  border-radius: 0 0 14px 14px;

  ${Mobile(css`
    padding: 13px 13px;
  `)}
`;

export const CardTitle = styled(Title)`
  width: 100%;
  text-align: left;
  font-size: var(--font-size-default);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1;
`;

export const DescriptionWrapper = styled(DescriptionBox)`
  margin: 13px 0 15px 0;
  border-radius: 5px;
  height: auto;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.15);
  white-space: normal;
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: inline;
  align-items: flex-start;
`;

export const SubscribeWrapper = styled(BottomWrapper)`
  margin-top: 19px;
  margin-left: 0;
`;

export const DateContainer = styled(DateWrapper)`
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-left: 23px;
  height: 34px;

  ${Mobile(css`
    margin-right: 18px;
    height: 30px;
  `)}

  ${DesktopSmall(css`
    margin-right: 12px;
    height: 30px;
  `)}
`;

export const ButtonLayer = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
  //z-index: 1;
  background-color: #000;
  right: 3px;
  border-radius: 3px;

  ${Mobile(css`
    height: 30px;
    right: 3px;
  `)}

  ${DesktopSmall(css`
    width: 90px;
    height: 30px;
    right: 3px;
  `)}
`;

export const Button = styled(InternalLinkButton)`
  position: relative;
  //z-index: 2;
  bottom: 27px;
  width: 100%;
  height: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: solid 1px #000;
  border-radius: 3px;
  padding: 5px 20px;
  
  ${Mobile(css`
    height: 30px;
    bottom: 27px;
  `)}

  ${DesktopSmall(css`
    padding: 5px 10px;
    width: 90px;
    height: 30px;
    bottom: 27px;
  `)}
`;

export const ButtonText = styled(Text)`
  font-size: var(--font-size-short);
  font-weight: 700;
  color: #000;
  text-transform: uppercase;

  ${DesktopSmall(css`
    font-size: var(--font-size-small);
  `)}
`;

import styled, { css } from "styled-components";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { DesktopSmall } from "Utils/breakpoints";

export const Container = styled.div`
  width: 100%;
  background-color: #2daf2f;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 450px;
  background-color: #2daf2f;
  padding: 50px 97px 0 16px;
  border-radius: 21px 21px 0 0;

  ${DesktopSmall(css`
    height: 400px;
    padding: 50px 57px 0 17px;
  `)}
`;

export const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 21px 21px 0 0;
  filter: drop-shadow(0 0 5px rgba(9, 9, 9, 1));
  object-fit: cover;
  object-position: center;

  ${DesktopSmall(css`
    height: 350px;
  `)}
`;

export const TextContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  padding: 0 80px 0 0;

  ${DesktopSmall(css`
    padding: 0 40px 0 0;
  `)}
`;

export const TextSubContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: #2daf2f;
  padding: 0 15px 15px 15px;
  border-radius: 0 0 15px 15px;
`;

export const TextBackground = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  border-radius: 0 0 15px 15px;
  filter: drop-shadow(0 0 3px rgba(250, 250, 250, 1));
  border: 2px solid #2daf2f;
  border-top: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const SubscribeText = styled(Text)`
  font-size: var(--font-size-title-short);
  font-weight: bold;
  margin-top: 35px;
  text-align: center;

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const SubscribeButton = styled(InternalLinkButton)`
  margin-top: 45px;
  color: black;
  text-transform: uppercase;
  font-size: var(--font-size-default);

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
    margin-top: 35px;
  `)}
`;

export const ActivityContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 60px 30px 0 30px;

  &:last-child {
    padding-bottom: 80px;
  }

  ${DesktopSmall(css`
    padding: 40px 15px 0 15px;
  `)}
`;

export const ActivityTitle = styled(Text)`
  font-size: var(--font-size-title-short);
  margin-bottom: 15px;
  text-align: left;
  font-weight: 600;

  ${DesktopSmall(css`
    font-size: var(--font-size-large);
  `)}
`;

export const ActivityItem = styled.li`
  font-size: var(--font-size-large);
  margin: 0 0 0 15px;
  text-align: left;
  list-style-type: square;
  line-height: 2;

  ${DesktopSmall(css`
    font-size: var(--font-size-medium);
  `)}
`;

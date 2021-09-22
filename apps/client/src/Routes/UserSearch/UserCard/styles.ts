import styled from "styled-components";
import { Title } from "../../../Components/Typography/Title";
import { Text } from "../../../Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

export const Container = styled.div`
  width: 100%;
  height: 510px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 80px;
`;

export const Image = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: drop-shadow(0 0 36px rgba(0, 0, 0, 0.5));
  box-shadow: 0 0 36px 0 rgba(9, 9, 9, 1) inset;
  background-color: #2a2a2a;
  border-radius: 0 15px 15px 0;
`;

export const TextWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #2a2a2a;
  border-radius: 15px 0 0 15px;
`;

export const CardTitle = styled(Title)`
  font-size: var(--font-size-title);
  font-weight: bold;
  text-align: left;
  line-height: 1;
  color: var(--color-text-white-gray);
`;

export const LabelWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 25px 0;
`;

export const Description = styled(Text)`
  width: 90%;
  font-size: var(--font-size-title-short);
  color: var(--color-text-white-gray);
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Button = styled(InternalLinkButton)`
  min-width: 211px;
  min-height: 47px;
  background-color: var(--button-color-pink);
  box-shadow: 4px 4px 0px var(--background-yellow),
    inset 0px 2.88px 2.88px rgba(255, 236, 153, 0.14);
  border-radius: 3.4px;
  border: none;
  margin-top: 30px;

  font-weight: 700;
  font-size: var(--font-size-default);
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    box-shadow: 8px 8px 0px var(--background-yellow),
      inset 0px 2.88px 2.88px rgba(255, 236, 153, 0.14);
    opacity: 0.8;
    transition: 200ms;
  }
`;

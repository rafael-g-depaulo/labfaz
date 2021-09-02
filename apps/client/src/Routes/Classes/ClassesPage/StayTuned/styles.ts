import styled from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

export const Wrapper = styled.div`
  height: 365px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; 
  margin-top: 90px;
  padding: 0 70px;
`;

export const Image = styled.div`
  width: 50%;
  height: 100%;
  background-color: gray;
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
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-black);
  font-size: var(--font-size-title-xlarge);
  line-height: 1;
`;

export const MainText = styled(Text)`
  text-align: left;
  line-height: 2;
  margin: 25px 0 55px 0;
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
`;

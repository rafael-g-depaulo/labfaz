import styled from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(7%, auto) auto minmax(7%, auto);
  grid-template-rows: minmax(5%, auto) auto 100px;
  grid-template-areas:
    ".      .      ."
    ".   content   ."
    ".      .      .";
`;

export const MainContent = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

// styles for first section

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 130px;
`;

export const TitleWrapper = styled.div`
  max-width: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1;
`;

export const SecondaryTitle = styled(Title)`
  font-size: var(--font-size-subtitle);
  margin: 0 0 25px 0;
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-black);
  font-size: var(--font-size-title-xxxlarge);
`;

export const TitleText = styled(Text)`
  margin: 50px 0 0 0;
  text-align: left;
  line-height: 2;
`;

export const TitleButton = styled(InternalLinkButton)`
  font-size: var(--font-size-medium);
  text-transform: uppercase;
  margin-top: 35px;
`;

// styles for second section

export const ClassesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

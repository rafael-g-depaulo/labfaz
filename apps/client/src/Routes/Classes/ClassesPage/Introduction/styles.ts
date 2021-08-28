import styled from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";

export const TitleWrapper = styled.div`
  max-width: 38%;
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

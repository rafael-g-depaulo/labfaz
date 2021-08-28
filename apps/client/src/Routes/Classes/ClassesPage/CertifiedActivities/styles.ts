import styled from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  line-height: 1;
`;

export const MainTitle = styled(Title)`
  color: var(--color-text-black);
  font-size: var(--font-size-title-xlarge);
`;

export const MainText = styled(Text)`
  text-align: left;
  line-height: 2;
  margin-top: 10px;
`;

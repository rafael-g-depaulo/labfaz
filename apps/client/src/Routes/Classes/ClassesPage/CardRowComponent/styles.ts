import styled from "styled-components";
import { Title } from "Components/Typography/Title";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 70px;
`;

export const MainTitle = styled(Title)`
  color: black;
  font-size: var( --font-size-title-xlarge);
  line-height: 1;
  margin: 90px 0 70px 0;
`;

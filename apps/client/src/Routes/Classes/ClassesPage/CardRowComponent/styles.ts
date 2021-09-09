import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Mobile } from "Utils/breakpoints";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 70px;

  ${Mobile(css`
    padding: 0 30px;
    align-items: center;
  `)}
`;

export const MainTitle = styled(Title)`
  color: black;
  font-size: var(--font-size-title-xlarge);
  line-height: 1;
  margin: 90px 0 70px 0;

  ${Mobile(css`
    font-size: var(--font-size-title);
    margin: 70px 0 30px 0;
  `)}
`;

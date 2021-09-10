import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Mobile } from "Utils/breakpoints";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MainContent = styled.div`
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
  margin-bottom: 90px;
  background-color: var(--background-black);

  ${Mobile(css`
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
  `)}
`;

export const MainClass = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 30px 70px 30px;
`;

export const MainClassTitle = styled(Title)`
  font-size: var(--font-size-title);
  margin: 0 0 30px 0;
`;

// styles for second section

export const ClassesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

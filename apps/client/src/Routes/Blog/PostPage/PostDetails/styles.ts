import styled, { css } from "styled-components";
import { Mobile } from "Utils/breakpoints";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";

interface DateProps {
  size: string;
}

export const Container = styled.div`
  background-color: var(--background-black);
  display: grid;
  width: 100%;
  grid-template-columns: minmax(5%, auto) minmax(450px, 800px) minmax(5%, auto);
  grid-template-rows: minmax(0, 3fr) auto;
  grid-template-areas:
    ". content ."
    ".    .    .";
  ${Mobile(css`
    grid-template-columns: minmax(8%, auto) minmax(250px, 700px) minmax(
        8%,
        auto
      );
  `)}
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 100px 0 0 0;
  
  ${Mobile(css`
    flex-direction: column;
    align-items: center;
    margin: 60px 0 0 0;   
  `)}
`;

export const MainTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const PostTitle = styled(Title)`
  font-size: var(--font-size-title);
  font-weight: bold;
  color: var(--background-white);
  text-align: left;
  margin: 0 25px 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;
  ${Mobile(css`
    font-size: var(--font-size-title-small);
    margin: 0;
    line-height: 1.5;
  `)}
`;

export const Divisor = styled.hr`
  height: 70px;
  margin: 5px 0;
  border-color: var(--background-pink);
  ${Mobile(css`
    height: 35px;
    margin: 0;
  `)}
`;

export const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  ${Mobile(css`    
    margin: 25px 0 0 0;
  `)}
`;

export const DateContainer = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 25px;
  ${Mobile(css`
    width: auto;
    margin: 0;
  `)}
`;

export const Date = styled(Text)<DateProps>`
  width: 100%;
  font-size: ${(p) => (p.size ? p.size : "var(--font-size-subtitle)")};
  font-weight: 600;
  color: var(--color-text-pink);
  text-align: center;
  margin: 0 0 10px 0;
  line-height: 1.2;
  ${Mobile(css`
    font-size: var(--font-size-medium);
    margin: 0 0 5px 0;
  `)}
`;

import styled from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";

interface GridProps {
  width: string;
  height: string;
}

export const Container = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.width};
  grid-template-rows: ${(props) => props.height};
  grid-template-areas:
    "imge    imge    imge"
    ".    text    .";
  border: 2px solid black;
  margin-left: 12%;
`;

export const Image = styled.div`
  grid-area: imge;
  background-color: gray;
`;

export const TextWrapper = styled.div`
  grid-area: text;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 15px 0;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled(Title)`
  text-align: left;
  font-size: var(--font-size-large);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 10px;
`;

export const CardDate = styled(Title)`
  text-align: right;
  font-size: var(--font-size-large);
  color: gray;
`;

export const CardText = styled(Text)`
  margin: 20px 0 0 0;
  width: 100%;
  text-align: justify;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

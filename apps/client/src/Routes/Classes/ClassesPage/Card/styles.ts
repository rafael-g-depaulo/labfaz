import styled, { css } from "styled-components";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { Mobile } from "Utils/breakpoints";

interface GridProps {
  width: string;
  height: string;
  marginLeft: string;
}

interface TextProps {
  titleSize: string;
  textSize: string;
}

export const Container = styled.div<GridProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-left: ${(props) => props.marginLeft};
`;

export const Image = styled.div`
  width: 100%;
  height: 60%;
  background-color: gray;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 26px;
  background-color: #c4c4c4;

  ${Mobile(css`
    padding: 13px 13px;
  `)}
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled(Title)<TextProps>`
  text-align: left;
  font-size: ${(props) => props.titleSize};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-right: 10px;
`;

export const CardDate = styled(Title)<TextProps>`
  text-align: right;
  font-size: ${(props) => props.titleSize};
`;

export const CardText = styled(Text)<TextProps>`
  margin: 20px 0 0 0;
  width: 100%;
  text-align: justify;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: ${(props) => props.textSize};

  ${Mobile(css`
    margin: 10px 0 0 0;
    -webkit-line-clamp: 3;
    line-height: 1.5;
  `)}
`;

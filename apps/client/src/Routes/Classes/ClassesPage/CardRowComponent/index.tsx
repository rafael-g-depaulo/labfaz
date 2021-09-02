import React, { FC } from "react";
import { MainTitle, Wrapper } from "./styles";
import Card from "../Card";
import { CardProps } from "../Card";
import { ClassesWrapper } from "../styles";

export interface Props {
  title: string;
  classes: CardProps[];
}

export const CardRowComponent: FC<Props> = ({ title, classes }) => {
  return (
    <Wrapper>
      <MainTitle>{title}</MainTitle>
      <ClassesWrapper>
        {classes.map((item) => (
          <Card
            title={item.title}
            date={item.date}
            description={item.description}
            width={item.width}
            height={item.height}
            marginLeft={item.marginLeft}
            titleSize={item.titleSize}
            textSize={item.textSize}
          />
        ))}
      </ClassesWrapper>
    </Wrapper>
  );
};

export default CardRowComponent;

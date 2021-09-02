import React, { FC } from "react";
import { MainTitle, MainText, Wrapper } from "./styles";
import { ClassesWrapper } from "../styles";

import Card from "../Card";

export const CertifiedActivities: FC = () => {
  const middleClasses = [
    {
      title: "O que é audio visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      title: "O que é audio?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      title: "O que é visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      title: "O que é visual?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
  ];

  return (
    <Wrapper>
      <MainTitle>Atividades Certificadas</MainTitle>
      <MainText>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus.
      </MainText>
      <ClassesWrapper>
        {middleClasses.map((item) => {
          return (
            <Card
              title={item.title}
              date={item.date}
              description={item.description}
              width="256px"
              height="320px"
              marginLeft="0px"
              titleSize="var(--font-size-short)"
              textSize="var(--font-size-small)"
            />
          );
        })}
      </ClassesWrapper>
    </Wrapper>
  );
};

export default CertifiedActivities;

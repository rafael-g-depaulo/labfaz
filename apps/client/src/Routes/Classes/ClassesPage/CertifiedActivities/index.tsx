import React, { FC } from "react";
import { MainTitle, MainText, Wrapper } from "./styles";

import CardCarousel from "Components/CardCarousel";
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
      title: "O que é?",
      date: "12/12/2021",
      description:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    },
    {
      title: "O que é?",
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
      <CardCarousel
        children={middleClasses.map((item) => (
          <Card
            title={item.title}
            date={item.date}
            description={item.description}
            width="minmax(2%, auto) minmax(230px, 296px) minmax(2%, auto)"
            height="minmax(150px, 185px) auto"
          />
        ))}
      />
    </Wrapper>
  );
};

export default CertifiedActivities;

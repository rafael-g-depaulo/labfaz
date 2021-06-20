import React, { FC } from "react";
import { Container, CardContainer, MainText, CardImage } from "./styles";
import image from "./perfil.jpg";

interface CardExample {
  id: number;
  image: string;
  title: string;
  date: string;
  description: string;
}

interface CardProps {
  screenWidth: number;
}

const example: CardExample[] = [
  {
    id: 1,
    image: image,
    title: "Vou mudar de curso",
    date: "31/02/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 2,
    image: image,
    title: "Tisti e sozinha",
    date: "31/02/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 3,
    image: image,
    title: "Cansei",
    date: "21/02/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 4,
    image: image,
    title: "Tô com fome",
    date: "35/06/2022",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
];

const Card: FC<CardProps> = (props): JSX.Element => {
  return (
    <Container>
      {example.map((item, index) => {
        // Show only two cards if it's a mobile screen
        if (props.screenWidth < 1024 && index > 1) {
          return <React.Fragment key={index} />;
        } else {
          return (
            <React.Fragment key={index}>
              <CardContainer>
                <CardImage src={item.image} alt="image" />
                <MainText>
                  <p>{item.title}</p>
                  <p>{item.date}</p>
                </MainText>
                <p>{item.description}</p>
              </CardContainer>
            </React.Fragment>
          );
        }
      })}
    </Container>
  );
};

export default Card;

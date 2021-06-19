import React, { FC } from "react";
import { Container, TextContainer } from "./styles";
import Card from "./Card";

const CoursesPresentation: FC = () => {
  return (
    <Container>
      <TextContainer>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
      </TextContainer>
      <Card />
    </Container>
  );
};

export default CoursesPresentation;

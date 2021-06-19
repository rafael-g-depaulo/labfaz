import React, { FC } from "react";
import { Container, CardContainer, MainText, CardImage } from "./styles";
import image from "./perfil.jpg";

export interface Props {
  column: any;
  row: any;
}

const Card: FC = () => {
  return (
    <Container>
      <CardContainer column={1} row={1}>
        <CardImage src={image} alt="image" />
        <MainText>
          <p>audio</p>
          <p>19/06/2021</p>
        </MainText>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{" "}
        </p>
      </CardContainer>
      <CardContainer column={3} row={1}>
        <CardImage src={image} alt="image" />
        <MainText>
          <p>audio</p>
          <p>19/06/2021</p>
        </MainText>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{" "}
        </p>
      </CardContainer>
      <CardContainer column={1} row={3}>
        <CardImage src={image} alt="image" />
        <MainText>
          <p>audio</p>
          <p>19/06/2021</p>
        </MainText>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{" "}
        </p>
      </CardContainer>
      <CardContainer column={3} row={3}>
        <CardImage src={image} alt="image" />
        <MainText>
          <p>audio</p>
          <p>19/06/2021</p>
        </MainText>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.{" "}
        </p>
      </CardContainer>
    </Container>
  );
};

export default Card;

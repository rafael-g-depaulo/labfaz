import React, { FC, Fragment } from "react";
import {
  Container,
  Content,
  MainTextContainer,
  Title,
  Description,
  Image,
  Button,
  ButtonText,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import Test from "./perfil.jpg";

export const PostCard: FC = () => {
  return (
    <Fragment>
      <Container>
        <Content>
          <MainTextContainer>
            <Title>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Description>
            <Image src={Test} alt="example" />
            <Button>
              <ButtonText>leia mais</ButtonText>
            </Button>
          </MainTextContainer>
          <Divisor />
          <DateContainer>
            <Date>Segunda</Date>
            <Date>14:00</Date>
          </DateContainer>
        </Content>
      </Container>
    </Fragment>
  );
};

export default PostCard;

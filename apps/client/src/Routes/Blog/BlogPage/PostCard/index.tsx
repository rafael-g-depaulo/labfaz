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
  ButtonWrapper,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import Test from "./perfil.jpg";
import useMobile from "Utils/useMobile";

export const PostCard: FC = () => {
  const isMobile = useMobile();

  return (
    <Fragment>
      <Container>
        {isMobile ? (
          <Content>
            <MainTextContainer>
              <Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec.
              </Description>
              <Image src={Test} alt="example" />
            </MainTextContainer>
            <ButtonWrapper>
              <Button>
                <ButtonText>leia mais</ButtonText>
              </Button>
              <Divisor />
              <DateContainer>
                <Date>Segunda</Date>
                <Date>14:00</Date>
              </DateContainer>
            </ButtonWrapper>
          </Content>
        ) : (
          <Content>
            <MainTextContainer>
              <Title>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Title>
              <Description>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec.
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
        )}
      </Container>
    </Fragment>
  );
};

export default PostCard;

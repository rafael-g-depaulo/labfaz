import React, { FC } from "react";
import { Container, TextContainer, Title, Text } from "./styles";
import { useMobile } from "Utils/useMobile";
import { useCoursePresentations } from "Api/CoursePresentation";
import Card from "./Card";

const CoursesPresentation: FC = () => {
  const isMobile = useMobile();
  const { data, error, isLoading } = useCoursePresentations();

  return (
    // Change the layout according to the screen's width
    <Container>
      {isMobile ? (
        <>
          <TextContainer>
            <Title>Lorem Ipsum</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Text>
            <Card courses={data!} isMobile={isMobile} />
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </Text>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <Title>Lorem Ipsum</Title>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </Text>
          </TextContainer>
          <Card courses={data!} isMobile={isMobile} />
        </>
      )}
    </Container>
  );
};

export default CoursesPresentation;

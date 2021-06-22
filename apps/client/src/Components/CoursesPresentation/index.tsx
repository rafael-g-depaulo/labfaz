import React, { FC } from "react";
import { Container, TextContainer } from "./styles";
import { useWidth } from "Hooks/useWidth";
import { useCoursePresentations } from "Api/CoursePresentation";
import Card from "./Card";

const CoursesPresentation: FC = () => { 
  const windowWidth = useWidth();
  const { data, error, isLoading } = useCoursePresentations()
  
  return (
    // Change the layout according to the screen's width
    <Container>
      {windowWidth > 1023 ? (
        <>
          <TextContainer>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
          </TextContainer>
          <Card screenWidth={windowWidth} courses={data!} />
        </>
      ) : (
        <>
          <TextContainer>
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec.
            </p>
            <Card screenWidth={windowWidth} courses={data!} />
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus.
            </p>
          </TextContainer>
        </>
      )}
    </Container>
  );
};

export default CoursesPresentation;

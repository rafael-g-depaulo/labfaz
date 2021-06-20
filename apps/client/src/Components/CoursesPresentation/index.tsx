import React, { FC, useState, useEffect } from "react";
import { Container, TextContainer } from "./styles";
import Card from "./Card";

const CoursesPresentation: FC = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // Function to see what is the user's screen dimensions
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  // Finds out the screen dimensions every time it resizes
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // Change the layout according to the screen's width
    <Container>
      {windowDimensions.width > 1023 ? (
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
          <Card screenWidth={windowDimensions.width} />
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
            <Card screenWidth={windowDimensions.width} />
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

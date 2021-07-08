import React, { FC } from "react";
import {
  Container,
  Divider,
  TextContainer,
  Title,
  Text,
  ButtonWrapper,
  ButtonLayer,
  Button,
  ButtonText,
} from "./styles";
import { useMobile } from "Utils/useMobile";
import Card from "./Card";
import { Homepage } from "Api/Homepage";
import { CoursePresentation } from "Api/CoursePresentation";

interface DisplayProps {
  texts: Homepage;
  courses: CoursePresentation[];
}

const Display: FC<DisplayProps> = ({ texts, courses }) => {
  const isMobile = useMobile();

  return (
    // Change the layout according to the screen's width
    <Container>
      {isMobile ? (
        <>
          <TextContainer>
            <Title>{texts.course_presentation_title}</Title>
            <Text>{texts.course_presentation_first_text}</Text>
            <Card courses={courses} isMobile={isMobile} />
            <ButtonWrapper>
              <Button>
                <ButtonText>visitar cursos</ButtonText>
              </Button>
              <ButtonLayer />
            </ButtonWrapper>
            <Text>{texts.course_presentation_second_text}</Text>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <Title>{texts.course_presentation_title}</Title>
            <Text>{texts.course_presentation_first_text}</Text>
            <Text>{texts.course_presentation_second_text}</Text>
            <ButtonWrapper>
              <Button>
                <ButtonText>visitar cursos</ButtonText>
              </Button>
              <ButtonLayer />
            </ButtonWrapper>
          </TextContainer>
          <Divider />
          <Card courses={courses} isMobile={isMobile} />
        </>
      )}
    </Container>
  );
};

export default Display;

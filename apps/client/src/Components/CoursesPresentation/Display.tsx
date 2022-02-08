import { FC } from "react";
import {
  Container,
  Divider,
  TextContainer,
  CoursesTitle,
  CoursesText,
  ButtonWrapper,
  ButtonLayer,
  Button,
  ButtonText,
} from "./styles";
import { useMobile } from "Hooks/useMobile";
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
            <CoursesTitle level={1}>
              {texts.course_presentation_title}
            </CoursesTitle>
            <CoursesText>{texts.course_presentation_first_text}</CoursesText>
            <Card courses={courses} isMobile={isMobile} />
            <ButtonWrapper>
              <Button href="">
                <ButtonText>visitar cursos</ButtonText>
              </Button>
              <ButtonLayer />
            </ButtonWrapper>
            <CoursesText>{texts.course_presentation_second_text}</CoursesText>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <CoursesTitle level={1}>
              {texts.course_presentation_title}
            </CoursesTitle>
            <CoursesText>{texts.course_presentation_first_text}</CoursesText>
            <CoursesText>{texts.course_presentation_second_text}</CoursesText>
            <ButtonWrapper>
              <Button href="">
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

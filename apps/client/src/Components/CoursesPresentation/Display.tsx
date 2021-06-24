import React, { FC } from "react";
import { Container, TextContainer, Title, Text } from "./styles";
import { useMobile } from "Utils/useMobile";
import { useCoursePresentations } from "Api/CoursePresentation";
import Card from "./Card";
import { Homepage } from "Api/Homepage";

interface DisplayProps {
  texts: Homepage;
}

const Display: FC<DisplayProps> = ({ texts }) => {
  const isMobile = useMobile();
  const { data, error, isLoading } = useCoursePresentations();

  return (
    // Change the layout according to the screen's width
    <Container>
      {isMobile ? (
        <>
          <TextContainer>
            <Title>{texts.course_presentation_title}</Title>
            <Text>{texts.course_presentation_first_text}</Text>
            <Card courses={data!} isMobile={isMobile} />
            <Text>{texts.course_presentation_second_text}</Text>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <Title>{texts.course_presentation_title}</Title>
            <Text>{texts.course_presentation_first_text}</Text>
            <Text>{texts.course_presentation_second_text}</Text>
          </TextContainer>
          <Card courses={data!} isMobile={isMobile} />
        </>
      )}
    </Container>
  );
};

export default Display;

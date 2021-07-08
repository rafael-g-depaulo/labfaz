import React, { FC } from "react";
import {
  Container,
  CardContainer,
  MainText,
  CardImage,
  DescriptionBox,
  CardDescription,
  CardTitle,
  CardSubtitle,
  BottomWrapper,
  DateWrapper,
  DateText,
  ButtonWrapper,
  ButtonLayer,
  Button,
  ButtonText,
} from "./styles";
import { CoursePresentation } from "Api/CoursePresentation";
import { format } from "date-fns";

interface DisplayProps {
  courses: CoursePresentation[];
  isMobile: boolean;
}

const Card: FC<DisplayProps> = ({ courses, isMobile }): JSX.Element => {
  const gridPositions = [
    { column: 1, row: 1 },
    { column: 1, row: 3 },
    { column: 3, row: 1 },
    { column: 3, row: 3 },
  ];

  return (
    <Container>
      {courses?.map((item, index) => {
        // Show only two cards if it's a mobile screen
        if (isMobile && index > 1) {
          return <React.Fragment key={index} />;
        } else {
          return (
            <React.Fragment key={index}>
              <CardContainer position={gridPositions[index]}>
                <CardImage
                  src={item?.banner_image?.url}
                  alt={item?.banner_image?.name}
                />
                <MainText>
                  <CardTitle>{item?.title}</CardTitle>
                  <CardSubtitle>{item?.subtitle}</CardSubtitle>
                  <DescriptionBox>
                    <CardDescription>{item?.description}</CardDescription>
                  </DescriptionBox>
                  <BottomWrapper>
                    <DateWrapper>
                      <DateText>
                        {item?.finished ? "Encerrado em" : "Aberto até"}
                      </DateText>
                      <DateText>
                        {format(item?.finish_date, "DD-MM-YYYY")
                          .replace("-", "/")
                          .replace("-", "/")}
                      </DateText>
                    </DateWrapper>
                    <ButtonWrapper>
                      <ButtonLayer
                        colors={
                          item?.finished
                            ? "var(--background-pink)"
                            : "var(--background-black)"
                        }
                        border="none"
                      />
                      <Button
                        colors={
                          item?.finished
                            ? "var(--background-pink)"
                            : "var(--background-light-pink)"
                        }
                        border={
                          item?.finished
                            ? "var(--background-black)"
                            : "var(--background-pink)"
                        }
                      >
                        <ButtonText
                          colors={
                            item?.finished
                              ? "var(--color-text-black)"
                              : "var(--background-pink)"
                          }
                          border="none"
                        >
                          {item?.finished ? "saiba mais" : "inscreva-se"}
                        </ButtonText>
                      </Button>
                    </ButtonWrapper>
                  </BottomWrapper>
                </MainText>
              </CardContainer>
            </React.Fragment>
          );
        }
      })}
    </Container>
  );
};

export default Card;

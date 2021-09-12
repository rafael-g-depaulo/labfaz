import React, { FC, useRef } from "react";
import {
  MainTitle,
  Wrapper,
  Subtitle,
  Divisor,
  ClassesWrapper,
  CardWrapper,
  IconContainer,
} from "./styles";
import Card from "../Card";
import { CardProps } from "../Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import useMobile from "Utils/useMobile";

export interface Props {
  title: string;
  classes: CardProps[];
  color: string;
  fontColor: string;
}

export const CardRowComponent: FC<Props> = ({
  title,
  classes,
  color,
  fontColor,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleNav = (direction: string) => {
    if (direction === "left") {
      return cardRef ? (cardRef.current!.scrollLeft -= 250) : null;
    } else {
      return cardRef ? (cardRef.current!.scrollLeft += 250) : null;
    }
  };

  const isMobile = useMobile();

  return (
    <Wrapper color={color}>
      <MainTitle fontColor={fontColor}>{title}</MainTitle>
      {isMobile ? (
        <Divisor fontColor={fontColor}/>
      ) : (
        <Subtitle>Novas atividades de diversas áreas todos os meses </Subtitle>
      )}
      <IconContainer>
        {isMobile ? (
          <></>
        ) : (
          <FaChevronLeft
            color="#FFFFFF"
            size="30px"
            onClick={() => handleNav("left")}
            cursor="pointer"
          />
        )}
        <ClassesWrapper ref={cardRef}>
          <CardWrapper>
            {classes.map((item) => (
              <Card
                title={item.title}
                date={item.date}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </CardWrapper>
        </ClassesWrapper>
        {isMobile ? (
          <></>
        ) : (
          <FaChevronRight
            color="#FFFFFF"
            size="30px"
            onClick={() => handleNav("right")}
            cursor="pointer"
          />
        )}
        {isMobile ? (
          <Subtitle>
            Novas atividades de diversas áreas todos os meses{" "}
          </Subtitle>
        ) : (
          <></>
        )}
      </IconContainer>
    </Wrapper>
  );
};

export default CardRowComponent;

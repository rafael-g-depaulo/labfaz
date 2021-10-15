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

import { Course } from "Api/Courses";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import useMobile from "Hooks/useMobile";

export interface Props {
  title: string;
  subtitle: string;
  classes: Course[];
  color: string;
  fontColor: string;
}

export const CardRowComponent: FC<Props> = ({
  title,
  subtitle,
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
        <Divisor fontColor={fontColor} />
      ) : (
        <Subtitle>{subtitle}</Subtitle>
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
                {...item}
                key={item.id}
                id={item.id}
                name={item.name}
                tag={item.tags[0]}
                short_description={item.short_description}
                available={item.available}
                banner={item.banner}
                has_subscription={item.has_subscription}
                subscription_finish_date={item.subscription_finish_date}
                subscription_start_date={item.subscription_start_date}
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
        {isMobile ? <Subtitle>{subtitle}</Subtitle> : <></>}
      </IconContainer>
    </Wrapper>
  );
};

export default CardRowComponent;

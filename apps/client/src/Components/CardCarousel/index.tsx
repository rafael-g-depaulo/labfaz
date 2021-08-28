import React, { FC } from "react";
import { useState } from "react";
import { ButtonWrapper } from "Routes/Blog/BlogPage/PostCard/styles";
import styled, { css } from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

interface ICarouselSlide {
  active?: boolean;
}

const CarouselSlide = styled.div<ICarouselSlide>`
  flex: 0 0 auto;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.5s ease;
`;

interface ICarouselProps {
  currentSlide: number;
}

const CarouselSlides = styled.div<ICarouselProps>`
  display: flex;
  ${(props) =>
    props.currentSlide &&
    css`
      transform: translateX(-${props.currentSlide * 100}%);
    `};
  transition: all 0.5s ease;
`;

interface IProps {
  children: JSX.Element[];
}

export const CardCarousel = ({ children }: IProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const activeSlide = children.map((slide, index) => (
    <CarouselSlide active={index < 4} key={index}>
      {slide}
    </CarouselSlide>
  ));

  return (
    <>
      <CarouselWrapper>
        <CarouselSlides currentSlide={currentSlide}>
          {activeSlide}
        </CarouselSlides>
      </CarouselWrapper>
      <ButtonWrapper>
        <button
          onClick={() => {
            setCurrentSlide(
              (currentSlide - 3 + activeSlide.length) % activeSlide.length
            );
          }}
        >
          Left
        </button>
        <button
          onClick={() => {
            setCurrentSlide((currentSlide + 4) % activeSlide.length);
          }}
        >
          Right
        </button>
      </ButtonWrapper>
    </>
  );
};

export default CardCarousel;

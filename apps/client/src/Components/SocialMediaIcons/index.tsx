import React, { FC } from "react";
import { Wrapper, ShareText, IconsWrapper, IconDiv } from "./styles";
import {
  AiFillLinkedin,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
  AiFillFacebook,
  AiOutlineWhatsApp
} from "react-icons/ai";

import { useMobile } from "Utils/useMobile";

export const SocialMediaIcons: FC = () => {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <IconsWrapper>
          <IconDiv href="">
            <AiOutlineWhatsApp color="var(--color-text-pink)" size="30px" />
          </IconDiv>
          <IconDiv href="">
            <AiFillFacebook color="var(--color-text-pink)" size="34px" />
          </IconDiv>
          <IconDiv href="">
            <AiFillTwitterSquare color="var(--color-text-pink)" size="34px" />
          </IconDiv>          
        </IconsWrapper>
      ) : (
        <Wrapper>
          <ShareText>compartilhe</ShareText>
          <IconsWrapper>
            <IconDiv href="">
              <AiFillFacebook color="var(--color-text-pink)" size="42px" />
            </IconDiv>
            <IconDiv href="">
              <AiFillTwitterSquare color="var(--color-text-pink)" size="42px" />
            </IconDiv>
            <IconDiv href="">
              <AiFillGooglePlusSquare
                color="var(--color-text-pink)"
                size="42px"
              />
            </IconDiv>
            <IconDiv href="">
              <AiFillLinkedin color="var(--color-text-pink)" size="42px" />
            </IconDiv>
          </IconsWrapper>
        </Wrapper>
      )}
    </>
  );
};

export default SocialMediaIcons;

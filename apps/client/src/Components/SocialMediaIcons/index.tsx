import React, { FC } from "react";
import { Wrapper, ShareText, IconsWrapper, IconDiv } from "./styles";
import {
  AiFillLinkedin,
  AiFillGooglePlusSquare,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

export const SocialMediaIcons: FC = () => {
  return (
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
          <AiFillGooglePlusSquare color="var(--color-text-pink)" size="42px" />
        </IconDiv>
        <IconDiv href="">
          <AiFillLinkedin color="var(--color-text-pink)" size="42px" />
        </IconDiv>
      </IconsWrapper>
    </Wrapper>
  );
};

export default SocialMediaIcons;

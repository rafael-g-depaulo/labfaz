import React, { FC } from "react"

import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import { navLinks } from "Utils/navLinks";

import Image from "../Image";
import {
  TitleText,
  TextWrapper,
  Rectangle2,
  Content,
} from "./style";


export const Web: FC = () => {
  return (
    <Content>
      <Rectangle2>
        <Image />
        <TextWrapper>
          <TitleText>Email confirmado</TitleText>
          <InternalLinkButton className="empty-black" href={navLinks.login.path}>CLIQUE PARA ENTRAR</InternalLinkButton>
        </TextWrapper>
      </Rectangle2>
    </Content>
  );
};

export default Web;

import { FC } from "react"

import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import Wireframe from "Components/Wireframe"
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
    <Wireframe>
      <Content>
        <Rectangle2>
          <Image />
          <TextWrapper>
            <TitleText>Email confirmado</TitleText>
            <InternalLinkButton className="empty-black" href={navLinks.login.path}>CLIQUE PARA ENTRAR</InternalLinkButton>
          </TextWrapper>
        </Rectangle2>
      </Content>
    </Wireframe>
  );
};

export default Web;

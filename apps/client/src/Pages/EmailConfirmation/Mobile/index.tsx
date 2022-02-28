import { FC } from "react";
import Image from "../Image";
import {
  ErrorContainer,
  TitleText,
  SubtitleText,
  MobileRectangle,
  ImageRectangle,
  TopWrapper,
} from "./styles";
import { InternalLinkButton } from "Components/Buttons/InternalLinkButton";
import Wireframe from "Components/Wireframe"
import { navLinks } from "Utils/navLinks";

export const Mobile: FC = () => {
  return (  
    <Wireframe>
      <ErrorContainer>
        <TopWrapper>
          <ImageRectangle>
            <Image />
          </ImageRectangle>
        </TopWrapper>
        <MobileRectangle invert={true}>
          <SubtitleText level={2}>
            <InternalLinkButton className="empty-black" href={navLinks.login.path}>ENTRAR</InternalLinkButton>
          </SubtitleText>
          <TitleText level={1}>Email confirmado</TitleText>
        </MobileRectangle>
      </ErrorContainer>
    </Wireframe>
  );
};

export default Mobile;

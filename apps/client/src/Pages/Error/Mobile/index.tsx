import React, { FC } from "react";

import Header from "Pages/Construction/Header";
import Footer from "Pages/Construction/Footer";
import Image from "../Image";
//import { Rectangle } from "Pages/Construction/Mobile/style";
import {
  ErrorContainer,
  TitleText,
  SubtitleText,
  MobileRectangle,
  ImageRectangle
} from "./styles";
import { SocialNetworksLabfaz } from "Api/SocialNetworksLabfaz";

export interface Props {
  data: SocialNetworksLabfaz;
}

export const Mobile: FC<Props> = ({ data }) => {
  return (
    <ErrorContainer>
      <Header data={data} />
      <div>
        <ImageRectangle>
          <Image />
        </ImageRectangle>
        <MobileRectangle invert={true}>
          <SubtitleText level={2}>
            Error 401:
            <br /> Acesso negado devido a credenciais não válidas.
          </SubtitleText>
          <TitleText level={1}>
            Ops...
            <br />
            Parece que algo deu errado
          </TitleText>
        </MobileRectangle>
      </div>
      <Footer />
    </ErrorContainer>
  );
};

export default Mobile;

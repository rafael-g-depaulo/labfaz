import React, { FC } from "react";

import Wireframe from "Components/Wireframe";
import Image from "../Image";
import {
  TitleText,
  TextWrapper,
  SubtitleText,
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
            <TitleText>
              Ops...
              <br />
              Parece que algo deu errado
            </TitleText>
            <SubtitleText>
              Error 401:
              <br /> Acesso negado devido a credenciais não válidas.
            </SubtitleText>
          </TextWrapper>
        </Rectangle2>
      </Content>
    </Wireframe>
  );
};

export default Web;

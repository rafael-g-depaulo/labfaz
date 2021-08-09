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

export interface Props {
  status: number | undefined;
  message: string | undefined;
}

export const Web: FC<Props> = ({ status, message }) => {
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
              Error {status !== undefined ? status : 401}:
              <br />{" "}
              {message !== undefined
                ? message
                : "Acesso negado devido a credenciais não válidas."}
            </SubtitleText>
          </TextWrapper>
        </Rectangle2>
      </Content>
    </Wireframe>
  );
};

export default Web;

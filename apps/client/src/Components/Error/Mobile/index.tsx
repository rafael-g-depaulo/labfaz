import React, { FC } from "react";
import Image from "../Image";
import {
  ErrorContainer,
  TitleText,
  SubtitleText,
  MobileRectangle,
  ImageRectangle,
  TopWrapper,
} from "./styles";

export interface Props {
  status: number | undefined;
  message: string | undefined;
}

export const Mobile: FC<Props> = ({ status, message }) => {
  return (
    <ErrorContainer>
      <TopWrapper>
        <ImageRectangle>
          <Image />
        </ImageRectangle>
      </TopWrapper>
      <MobileRectangle invert={true}>
        <SubtitleText level={2}>
          Error {status !== undefined ? status : 401}:
          <br />{" "}
          {message !== undefined
            ? message
            : "Acesso negado devido a credenciais não válidas."}
        </SubtitleText>
        <TitleText level={1}>
          Ops...
          <br />
          Parece que algo deu errado
        </TitleText>
      </MobileRectangle>
    </ErrorContainer>
  );
};

export default Mobile;

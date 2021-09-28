import React, { FC } from "react";

import { Container, LabelText, LabelImage } from "./styles";

export interface LabelProps {
  name: string;
  image: string | undefined;
  lightMode: boolean;
}

export const Label: FC<LabelProps> = ({ name, image, lightMode }) => {
  return (
    <Container lightMode={lightMode}>
      <LabelImage src={image} alt="" icon={image ? true : false} />
      <LabelText lightMode={lightMode}>{name}</LabelText>
    </Container>
  );
};

export default Label;

import React, { FC } from "react";

import { Container, LabelText, LabelImage } from "./styles";

export interface LabelProps {
  name: string;
  image: string | undefined;
}

export const Label: FC<LabelProps> = ({ name, image }) => {
  return (
    <Container>
      <LabelImage src={image} alt="" icon={image ? true : false} />
      <LabelText>{name}</LabelText>
    </Container>
  );
};

export default Label;

import { FC } from "react";

import { Container, LabelText, LabelImage } from "./styles";

export interface LabelProps {
  name: string;
  image?: string;
  lightMode?: boolean;
}

export const Label: FC<LabelProps> = ({ name, image, lightMode = false }) => {
  return (
    <Container lightMode={lightMode}>
      { image && <LabelImage src={image} alt="" icon /> }
      <LabelText lightMode={lightMode}>{name}</LabelText>
    </Container>
  );
};

export default Label;

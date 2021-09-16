import React, { FC } from "react";

import { Container, MainTitle, Subtitle, TagsWrapper } from "./styles";

import Label from "Components/Label";

export interface Props {
  title: string;
  description: string;
  tags: string[];
}

export const Introduction: FC<Props> = ({ title, description, tags }) => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <Subtitle>{description}</Subtitle>
      <TagsWrapper>
        {tags?.map((name) => (
          <Label name={name} image={undefined} />
        ))}
      </TagsWrapper>
    </Container>
  );
};

export default Introduction;

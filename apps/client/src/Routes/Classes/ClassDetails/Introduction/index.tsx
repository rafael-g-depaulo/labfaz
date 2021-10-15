import React, { FC } from "react";

import { Container, MainTitle, Subtitle, TagsWrapper } from "./styles";

import Label from "Components/Label";
import styled from "styled-components"
export interface Props {
  title: string;
  description: string;
  tags: string[];
}

const LabelContainer = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 0.4em;

  p {
    padding: 0 0.8em;
  }
`

export const Introduction: FC<Props> = ({ title, description, tags }) => {
  return (
    <Container>
      <MainTitle>{title}</MainTitle>
      <Subtitle>{description}</Subtitle>
      <TagsWrapper>
        <LabelContainer>
          {tags?.map((name) => (
            <Label name={name} image={undefined} />
          ))}
        </LabelContainer>
      </TagsWrapper>
    </Container>
  );
};

export default Introduction;

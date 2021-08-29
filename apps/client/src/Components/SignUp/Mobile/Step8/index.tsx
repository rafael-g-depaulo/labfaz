import React, { FC } from 'react'

import { TextInput } from 'Components/Inputs/TextInput'

import { Container, ContentContainer, Content, InputTextContainer } from './style'

export const Step8: FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <TextInput
              name="artist.contact.twitter"
              label="Twitter"
              placeholder="@seutwitter"
            />
          </InputTextContainer>

          <InputTextContainer>
          <TextInput
              name="artist.contact.linkedin"
              label="Linkedin"
              placeholder="@seulinkedin"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.tiktok"
              label="Tiktok"
              placeholder="@seutiktok"
            />
          </InputTextContainer>

          <InputTextContainer>
            <TextInput
              name="artist.contact.youtube"
              label="Youtube"
              placeholder="@seuyoutube"
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

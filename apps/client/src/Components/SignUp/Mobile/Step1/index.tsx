import { FC } from 'react'

import {
  Container,
  ContentContainer,
  Content,
  InputText,
  InputTextContainer,
} from './style'

export const Step1: FC = () => {
  return (
    <Container>
      <ContentContainer>
        <Content>
          <InputTextContainer>
            <InputText
              name="artist.name"
              label="Nome"
              placeholder="Digite seu nome"
              obrigatory
            />
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              label="Nome Social"
              name="artist.social_name"
              placeholder="Digite seu nome social"
              informationText="Nome social não é o apelido, é o nome pelo qual pessoas transexuais, travestis e não binárias desejam ser chamadas ou socialmente reconhecidas e tem a ver com o respeito às identidades de gênero."
            />
          </InputTextContainer>

          <InputTextContainer>
            <InputText
              name="artist.artistic_name"
              label="Nome Artistico"
              placeholder="Digite seu nome artistico"
            />
          </InputTextContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

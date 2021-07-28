import React, { FC } from 'react'

import { Container, Content, TextLabel, InputText } from './style'

export const Step6: FC = () => {
  return (
    <Container>
        <div className="centralContent">
          <Content>
            <TextLabel>
              Sobre o meu trabalho: Descreva quais são as atividades e serviços
              oferecidos por você.
            </TextLabel>

            <InputText component="textarea" name="activities_and_services" />
          </Content>
        </div>
    </Container>
  )
}

import { useFormikContext } from 'formik'
import React, { FC } from 'react'

import { Container, Content, TextLabel, InputText } from './style'

interface ErrorProps {
  artist: {
    technical: {
      area: {
        describe: string
      }
    }
  }
}

export const Step6: FC = () => {
  const { errors } = useFormikContext<ErrorProps>()

  return (
    <Container>
      <div className="centralContent">
        <Content>
          <TextLabel>
            Sobre o meu trabalho: Descreva quais são as atividades e serviços
            oferecidos por você.<p className="obrigatory"> *</p>
          </TextLabel>

          {errors.artist?.technical?.area?.describe && (
            <span className="errorMessage">{errors.artist.technical.area.describe}</span>
          )}

          <InputText component="textarea" name="artist.technical.area.describe" />
        </Content>
      </div>
    </Container>
  )
}

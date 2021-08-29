import React, { FC } from 'react'

import { FileInput } from 'Components/Inputs/FileInput'

import {
  Container,
  ContentContainer,
  TextLabel,
  Content,
  InputText,
  FileContainer,
} from './style'
import { useFormikContext } from 'formik'

interface ErrorProps {
  artist: {
    technical: {
      area: {
        describe: String
      }
    }
  }
}

export const Step13: FC = () => {
  const { errors } = useFormikContext<ErrorProps>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <TextLabel>
            Descreva quais são as atividades e serviços oferecidos por você <p className="obrigatory"> *</p>:
            <span className="errorMessage">
              {errors.artist?.technical?.area?.describe &&
                errors.artist.technical.area.describe}
            </span>
          </TextLabel>

          <InputText component="textarea" name="artist.technical.area.describe" />

          <FileContainer>
            <FileInput
              name="artist.technical.area.curriculum"
              value="artist.technical.area.curriculum"
              label="Clique para enviar curriculo"
            />
          </FileContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

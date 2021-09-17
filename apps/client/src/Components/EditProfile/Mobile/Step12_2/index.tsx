import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
  LabelText,  
} from './style'


interface ErrorProps {
  artist: {
    technical: {
      areas: {
        technical_formation: string
      }
    }
  }
}

export const STEP12_2: FC = () => {
  const { errors } = useFormikContext<ErrorProps>()


  return (
    <Container>
      <ContentContainer>
        <Content>
          <LabelText>
            Formação técnica e profissional{' '}
            <label className="obrigatory"> *</label>
            <span>
              {errors.artist?.technical?.areas?.technical_formation &&
                errors.artist.technical.areas.technical_formation}
            </span>
          </LabelText>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="autodidata"
              label="Autodidata"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="curso especializado"
              label="Curso especializado na área"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="tecnico"
              label="Formação Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="tecnologica"
              label="Formação Tecnológica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.technical.areas.technical_formation"
              value="universitaria"
              label="Formação Universitária"
            />
          </InputRadioContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

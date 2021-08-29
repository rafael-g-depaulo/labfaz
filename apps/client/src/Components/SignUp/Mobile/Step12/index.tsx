import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { SelectInput } from 'Components/Inputs/SelectInput'
import { RadioInput } from 'Components/Inputs/RadioInput'

import { idiomOptions } from 'Utils/selectOptionsData'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
  SelectContainer,
  LabelText,
} from './style'

interface ErrorProps {
  artist: {
    technical: {
      area: {
        technical_formation: string
      }
    }
  }
}

export const Step12: FC = () => {
  const { errors } = useFormikContext<ErrorProps>()

  return (
    <Container>
      <ContentContainer>
        <Content>
          <SelectContainer>
            <label>O seu trabalho na tecnica esta ligado a qual area?</label>
            <SelectInput name="state" options={idiomOptions} />
          </SelectContainer>

          <SelectContainer>
            <label>Qual a sua profissão dentro desse setor?</label>
            <SelectInput name="state" options={idiomOptions} />
          </SelectContainer>

          <LabelText>
            Formação técnica e profissional <label className="obrigatory"> *</label>
            <span>
              {errors.artist?.technical?.area?.technical_formation &&
                errors.artist.technical.area.technical_formation}
            </span>
          </LabelText>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.area.technical_formation"
              value="Autodidata"
              label="Autodidata"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.area.technical_formation"
              value="Curso especializado na área"
              label="Curso especializado na área"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.area.technical_formation"
              value="Formação Técnica"
              label="Formação Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.area.technical_formation"
              value="Formação Tecnológica"
              label="Formação Tecnológica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.technical.area.technical_formation"
              value="Formação Universitária"
              label="Formação Universitária"
            />
          </InputRadioContainer>
        </Content>
      </ContentContainer>
    </Container>
  )
}

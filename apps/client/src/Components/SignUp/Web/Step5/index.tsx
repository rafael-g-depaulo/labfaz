import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { TextInput } from 'Components/Inputs/TextInput'
import { RadioInput } from 'Components/Inputs/RadioInput'
import { SelectInput } from 'Components/Inputs/SelectInput'
import { FileInput } from 'Components/Inputs/FileInput'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputRadioContainer,
  SelectContainer,
  FileContainer,
  OtherTechnicalArea
} from './style'

interface ErrorProps {
  artist: {
    technical: {
      areas: {
        name: string
        technical_formation: string
      }
    }
  }
}

export const Step5: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>()

  const options = [
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
    { value: '2021', label: '2021' },
  ]

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <label htmlFor="TecnicalArea" className="radioLabel">
            O seu trabalho na técnica está ligado à qual dessas áreas?
            <p className="obrigatory"> *</p>
            {errors.artist?.technical?.areas && (
              <span className="errorMessage">
                {errors.artist.technical.areas.name}
              </span>
            )}
          </label>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Áudio"
              label="Áudio"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Iluminação"
              label="Iluminação"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Cenografia"
              label="Cenografia"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Figurino"
              label="Figurino"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Maquiagem/Visagismo"
              label="Maquiagem/Visagismo"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Audiovisual"
              label="Audiovisual"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Montagem de palco e infra-estrutura"
              label="Montagem de palco e infra-estrutura"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Montagem de exposições"
              label="Montagem de exposições"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Produção Técnica"
              label="Produção Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Produção Operacional e logística"
              label="Produção Operacional e logística"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Novas tecnologias"
              label="Novas tecnologias"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Tecnologias Assistivas"
              label="Tecnologias Assistivas"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Serviços Gerais"
              label="Serviços Gerais"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Outro"
              label="Outro"
            />
          </InputRadioContainer>

          {values.artist.technical.areas.name === 'Outro' && (
            <OtherTechnicalArea
              label="Qual outra area?"
              name="Other_TechnicalArea"
              placeholder="Informe sua area"
            />
          )}
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <label htmlFor="TecnicalArea" className="radioLabel">
            Qual a sua profissão dentro desse setor?
          </label>

          <SelectContainer className="selectContent">
            <SelectInput name="artist.technical.profession" options={options} />
          </SelectContainer>

          <label htmlFor="TecnicalArea" className="radioLabel">
            Em qual ano você começou a trabalhar nessa área?
          </label>

          <SelectContainer className="selectContent">
            <SelectInput name="artist.technical.areas.started_year" options={options} />
          </SelectContainer>

          <label htmlFor="technical_formation" className="radioLabel">
            Formação técnica e profissional <p className="obrigatory"> *</p>
            {errors.artist?.technical?.areas && (
              <span className="errorMessage">
                {errors.artist.technical.areas.technical_formation}
              </span>
            )}
          </label>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="Autodidata"
              label="Autodidata"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="Curso especializado na área"
              label="Curso especializado na área"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="Formação Técnica"
              label="Formação Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="artist.technical.areas.technical_formation"
              value="Formação Tecnológica"
              label="Formação Tecnológica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="artist.technical.areas.technical_formation"
              value="Formação Universitária"
              label="Formação Universitária"
            />
          </InputRadioContainer>

          <FileContainer>
            <label htmlFor="curriculum" className="fileLabel">
              Curriculo
            </label>

            <FileInput
              name="curriculum"
              value="curriculum"
              label="Enviar curriculo"
            />
          </FileContainer>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}

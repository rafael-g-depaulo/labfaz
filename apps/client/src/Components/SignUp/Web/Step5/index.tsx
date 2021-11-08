import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { TextInput } from 'Components/Inputs/TextInput'
import { RadioInput } from 'Components/Inputs/RadioInput'
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
  OtherTechnicalArea,
} from './style'

interface ErrorProps {
  artist: {
    technical: {
      areas: {
        name: string
        technical_formation: string
        started_year: string
      }
    }
  }
}

export const Step5: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <label htmlFor="TecnicalArea" className="radioLabel">
            O seu trabalho na técnica está ligado à qual dessas áreas?
            <p className="obrigatory"> *</p>
            {errors.artist?.technical?.areas?.name && (
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
            <TextInput
              name="artist.technical.profession"
              placeholder="Digite sua profissão"
            />
          </SelectContainer>

          <label htmlFor="TecnicalArea" className="radioLabel">
            Em qual ano você começou a trabalhar nessa área?
            {errors.artist?.technical?.areas && (
              <span className="errorMessage">
                {errors.artist.technical.areas.started_year}
              </span>
            )}
          </label>

          <SelectContainer className="selectContent">
            <TextInput
              name="artist.technical.areas.started_year"
              inputMask="9999"
              placeholder="2010"
            />
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

          <FileContainer>
            <label htmlFor="curriculum" className="fileLabel">
              Curriculo  (opcional)
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

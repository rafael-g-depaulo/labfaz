import React, { FC } from 'react'

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
} from './style'

export const Step5: FC = () => {
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
          </label>

          <InputRadioContainer>
            <RadioInput name="TecnicalArea" value="Áudio" label="Áudio" />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Iluminação"
              label="Iluminação"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Cenografia"
              label="Cenografia"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput name="TecnicalArea" value="Figurino" label="Figurino" />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Maquiagem/Visagismo"
              label="Maquiagem/Visagismo"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Audiovisual"
              label="Audiovisual"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Montagem de palco e infra-estrutura"
              label="Montagem de palco e infra-estrutura"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Montagem de exposições"
              label="Montagem de exposições"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Produção Técnica"
              label="Produção Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Produção Operacional e logística"
              label="Produção Operacional e logística"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Novas tecnologias"
              label="Novas tecnologias"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Tecnologias Assistivas"
              label="Tecnologias Assistivas"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="TecnicalArea"
              value="Serviços Gerais"
              label="Serviços Gerais"
            />
          </InputRadioContainer>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          <label htmlFor="TecnicalArea" className="radioLabel">
            Em qual ano você começou a trabalhar nessa área?
          </label>

          <SelectContainer className="selectContent">
            <SelectInput name="main_name" options={options} />
          </SelectContainer>

          <label htmlFor="technical_formation" className="radioLabel">
            Formação técnica e profissional
          </label>

          <InputRadioContainer>
            <RadioInput
              name="technical_formation"
              value="Autodidata"
              label="Autodidata"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="technical_formation"
              value="Curso especializado na área"
              label="Curso especializado na área"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="technical_formation"
              value="Formação Técnica"
              label="Formação Técnica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              name="technical_formation"
              value="Formação Tecnológica"
              label="Formação Tecnológica"
            />
          </InputRadioContainer>

          <InputRadioContainer>
            <RadioInput
              type="radio"
              name="technical_formation"
              value="Formação Universitária"
              label="Formação Universitária"
            />
          </InputRadioContainer>

          <FileContainer>
            <label htmlFor="curriculum" className="radioLabel">
              Curriculo
            </label>

            <FileInput
              name="curriculum"
              value="curriculum"
              label="Clique para enviar foto"
            />
          </FileContainer>
        </RightSideContent>
      </RightSide>
    </Container>
  )
}

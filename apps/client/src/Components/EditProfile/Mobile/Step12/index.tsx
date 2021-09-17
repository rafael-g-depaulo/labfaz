import React, { FC, useRef, useState } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'

import {
  Container,
  ContentContainer,
  Content,
  SelectContainer,
  IdiomOptionsContainer,
  InputSelect,
  CheckboxContainer,
  OtherTechnicalArea,
  LabelText
} from './style'
import { TextInput } from 'Components/Inputs/TextInput'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

interface ErrorProps {
  artist: {
    technical: {
      areas: {
        technical_formation: string
        name: string
      }
    }
  }
}

export const Step12: FC = () => {
  const { values, errors } = useFormikContext<ErrorProps>()

  const [isIdiomOptionsOpen, setIsIdiomOptionsOpen] = useState(false)
  const modalRef = useRef<HTMLInputElement | null>(null)

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setIsIdiomOptionsOpen(false)
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Content>
          <SelectContainer
            onClick={() => setIsIdiomOptionsOpen(!isIdiomOptionsOpen)}
          >
            <LabelText>
            O seu trabalho na técnica está ligado à qual dessas áreas?
              <label className="obrigatory"> *</label>
              <span>
                {errors.artist?.technical?.areas?.name &&
                  errors.artist.technical.areas.name}
              </span>
            </LabelText>
            <InputSelect>
              {values.artist?.technical?.areas.name
                ? values.artist.technical?.areas.name
                : 'Selecione'}
              <IoMdArrowDropdownCircle />
            </InputSelect>
          </SelectContainer>

          {values.artist.technical.areas.name === 'Outro' && (
            <OtherTechnicalArea
              label="Qual outra area?"
              name="Other_TechnicalArea"
              placeholder="Informe sua area"
            />
          )}

          <SelectContainer>
            <label>Qual a sua profissão dentro desse setor?</label>
            <TextInput
              name="artist.technical.profession"
              placeholder="Digite sua profissão"
            />
          </SelectContainer>

          <SelectContainer>
            <label>Em qual ano você começou a trabalhar nessa área?</label>
            <TextInput
              name="artist.technical.areas.started_year"
              placeholder="2010"
              inputMask="9999"
              obrigatory
            />
          </SelectContainer>
        </Content>
        <IdiomOptionsContainer
          ref={modalRef}
          onClick={closeModal}
          isOpen={isIdiomOptionsOpen}
        >
          <CheckboxContainer>
            <RadioInput
              name="artist.technical.areas.name"
              value="Áudio"
              label="Áudio"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Iluminação"
              label="Iluminação"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Cenografia"
              label="Cenografia"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Figurino"
              label="Figurino"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Maquiagem/Visagismo"
              label="Maquiagem/Visagismo"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Audiovisual"
              label="Audiovisual"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Montagem de palco e infra-estrutura"
              label="Montagem palco/infra-estrutura"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Montagem de exposições"
              label="Montagem de exposições"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Produção Técnica"
              label="Produção Técnica"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Produção Operacional e logística"
              label="Produção Operacional e logística"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Novas tecnologias"
              label="Novas tecnologias"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Tecnologias Assistivas"
              label="Tecnologias Assistivas"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Serviços Gerais"
              label="Serviços Gerais"
            />

            <RadioInput
              name="artist.technical.areas.name"
              value="Outro"
              label="Outro"
            />
          </CheckboxContainer>
        </IdiomOptionsContainer>
      </ContentContainer>
    </Container>
  )
}

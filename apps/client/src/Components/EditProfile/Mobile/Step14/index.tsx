import React, { FC, useRef, useState } from 'react'
import { useFormikContext } from 'formik'
import { IoMdArrowDropdownCircle } from 'react-icons/io'

import { TextInput } from 'Components/Inputs/TextInput'
import { RadioInput } from 'Components/Inputs/RadioInput'

import { certificationOptionsMobile } from 'Utils/selectOptionsData'

import {
  Container,
  ContentContainer,
  Content,
  InputRadioContainer,
  SelectContainer,
  LabelText,
  CheckboxContainer,
  CertificationOptionsContainer,
  InputCheckbox,
  InputSelect,
  TechnicalContainer
} from './style'

interface ErrorProps {
  artist: {
    technical: {
      is_drt: string
      is_ceac: string
    }
  }
}

export const Step14: FC = () => {
  const [isIdiomOptionsOpen, setIsIdiomOptionsOpen] = useState(false)
  const modalRef = useRef<HTMLInputElement | null>(null)

  const { values, errors } = useFormikContext<ErrorProps>()

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
            <label>Voce possui certificacoes de treinamento?</label>
            <InputSelect>
              Selecione
              <IoMdArrowDropdownCircle />
            </InputSelect>
          </SelectContainer>

          <LabelText>
            Você possui Certificação/DRT? <p className="obrigatory"> *</p>
            <span className="errorMessage">
              {errors.artist?.technical?.is_drt &&
                errors.artist.technical.is_drt}
            </span>
          </LabelText>

          <TechnicalContainer>
            <InputRadioContainer>
              <RadioInput
                id="yes_is_drt"
                type="radio"
                name="artist.technical.is_drt"
                value="true"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_drt"
                type="radio"
                name="artist.technical.is_drt"
                value="false"
                label="Não"
              />
            </InputRadioContainer>

            {values.artist.technical.is_drt === 'true' && (
              <TextInput
                name="artist.technical.drt"
                placeholder="Número do drt"
              />
            )}
          </TechnicalContainer>

          <LabelText>
            Você possui CEAC? <p className="obrigatory"> *</p>
            <span className="errorMessage">
              {errors.artist?.technical?.is_ceac &&
                errors.artist.technical.is_ceac}
            </span>
          </LabelText>

          <TechnicalContainer>
            <InputRadioContainer>
              <RadioInput
                id="yes_is_ceac"
                type="radio"
                name="artist.technical.is_ceac"
                value="true"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_ceac"
                type="radio"
                name="artist.technical.is_ceac"
                value="false"
                label="Não"
              />

              {values.artist.technical.is_ceac === 'true' && (
                <TextInput
                  name="artist.technical.ceac"
                  placeholder="Número do ceac"
                />
              )}
            </InputRadioContainer>
          </TechnicalContainer>
        </Content>
      </ContentContainer>
      <CertificationOptionsContainer
        ref={modalRef}
        onClick={closeModal}
        isOpen={isIdiomOptionsOpen}
      >
        <CheckboxContainer>
          {certificationOptionsMobile.map((certification, index) => (
            <InputCheckbox
              key={index}
              type="checkbox"
              inputRightSide
              name="artist.technical.areas.certificate"
              value={certification.value}
            >
              {certification.label}
            </InputCheckbox>  
          ))}
        </CheckboxContainer>
      </CertificationOptionsContainer>
    </Container>
  )
}

import React, { FC } from 'react'
import { useFormikContext } from 'formik'

import { RadioInput } from 'Components/Inputs/RadioInput'

import { OnlyNumbers } from 'Utils/inputRegex'

import {
  Container,
  LeftSide,
  LeftSideContent,
  RightSide,
  RightSideContent,
  InputText,
  CnpjText,
  InputRadioContainer,
} from './style'

interface Step8Props {
  artist: {
    technical: {
      is_drt: string
      is_ceac: string
      is_cnpj: string
    }
  }

  is_drt: string
  drt_number: string
  is_ceac: string
  ceac_number: string
  is_cnpj: string
  company_name: string
  cnpj_number: string
}

export const Step8: FC = () => {
  const { values, setFieldValue, errors } = useFormikContext<Step8Props>()

  return (
    <Container>
      <LeftSide>
        <LeftSideContent>
          <div className="container">
            <label htmlFor="is_drt" className="radioLabel">
              Você possui Certificação/DRT? <p className="obrigatory"> *</p>
              <span className="errorMessage">
                {errors.artist?.technical?.is_drt &&
                  errors.artist.technical.is_drt}
              </span>
            </label>

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
              <InputText
                name="artist.technical.drt"
                placeholder="Digite seu DRT"
                label="Número do DRT"
              />
            )}
          </div>

          <div className="container">
            <label htmlFor="is_ceac" className="radioLabel">
              Você possui CEAC? <p className="obrigatory"> *</p>
              <span className="errorMessage">
                {errors.artist?.technical?.is_ceac &&
                  errors.artist.technical.is_ceac}
              </span>
            </label>

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
            </InputRadioContainer>

            {values.artist.technical.is_ceac === 'true' && (
              <InputText
                name="artist.technical.ceac"
                placeholder="Digite seu CEAC"
                label="Número do CEAC"
              />
            )}
          </div>

          <div className="container">
            <label htmlFor="is_cnpj" className="radioLabel">
              Você possui CNPJ? <p className="obrigatory"> *</p>
              <span className="errorMessage">
                {errors.artist?.technical?.is_cnpj &&
                  errors.artist.technical.is_cnpj}
              </span>
            </label>

            <InputRadioContainer>
              <RadioInput
                id="yes_is_cnpj"
                type="radio"
                name="artist.technical.is_cnpj"
                value="true"
                label="Sim"
              />
            </InputRadioContainer>

            <InputRadioContainer>
              <RadioInput
                id="not_is_cnpj"
                type="radio"
                name="artist.technical.is_cnpj"
                value="false"
                label="Não"
              />
            </InputRadioContainer>

            {values.artist.technical.is_cnpj === 'true' && (
              <>
                {/* <InputText
                  name="artist.technical.name_enterprise"
                  placeholder="Digite o nome da sua empresa"
                  label="Nome da empresa"
                /> */}

                <CnpjText
                  name="artist.technical.cnpj"
                  placeholder="Digite seu CNPJ"
                  label="Número do CNPJ"
                  inputMask="99.999.999/9999-99"
                  onChange={(ev: any) =>
                    setFieldValue('cnpj_number', OnlyNumbers(ev.target.value))
                  }
                />
              </>
            )}
          </div>
        </LeftSideContent>
      </LeftSide>

      <RightSide>
        <RightSideContent>
          {values.artist.technical.is_cnpj === 'true' && (
            <>
              <label htmlFor="cnpj_category" className="radioLabel">
                Seu CNPJ se enquadra em:
              </label>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="MEI"
                  label="MEI"
                />
              </InputRadioContainer>
              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Microempresa"
                  label="Microempresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Pequena empresa"
                  label="Pequena empresa"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Eireli"
                  label="Eireli"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="OSC"
                  label="OSC"
                />
              </InputRadioContainer>

              <InputRadioContainer>
                <RadioInput
                  type="radio"
                  name="artist.technical.cnpj_type"
                  value="Outro"
                  label="Outro"
                />
              </InputRadioContainer>

              {/* <TextInputContainer>
                <TextInput
                  name="company_name"
                  placeholder="Descreva a area de atuacao da sua empresa"
                  label="Em qual area sua empresa atua?"
                />
              </TextInputContainer> */}
            </>
          )}
        </RightSideContent>
      </RightSide>
    </Container>
  )
}
